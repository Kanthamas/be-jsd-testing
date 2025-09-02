import { describe, it, expect } from "vitest";
import { divide } from "../src/divide.js";

describe("divide()", () => {
	it("returns quotient for two finite numbers", () => {
		expect(divide(6, 3)).toBe(2);
		expect(divide(1, 2)).toBe(0.5);
	});

	it("handles repeating decimals (use close-to)", () => {
		expect(divide(1, 3)).toBeCloseTo(0.3333333333, 10);
	});

	it("preserves sign correctly", () => {
		expect(divide(-8, 2)).toBe(-4);
		expect(divide(8, -2)).toBe(-4);
		expect(divide(-8, -2)).toBe(4);
	});

	it("returns 0 when dividend is 0 and divisor is non-zero", () => {
		expect(divide(0, 5)).toBe(0);
	});

	it("throws RangeError when divisor is +0 or -0", () => {
		expect(() => divide(7, 0)).toThrow(RangeError);
		expect(() => divide(7, -0)).toThrow("Cannot divide by zero");
	});

	it("throws TypeError when inputs are not finite numbers", () => {
		expect(() => divide("6", 3)).toThrow(TypeError);
		expect(() => divide(6, "3")).toThrow("Inputs must be finite numbers");
		expect(() => divide(NaN, 2)).toThrow(TypeError);
		expect(() => divide(Infinity, 2)).toThrow(TypeError);
		expect(() => divide(2, -Infinity)).toThrow(TypeError);
	});
});
