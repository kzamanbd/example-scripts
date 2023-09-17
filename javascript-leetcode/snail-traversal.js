/**
 * @param {number} rowsCount
 * @param {number} colsCount
 * @return {Array<Array<number>>}
 */
Array.prototype.snail = function (rowsCount, colsCount) {
	const copyArr = [...this];
	const matrix = [];

	let count = 0;

	while (copyArr.length > 0) {
		const splicedArr = copyArr.splice(0, rowsCount);
		if (count % 2 != 0) splicedArr.reverse();
		matrix.push(splicedArr);
		count++;
	}

	const length = matrix.length;
	for (let row = 0; row < length; row++) {
		for (let column = 0; column < row; column++) {
			let temp = matrix[row][column];
			matrix[row][column] = matrix[column][row];
			matrix[column][row] = temp;
		}
	}
	console.log(matrix);
};

const arr = [19, 10, 3, 7, 9, 8, 5, 2, 1, 17, 16, 14, 12, 18, 6, 13, 11, 20, 4, 15];
arr.snail(5, 4); //
/**
 * Output
 [
	[19, 17, 16, 15],
	[10, 1, 14, 4],
	[3, 2, 12, 20],
	[7, 5, 18, 11],
	[9, 8, 6, 13]
]; */
