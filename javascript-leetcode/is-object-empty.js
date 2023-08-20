/**
 * @param {Object | Array} obj
 * @return {boolean}
 */
var isEmpty = function (obj) {
	for (let key in obj) {
		if (obj[key]) {
			return false;
		}
	}
	return true;
};

console.log(isEmpty([null, false, 0]));
