export function sum(a, b) {
	if (typeof a !== "number" || typeof b !== "number") {
		throw new Error("Invalid inputs");
	}
	return a + b;
}

// export function sum(...numbers) {
// 	let result = 0;
// 	for (let i = 0; i < numbers.length; i++) {
// 		if (typeof numbers[i] !== "number" || isNaN(numbers[i])) {
// 			throw new Error("Invalid inputs");
// 		}
// 		result += numbers[i];
// 	}
// 	return result;
// }
