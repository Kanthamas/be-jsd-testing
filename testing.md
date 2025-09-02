# JavaScript Testing

- Manual Testing
- Automated Testing

## Automated Testing Setup

Learn how to write automated tests (unit & integration tests) for your JavaScript projects with Vitest

---

### Application Setup and Code

- Test Runner --> Run tests and display results
- Assertion Library --> Define expected outcomes

### Installing Vitest

Install Vitest:

```terminal
npm install -D vitest
```

Config: `package.json`

```json
// package.json //
{
	"scripts": {
		"test": "vitest"
	}
}
```

Run Tests:

```terminal
npm test
```

---

## The Basics

### Understand Unit Testing Fundamentals

- Creating Unit Tests

  - Create a test file `fileName.test.js`
  - Create test cases

  ```js
  import { it, expect } from "vitest";
  import { functionName } from "./module.js";

  it("should describe the expected behavior", () => {
  // Arrange: Setup the input values and expected output
  const input = /* your input */;
  const expectedOutput = /* expected result */;

  // Act: Call the function with the input
  const result = functionName(input);

  // Assert: Check if the result matches the expected output
  expect(result).toBe(expectedOutput);
  });
  ```

- AAA (Arrange | Act | Assert)
  - Arrange: Define the testing environment and values
  - Act: Run the actual code that should be tested
  - Assert: Evaluate the produced result and compare to the expected value
- What to Test and How to Organize Tests
  - Every test case adds new coverage—no two tests check the same thing
  - No unnecessary duplication
  - Tests cover all logical branches of the function’s behavior
