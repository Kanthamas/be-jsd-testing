/* export function calculateShipping(type, amount) {
  if (type === "standard") {
    if (amount < 50) {
      return 5;
    } else {
      return 0;
    }
  } else if (type === "express") {
    if (amount < 50) {
      return 10;
    } else {
      return 5;
    }
  } else {
    return 0; // Unknown type
  }
} */


export function calculateShipping(type, amount) {
	const shippingRules = {
		standard: amount < 50 ? 5 : 0,
		express: amount < 50 ? 10 : 5,
	};

	return shippingRules[type] ?? 0;
}