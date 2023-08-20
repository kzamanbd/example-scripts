/**
 * @param {Array} arr
 * @param {number} size
 * @return {Array[]}
 */
var chunk = function (arr, size) {
	const totalChunk = Math.ceil(arr.length / size);

	if (arr.length === size || !arr.length) {
		return arr;
	}

	let count = 0;
	let startIndex = 0;
	let endIndex = size;

	const chunkedArray = [];

	while (totalChunk > count) {
		const chunk = arr.slice(startIndex, endIndex);
		if (chunk.length) {
			chunkedArray.push(chunk);
		}
		startIndex = startIndex + chunk.length;
		endIndex = endIndex + chunk.length;
		count++;
	}
	return chunkedArray;
};

// input
const arr = [1];
const size = 1;
console.log(chunk(arr, size));
