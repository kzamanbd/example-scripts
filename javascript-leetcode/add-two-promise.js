/**
 * @param {Promise} promise1
 * @param {Promise} promise2
 * @return {Promise}
 */
var addTwoPromises = async function (promise1, promise2) {
	const values = await Promise.all([promise1, promise2]);
	return values.reduce((acc, val) => acc+val, 0)
};

addTwoPromises(Promise.resolve(2), Promise.resolve(2)).then(value => {
    console.log(value)
}); // 4
