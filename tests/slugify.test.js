import { describe, it, expect } from "vitest";
import { slugify } from "../src/slugify.js";

describe("slugify", () => {
	it("TC-001: converts text to lowercase and hyphens", () => {
		expect(slugify("Hello World")).toBe("hello-world");
	});

	it("TC-002: removes punctuation", () => {
		expect(slugify("Hello!!! World??")).toBe("hello-world");
	});

	it("TC-003: collapses multiple spaces into one hyphen", () => {
		expect(slugify("Hello     World")).toBe("hello-world");
	});

	it("TC-004: trims leading and trailing hyphens", () => {
		expect(slugify("---Hello World---")).toBe("hello-world");
	});

	it("TC-005: handles mixed case, punctuation, and spaces", () => {
		expect(slugify("  Hello___World!!   ")).toBe("hello-world");
	});

	it("TC-006: returns empty string if no valid characters", () => {
		expect(slugify("!!!___---")).toBe("");
	});
});
