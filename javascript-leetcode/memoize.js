/**
 * @param {Function} fn
 */
function memoize(fn) {
	const cache = {};
	return function (...args) {
		const key = JSON.stringify(args);
		if (cache[key] != undefined) {
			return cache[key];
		}

		const result = fn(...args);
		cache[key] = result;
		return result;
	};
}

let callCount = 0;
const memoizedFn = memoize(function (a, b) {
	callCount += 1;
	return a + b;
});
memoizedFn(2, 0); // 5
memoizedFn(0, 2); // 5
console.log(callCount); // 1
