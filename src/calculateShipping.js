export function calculateShipping(type, amount) {
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
}
