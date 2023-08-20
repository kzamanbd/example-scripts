/* Input: 
array = [
  {"id":"1"},
  {"id":"1"},
  {"id":"2"}
], 
fn = function (item) { 
  return item.id; 
}
Output: 
{ 
  "1": [{"id": "1"}, {"id": "1"}],   
  "2": [{"id": "2"}] 
}
Explanation:
Output is from array.groupBy(fn).
The selector function gets the "id" out of each item in the array.
There are two objects with an "id" of 1. Both of those objects are put in the first array.
There is one object with an "id" of 2. That object is put in the second array. */

/**
 * @param {Function} fn
 * @return {Array}
 */
Array.prototype.groupBy = function (fn) {
	const grouped = {},
		length = this.length;
	for (let i = 0; i < length; i++) {
		const key = fn(this[i]);

		if (grouped[key] === undefined) {
			grouped[key] = [];
		}
		grouped[key].push(this[i]);
	}

	return grouped;
};
const arr = [
	[1, 2, 3],
	[1, 3, 5],
	[1, 5, 9]
];
const fn = function (item) {
	return String(item[0]);
};

const value = arr.groupBy(fn); // {"1":[1],"2":[2],"3":[3]}
console.table(value);
