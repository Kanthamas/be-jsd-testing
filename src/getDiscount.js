export function getDiscount(type, amount) {
	if (type === "regular" && amount >= 100) {
		return 10;
	} else if (type === "regular" && amount < 100) {
		return 5;
	} else if (type === "vip" && amount >= 100) {
		return 20;
	} else if (type === "vip" && amount < 100) {
		return 15;
	} else {
		return 0;
	}
}


/* export function getDiscount(type, amount) {
	const discountRules = {
		regular: amount >= 100 ? 10 : 5,
		vip: amount >= 100 ? 20 : 15,
	};

	return discountRules[type] ?? 0;
} */