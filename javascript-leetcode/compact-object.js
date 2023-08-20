/**
 * @param {Object} obj
 * @return {Object}
 */
const compactObject = (val) => {
	const data = Array.isArray(val) ? val.filter(Boolean) : val;
	return Object.keys(data).reduce(
		(acc, key) => {
			const value = data[key];
			if (Boolean(value)) {
				acc[key] = typeof value === 'object' ? compactObject(value) : value;
			}
			return acc;
		},
		Array.isArray(val) ? [] : {}
	);
};
const obj = [null, 0, 5, [0], [false, 16]];

console.log(compactObject(obj));
