```markdown
# Operators and Variable Hoisting in JavaScript

---

## 1. Arithmetic Operators

Arithmetic operators perform mathematical operations between numeric values and return a result.

Operators:
+ Addition  
- Subtraction  
* Multiplication  
/ Division  
% Modulus (remainder)  
** Exponentiation (raising to the power)

Examples:
```
12 + 13   // 25
12 - 13   // -1
12 * 13   // 156
12 / 13   // 0.9230...
12 % 13   // 12 (remainder)
2 ** 3    // 8
```

Notes:
- Division always returns a floating-point value.
- Modulus helps determine even or odd numbers (n % 2).
- Exponentiation works like Math.pow(2, 3).

---

## 2. Assignment Operators

These assign or modify the value of variables. They provide shorthand syntax for updating variables.

Operators:
=, +=, -=, *=, /=, %=

Examples:
```
let a = 12;
a += 3;  // a = 15
a -= 5;  // a = 10
a *= 2;  // a = 20
a /= 5;  // a = 4
a %= 3;  // a = 1
```

Notes:
- Assignment operations evaluate from right to left.
- Can be chained (x = y = z = 10).

---

## 3. Comparison Operators

Used to compare two values and return a Boolean result (true or false).

Operators:
==, ===, !=, !==, <, >, <=, >=

Examples:
```
12 == '12'   // true
12 === '12'  // false
12 != '12'   // false
12 !== '12'  // true
12 < 13      // true
12 >= 12     // true
```

Notes:
- Always prefer === and !== for reliable comparisons.
- == performs type coercion and may lead to errors.

---

## 4. Logical Operators

These combine or invert Boolean values or expressions.

Operators:
&& (AND), || (OR), ! (NOT)

Examples:
```
true && false  // false
true || false  // true
!true          // false
```

Notes:
- && and || use short-circuit evaluation.
- Commonly used in conditions and form validations.

---

## 5. Ternary Operator

A shorthand for if-else statements.

Syntax:
```
condition ? valueIfTrue : valueIfFalse;
```

Example:
```
let age = 18;
let result = (age >= 18) ? 'Adult' : 'Minor'; // 'Adult'
```

Notes:
- Best for concise conditional logic.
- Avoid nested ternaries for readability.

---

## 6. Type Checking Operators

Used to determine variable type or whether an object belongs to a specific constructor.

Operators:
typeof, instanceof

Examples:
```
typeof 12;          // 'number'
typeof 'Hi';        // 'string'
typeof true;        // 'boolean'
typeof {};          // 'object'
typeof undefined;   // 'undefined'
typeof null;        // 'object'
typeof function(){}; // 'function'

let arr = [];
arr instanceof Array;  // true
arr instanceof Object; // true
```

---

## 7. String Operator

Used for string concatenation using the + operator.

Example:
```
'Harsh' + ' ' + 'Sharma'; // 'Harsh Sharma'
```

Notes:
- Template literals (backticks) offer cleaner syntax:
  ```
  `${firstName} ${lastName}`
  ```

---

## 8. Spread and Rest Operators

Both use ... but serve different purposes.

### Spread (...)
Expands iterable elements (like arrays or objects).

Example:
```
let arr = ;
let arrCopy = [...arr];
let arrMerged = [...arr, 4, 5];
```

### Rest (...)
Collects multiple elements as one array parameter.

Example:
```
function sum(...numbers) {
  return numbers.reduce((a, b) => a + b, 0);
}
sum(1, 2, 3, 4, 5); // 15
```

Notes:
- Spread is used for copying or combining arrays/objects.
- Rest is used for function parameters.

---

## 9. Nullish Coalescing Operator

Provides fallback only when variable is null or undefined.

Syntax:
```
value ?? fallback
```

Examples:
```
let username = null;
let displayName = username ?? 'Guest'; // 'Guest'
```

Notes:
- Differs from || which also checks falsy values like 0, '', or false.

---

## 10. Optional Chaining Operator

Safely access nested object properties without throwing errors if they don’t exist.

Syntax:
```
object?.property?.subProperty
```

Example:
```
let user = { profile: { name: 'Harsh' } };
console.log(user.profile?.name);  // 'Harsh'
console.log(user.address?.city);  // undefined
```

---

## Variable & Hoisting in JavaScript

### What is Hoisting?

Hoisting means JavaScript moves variable and function declarations to the top of their scope before execution.

Example:
```
console.log(a); // undefined
var a = 10;
```

Internally JavaScript does:
```
var a;
console.log(a);
a = 10;
```

### var vs let vs const Hoisting Comparison

| Keyword | Hoisted | Initialized | Temporal Dead Zone |
|----------|----------|------------|--------------------|
| var      | Yes      | Yes (undefined) | No |
| let      | Yes      | No | Yes |
| const    | Yes      | No | Yes |

### Temporal Dead Zone (TDZ)
TDZ is the phase between hoisting and initialization where accessing a variable leads to a ReferenceError.

Example:
```
console.log(x); // undefined
var x = 5;

console.log(y); // ReferenceError
let y = 10;
```

Notes:
- All declarations are hoisted.
- var variables are initialized with undefined.
- let and const must be declared before use.

---

### Key Takeaways

- Arithmetic, assignment, comparison, and logical operators control JavaScript’s basic logic.
- Always use strict equality (===, !==) to avoid errors.
- Spread expands arrays; Rest collects parameters.
- Use ?? and ?. for safe and clean code handling.
- var is function-scoped, while let and const are block-scoped.
- let and const variables exist in TDZ until initialized.
```