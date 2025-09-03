# shipping.js

Create a function calculateShipping(type, amount) that calculates the shipping cost based on the shipping type and order amount:

- Standard Shipping:

   - Orders under $50 → $5

   - Orders $50 or more → Free

- Express Shipping:

   - Orders under $50 → $10

   - Orders $50 or more → $5

- Unknown shipping types: $0


| Spec ID  | Description                                                      |
| -------- | ---------------------------------------------------------------- |
| SHIP-001 | Accepts `type` (string) and `amount` (number) as parameters.     |
| SHIP-002 | Returns correct shipping cost based on type and amount.          |
| SHIP-003 | Returns \$0 for unknown shipping types.                          |
| SHIP-004 | Should handle edge case when `amount` is exactly \$50 correctly. |


| Test Case ID | Input                | Expected Output |
| ------------ | -------------------- | --------------- |
| SHIP-TC-001  | `("standard", 30)`   | `5`             |
| SHIP-TC-002  | `("standard", 70)`   | `0`             |
| SHIP-TC-003  | `("express", 40)`    | `10`            |
| SHIP-TC-004  | `("express", 60)`    | `5`             |
| SHIP-TC-005  | `("overnight", 100)` | `0`             |
| SHIP-TC-006  | `("standard", 50)`   | `0`             |


```js
// src/calculateShipping.js


```