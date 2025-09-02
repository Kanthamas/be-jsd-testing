import { describe, it, expect } from "vitest";
import { formatDate } from "../src/formatDate.js";

describe("formatDate (DD-MM-YYYY)", () => {
	it("DATE-TC-001: formats 1 Jan 2025 as 01-01-2025", () => {
		const date = new Date(2025, 0, 1); // Month is 0-indexed
		expect(formatDate(date)).toBe("01-01-2025");
	});

	it("DATE-TC-002: formats 9 Sep 2025 as 09-09-2025", () => {
		const date = new Date(2025, 8, 9);
		expect(formatDate(date)).toBe("09-09-2025");
	});

	it("DATE-TC-003: formats 31 Dec 1999 as 31-12-1999", () => {
		const date = new Date(1999, 11, 31);
		expect(formatDate(date)).toBe("31-12-1999");
	});

	it("DATE-TC-004: throws error when input is not a Date object", () => {
		expect(() => formatDate("2025-01-01")).toThrow("Invalid date");
	});

	it("DATE-TC-005: throws error when input is an invalid Date", () => {
		const invalidDate = new Date("Invalid");
		expect(() => formatDate(invalidDate)).toThrow("Invalid date");
	});
});
