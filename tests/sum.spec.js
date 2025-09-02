// import { expect, test } from "vitest";
import { sum } from "../src/sum.js";

test("adds 1 + 2 to equal 3", () => {
	expect(sum(1, 2)).toBe(3);
});

test("adds 1 + 2 not to equal 4", () => {
	expect(sum(1, 2)).not.toBe(4);
});

test("throws error when inputs are not numbers", () => {
	expect(() => sum("1", 2)).toThrow("Invalid inputs");
});

// test("adds 1 + 2 + 3 to equal 6", () => {
// 	expect(sum(1, 2, 3)).toBe(6);
// });
