export function divide(dividend, divisor) {
	validateNumbers(dividend, divisor);
	if (divisor === 0) throw new RangeError("Cannot divide by zero");
	return dividend / divisor;
}

export function validateNumbers(...nums) {
	for (const num of nums) {
		if (typeof num !== "number" || !Number.isFinite(num)) {
			throw new TypeError("Inputs must be finite numbers");
		}
	}
}
