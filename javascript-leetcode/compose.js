/**
 * @param {Function[]} functions
 * @return {Function}
 */
var compose = function (functions) {
	return function (x) {
		let passValue = x;
		functions.reverse().forEach((fn) => {
			const fnVal = fn(passValue);
			passValue = fnVal;
			console.log('fnVal', fnVal);
		});
		return passValue;
	};
};

const fn = compose([
	(x) => {
		console.log('passed 1', x);
		return x + 1;
	},
	(x) => {
		console.log('passed 2', x);
		return 2 * x;
	}
]);

console.log(fn(4)); // 9
