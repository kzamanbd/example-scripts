/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {
	const expected = [];
	const length = nums.length;
	for (let i = 0; i < length; i++) {
		if (expected.includes(nums[i]) != undefined) {
			expected.push(nums[i]);
		}
	}
	return expected;
};

console.log(removeDuplicates([0, 0, 1, 1, 1, 2, 2, 3, 3, 4]));
