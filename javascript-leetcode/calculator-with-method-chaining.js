class Calculator {
	/**
	 * @param {number} value
	 */
	constructor(value) {
		this.value = value;
	}

	/**
	 * @param {number} value
	 * @return {Calculator}
	 */
	add(value) {
		this.value = this.value + value;
		return this;
	}

	/**
	 * @param {number} value
	 * @return {Calculator}
	 */
	subtract(value) {
		this.value = this.value - value;
		return this;
	}

	/**
	 * @param {number} value
	 * @return {Calculator}
	 */
	multiply(value) {
		this.value = this.value * value;
		return this;
	}

	/**
	 * @param {number} value
	 * @return {Calculator}
	 */
	divide(value) {
		this.value = value ? this.value / value : 'Division by zero is not allowed';
		return this;
	}

	/**
	 * @param {number} value
	 * @return {Calculator}
	 */
	power(value) {
		this.value = Math.pow(this.value, value);
		return this;
	}

	/**
	 * @return {number}
	 */
	getResult() {
		console.log(this.value);
		return this.value;
	}
}
new Calculator(2).multiply(5).power(2).getResult(); // (2 * 5) ^ 2 = 100
