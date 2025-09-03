import { describe, it, expect } from "vitest";
import { getDiscount } from "../src/getDiscount.js";

describe("getDiscount", () => {
	it("gives 10% for regular customers spending 100 or more", () => {
		expect(getDiscount("regular", 150)).toBe(10);
	});

	it("gives 5% for regular customers spending less than 100", () => {
		expect(getDiscount("regular", 50)).toBe(5);
	});

	it("gives 20% for VIP customers spending 100 or more", () => {
		expect(getDiscount("vip", 200)).toBe(20);
	});

	it("gives 15% for VIP customers spending less than 100", () => {
		expect(getDiscount("vip", 80)).toBe(15);
	});

	it("gives 0% for unknown customer types", () => {
		expect(getDiscount("guest", 100)).toBe(0);
	});
});
