// shipping.test.js
import { describe, it, expect } from "vitest";
import { calculateShipping } from "../src/shipping.js";

describe("calculateShipping", () => {
	it("charges $5 for standard shipping under $50", () => {
		expect(calculateShipping("standard", 30)).toBe(5);
	});

	it("is free for standard shipping $50 or more", () => {
		expect(calculateShipping("standard", 70)).toBe(0);
	});

	it("charges $10 for express shipping under $50", () => {
		expect(calculateShipping("express", 40)).toBe(10);
	});

	it("charges $5 for express shipping $50 or more", () => {
		expect(calculateShipping("express", 60)).toBe(5);
	});

	it("returns $0 for unknown shipping types", () => {
		expect(calculateShipping("overnight", 100)).toBe(0);
	});

	it("is free for standard shipping when amount is exactly $50", () => {
		expect(calculateShipping("standard", 50)).toBe(0);
	});
});
