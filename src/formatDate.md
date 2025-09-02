# formatDate.js

Create a function formatDate(date) that accepts a JavaScript Date object and returns the date as a string in DD-MM-YYYY format.

Day and Month should always be two digits (e.g., 01, 09).
Year should be four digits.

| Spec ID  | Description                                                     |
| -------- | --------------------------------------------------------------- |
| DATE-001 | Input must be a valid `Date` object.                            |
| DATE-002 | Output format must be `DD-MM-YYYY`.                             |
| DATE-003 | Day and Month must be zero-padded if less than 10.              |
| DATE-004 | Function should throw an error if input is not a `Date` object. |

| Test Case ID | Input                    | Expected Output           |
| ------------ | ------------------------ | ------------------------- |
| DATE-TC-001  | `new Date(2025, 0, 1)`   | `"01-01-2025"`            |
| DATE-TC-002  | `new Date(2025, 8, 9)`   | `"09-09-2025"`            |
| DATE-TC-003  | `new Date(1999, 11, 31)` | `"31-12-1999"`            |
| DATE-TC-004  | `"2025-01-01"`           | Error (not a Date object) |
| DATE-TC-005  | `new Date("Invalid")`    | Error (invalid Date)      |

```js
// src/formatDate.js

export function formatDate(date) {
	if (!(date instanceof Date) || isNaN(date.getTime())) {
		throw new Error("Invalid date");
	}

	const day = String(date.getDate()).padStart(2, "0");
	const month = String(date.getMonth() + 1).padStart(2, "0");
	const year = date.getFullYear();

	return `${day}-${month}-${year}`;
}
```

Testing

```js
// tests/formatDate.test.js

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
```
