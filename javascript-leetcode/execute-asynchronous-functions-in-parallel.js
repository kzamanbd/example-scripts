/* Given an array of asynchronous functions functions, return a new promise promise. Each function in the array accepts no arguments and returns a promise.

promise resolves:

When all the promises returned from functions were resolved successfully. The resolved value of promise should be an array of all the resolved values of promises in the same order as they were in the functions.
promise rejects:

When any of the promises returned from functions were rejected. promise should also reject with the reason of the first rejection.
Please solve it without using the built-in Promise.all function. */

/**
 * @param {Array<Function>} functions
 * @return {Promise<any>}
 */
var promiseAll = async function (functions) {
	return new Promise((resolve, reject) => {
		const result = [];
		let count = 0;
		functions.forEach((fn, i) => {
			fn()
				.then((res) => {
					count++;
					result[i] = res;
					if (count === functions.length) {
						resolve(result);
					}
				})
				.catch(reject);
		});
	});
};

const promise = promiseAll([
	() => new Promise((resolve) => setTimeout(() => resolve(4), 50)),
	() => new Promise((resolve) => setTimeout(() => resolve(10), 150)),
	() => new Promise((resolve) => setTimeout(() => resolve(16), 100))
]);
promise.then(console.log); // [42]
