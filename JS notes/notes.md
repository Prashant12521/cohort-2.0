// ======================================================
// 🟩 JAVASCRIPT DEVELOPER NOTEBOOK: DAY 1 (Single Page, Full Notes + Practice + Hoisting+TDZ)
// ======================================================

// ======================================================
// 🔹 TOPIC 1: Introduction to JavaScript
// ======================================================
//
// JS = High-level, interpreted, dynamic scripting language.
// - Makes websites interactive
// - Converts human-readable code to machine code via Interpreter/Compiler
// - Runs in browsers and servers (Node.js)
// - Not the same as Java
//
// Concept: Human → JS → Interpreter → Machine
// Machine only understands binary (0s and 1s)

🧠 PRACTICE:
console.log("Hello JavaScript 👋");
console.log("I’m learning JS step by step!");
// 🧾 OUTPUT:
// Hello JavaScript 👋
// I’m learning JS step by step
// ======================================================

// ======================================================
// 🔹 TOPIC 2: Why We Need JS
// ======================================================
//
// HTML → Structure (skeleton of website)
// CSS → Styling (looks & design)
// JS → Functionality (interactions & logic)
//
// JS is used for:
// - Animations
// - Form validation
// - Click & hover effects
// - Dynamic content updates
// - API calls

🧠 PRACTICE:
console.log("HTML + CSS + JS = Complete Website");
// 🧾 OUTPUT:
// HTML + CSS + JS = Complete Website
// ======================================================

// ======================================================
// 🔹 TOPIC 3: History of JS
// ======================================================
//
// - Created by Brendan Eich (1995, Netscape)
// - Built in ~10 days → early versions had bugs
// - ECMAScript versions fixed issues
// - Major update: ES6 (2015)
//   Features: let, const, arrow functions, classes, template literals, promises
// - JS became modern and widely used after ES6

🧠 PRACTICE:
console.log("Created by Brendan Eich 🚀");
console.log("Major upgrade in 2015 → ES6");
// 🧾 OUTPUT:
// Created by Brendan Eich 🚀
// Major upgrade in 2015 → ES6
// ======================================================

// ======================================================
// 🔹 TOPIC 4: Where JS Runs
// ======================================================
console.log("Running JS in Browser Console");
// 🧾 OUTPUT:
// Running JS in Browser Console
// ======================================================

// ======================================================
// 🔹 TOPIC 5: Linking JS File
// ======================================================
console.log("JS linked successfully!");
// 🧾 OUTPUT:
// JS linked successfully!
// ======================================================

// ======================================================
// 🔹 TOPIC 6: var
// ======================================================
var x = 10;
var x = 20;   // ✅ Allowed
x = 30;       // ✅ Allowed
console.log("var example:", x);
// 🧾 OUTPUT:
// var example: 30
// ======================================================

// ======================================================
// 🔹 TOPIC 7: let
// ======================================================
let y = 10;
// let y = 20; // ❌ Redeclaration error
y = 25;       // ✅ Allowed
console.log("let example:", y);
// 🧾 OUTPUT:
// let example: 25
// ======================================================

// ======================================================
// 🔹 TOPIC 8: const
// ======================================================
const z = 50;
// z = 60; // ❌ Error
console.log("const example:", z);
// 🧾 OUTPUT:
// const example: 50
// ======================================================

// ======================================================
// 🔹 TOPIC 9: Scope
// ======================================================
{
  let a = 5;
  var b = 10;
}
// console.log(a); // ❌ Error
console.log(b);   // ✅ Works
// 🧾 OUTPUT:
// 10
// ======================================================

// ======================================================
// 🔹 TOPIC 10: Temporal Dead Zone (TDZ)
// ======================================================
//
// - TDZ = "temporal dead zone" 
// - Variables declared with let/const exist in memory but are **inaccessible** before initialization
// - Accessing them before initialization throws ReferenceError
// - var does not have TDZ, it is initialized as undefined

🧠 PRACTICE:
let num = 5;
console.log("TDZ cleared:", num);
// 🧾 OUTPUT:
// TDZ cleared: 5

// 🧠 PRACTICE EXAMPLE WITH ERROR:
console.log(a);
let a = 12; // ❌ ReferenceError: Cannot access 'a' before initialization
// Explanation:
// - JS engine knows 'a' exists (hoisted), but it is in TDZ
// - console.log(a) is executed **before initialization**, so it breaks
// - For var, behavior is different: hoisted and initialized as undefined
// ======================================================

// ======================================================
// 🔹 TOPIC 11: Hoisting
// ======================================================
//
// Hoisting = JS moves **declarations** to top of their scope before execution
// - var → hoisted + initialized as undefined
// - let/const → hoisted, but in TDZ (cannot access yet)
// - Initialization stays in original line
//
// Examples:
// var hoistVar;
// let hoistLet; (in TDZ until initialized)

🧠 PRACTICE:
console.log(age); // undefined (var hoisting)
var age = 18;
// 🧾 OUTPUT:
// undefined
// ======================================================

// ======================================================
// 🔹 TOPIC 12: Console Methods
// ======================================================
console.log("Normal log ✅");
console.warn("Warning ⚠️");
console.error("Error ❌");
console.table({ name: "Harsh", age: 22 });
// 🧾 OUTPUT:
// Normal log ✅
// ⚠️ Warning
// ❌ Error
// ┌─────────┬────────┐
// │ (index) │ Values │
// ├─────────┼────────┤
// │  name   │ 'Harsh'│
// │  age    │   22   │
// └─────────┴────────┘
// ======================================================

// ======================================================
// 🔹 TOPIC 13: Alert & Prompt (Browser Only)
// ======================================================
//
// alert("msg") → popup message
// prompt("question") → input box
// confirm("question") → yes/no popup

🧠 PRACTICE (Browser only):
// let user = prompt("Enter your name:");
// alert(`Welcome ${user}! 👋`);
// console.log("User entered:", user);
// 🧾 OUTPUT (example name = Harsh):
// Alert → "Welcome Harsh! 👋"
// Console → "User entered: Harsh"
// ======================================================

// ======================================================
// 🔹 TOPIC 14: Strings
// ======================================================
let text = "Harsh Bhai Kaise Ho";
console.log(text.slice(6, 10));
console.log(text.split(" "));
console.log(text.toUpperCase());
console.log(text.toLowerCase());
console.log(text.includes("Bhai"));
console.log(text.replace("Harsh", "Prashant"));
// 🧾 OUTPUT:
// Bhai
// [ 'Harsh', 'Bhai', 'Kaise', 'Ho' ]
// HARSH BHAI KAISE HO
// harsh bhai kaise ho
// true
// Prashant Bhai Kaise Ho
// ======================================================

// ======================================================
// 🔹 TOPIC 15: Template Literals
// ======================================================
let name = "Harsh";
let course = "JavaScript";
console.log(`Hello ${name}, welcome to ${course} class!`);
console.log(`This is line 1
and this is line 2`);
// 🧾 OUTPUT:
// Hello Harsh, welcome to JavaScript class!
// This is line 1
// and this is line 2
// ======================================================

// ======================================================
// 🔹 TOPIC 16: typeof Operator
// ======================================================
console.log(typeof 10);
console.log(typeof "Harsh");
console.log(typeof true);
console.log(typeof null);
console.log(typeof undefined);
console.log(typeof 123n);
// 🧾 OUTPUT:
// number
// string
// boolean
// object
// undefined
// bigint
// ======================================================

// ======================================================
// 🔹 TOPIC 17: Practice Challenge 💪
// ======================================================
//
// 1. Take name via prompt
// 2. Alert → "Hello <name>!"
// 3. Console → "Welcome to JS Practice"

🧠 PRACTICE (Browser only):
// let username = prompt("Enter your name:");
// alert(`Hello ${username}! 👋`);
// console.log("Welcome to JS Practice");
// 🧾 OUTPUT (example = Prashant):
// Alert → "Hello Prashant! 👋"
// Console → "Welcome to JS Practice"
// ======================================================

// ✅ END OF DAY 1 (Single Page, Full Notes + Practice + Hoisting+TDZ)

// ======================================================
// 🟩 JAVASCRIPT DEVELOPER NOTEBOOK: DAY 2
// ======================================================
// 🧭 TOPIC: Variables, Declarations & Data Types
// ======================================================
//
// In this chapter, we’ll cover:
// 1️⃣ var, let, const
// 2️⃣ Block scope vs Functional scope
// 3️⃣ Reference vs Primitive data types
// 4️⃣ Type system, coercion, truthy/falsy values
// 5️⃣ Useful string & console methods
// ======================================================

// ======================================================
// 🔹 TOPIC 1: var, let, and const
// ======================================================
//
// var → function-scoped, can be redeclared & reassigned
// let → block-scoped, cannot be redeclared but can be reassigned
// const → block-scoped, cannot be redeclared or reassigned
//
// Errors help you write cleaner code. As your teacher said:
// ❝Dusman error nahi hai, dusman hai wo code jo galat ho
// par error na de.❞

🧠 PRACTICE:
if (true) {
  var a = 1;
  let b = 2;
  console.log(a); // ✅ Works → 1
  console.log(b); // ✅ Works → 2
}
console.log(a); // ✅ 1
// console.log(b); // ❌ ReferenceError

// 🧾 OUTPUT:
// 1
// 2
// 1
// ❌ ReferenceError (b is not defined)

// 🧠 EXPLANATION:
// var is functional scope — if no function, it leaks outside the block.
// let is block-scoped — respects {} braces.


// ======================================================
// 🔹 TOPIC 2: const and Object Mutability
// ======================================================
//
// const = constant reference, not constant value
// You can modify the content of an object or array declared with const,
// but cannot reassign the entire variable.

const person = { name: "Harsh" };
person.name = "Sharma"; // ✅ allowed
// person = {}; // ❌ Error → cannot reassign const

// 🧾 OUTPUT:
// person = { name: "Sharma" }

//
// 🧠 WHY?
// const locks the variable binding, not the content of the object.
// So you can modify object properties but not reassign it.
//
// To freeze object changes completely:
Object.freeze(person);
person.name = "Changed"; // ❌ will be ignored

// 🧾 OUTPUT:
// { name: "Sharma" } (unchanged)


// ======================================================
// 🔹 TOPIC 3: Reference vs Primitive Types
// ======================================================
//
// Primitive types are copied by value.
// Reference types are copied by reference (memory address).

// 🔸 Primitive Example:
let x = 12;
let y = x;
x = x + 3;
console.log(x, y);
// 🧾 OUTPUT: 15 12

// 🔸 Reference Example:
let arr1 = [1, 2, 3];
let arr2 = arr1;
arr2.pop();
console.log(arr1, arr2);
// 🧾 OUTPUT: [1, 2] [1, 2]
//
// Both changed because both reference the same memory address.

// 🔸 Object Reference:
let obj1 = { name: "Harsh" };
let obj2 = obj1;
obj2.name = "Harshita";
console.log(obj1.name, obj2.name);
// 🧾 OUTPUT: Harshita Harshita
// ======================================================


// ======================================================
// 🔹 TOPIC 4: Data Types in JS
// ======================================================
//
// JS has 2 categories of data types:
// 1️⃣ Primitive → string, number, boolean, null, undefined, symbol, bigint
// 2️⃣ Reference → array, object, function

// ✅ Primitive
let a = 12;          // number
let b = "Harsh";     // string
let c = true;        // boolean
let d = null;        // null
let e;               // undefined
let f = 123n;        // bigint
let g = Symbol("uid"); // symbol

// ✅ Reference
let arr = [1, 2, 3]; // array
let obj = { name: "Harsh" }; // object
function greet() { return "Hello"; } // function

console.log(typeof a, typeof b, typeof c, typeof d, typeof e, typeof f, typeof g);
console.log(typeof arr, typeof obj, typeof greet);

// 🧾 OUTPUT:
// number string boolean object undefined bigint symbol
// object object function
// ======================================================


// ======================================================
// 🔹 TOPIC 5: Dynamic Typing
// ======================================================
//
// JS is dynamically typed — you can change variable types at runtime.

let dyn = 12;
dyn = true;
dyn = "Harsh";
dyn = [];
dyn = null;
dyn = undefined;

console.log(typeof dyn);
// 🧾 OUTPUT: undefined
//
// JS doesn’t bind variable to a type permanently.


// ======================================================
// 🔹 TOPIC 6: typeof Quirks
// ======================================================
console.log(typeof null); // ❗ object (bug in JS)
console.log(typeof NaN);  // number
console.log(NaN === NaN); // false
console.log(0.1 + 0.2);   // 0.30000000000000004 (floating precision)
console.log(1 + "1");     // '11'
console.log(1 == "1");    // true  (type coercion)
console.log(1 === "1");   // false (strict check)

// 🧾 OUTPUT explained:
// typeof null → old JS bug, returns "object"
// typeof NaN → number, even though it's “Not a Number”
// NaN === NaN → false, because NaN never equals itself
// ======================================================


// ======================================================
// 🔹 TOPIC 7: Type Coercion (== vs ===)
// ======================================================
//
// ==  → compares values after type conversion
// === → compares value + type (no conversion)

console.log("5" + 1); // '51'  → + acts as concatenation
console.log("5" - 1); // 4     → - converts string to number

// 🧾 OUTPUT:
// '51'
// 4
// ======================================================


// ======================================================
// 🔹 TOPIC 8: Truthy vs Falsy Values
// ======================================================
//
// falsy values → false, 0, "", null, undefined, NaN, document.all
// everything else → truthy

console.log(Boolean(0));         // false
console.log(Boolean(" "));       // true
console.log(Boolean(undefined)); // false
console.log(Boolean([]));        // true

// 🧠 PRACTICE:
console.log(true + false); // 1
console.log(null + 1);     // 1
console.log(5 + "5");      // '55'
console.log(!!undefined);  // false

// 🧾 OUTPUT:
// 1
// 1
// '55'
// false
//
// EXPLANATION: !! converts value to boolean (double NOT operator).
// ======================================================


// ======================================================
// 🔹 TOPIC 9: Strings and Methods
// ======================================================
//
// - Strings can be '', "", or ``
// - Template literals (``) allow expressions inside ${}
// - Common methods: slice, split, replace, replaceAll, includes

console.log("harsh bhai kaise ho".slice(6, 10)); // 'bhai'
console.log("harsh sharma".split(" "));          // ['harsh', 'sharma']
console.log("hello kaise ho".split("h"));        // ['', 'ello kaise ', 'o']
console.log("harsh bhai".replace("h", "g"));     // 'garsh bhai'
console.log("huihuihui".includes("h"));          // true
console.log("huihuihui".includes("u"));          // true
console.log("huihuihui".includes("k"));          // false

// 🧾 OUTPUT:
// bhai
// ['harsh', 'sharma']
// ['', 'ello kaise ', 'o']
// garsh bhai
// true
// true
// false
// ======================================================


// ======================================================
// 🔹 TOPIC 10: Template Literals
// ======================================================
console.log(`Harsh ${2 + 2}`);        // Harsh 4
console.log(`I am ${12 / 4}`);        // I am 3
console.log(`Hey ${"Prashant"}`);     // Hey Prashant
// ======================================================


// ======================================================
// 🔹 TOPIC 11: Console Methods
// ======================================================
//
// console.log()   → normal message
// console.info()  → info message (ℹ️ icon in some browsers)
// console.warn()  → warning (⚠️)
// console.error() → error (❌)
// console.table() → table view of objects/arrays

console.log("hello");
console.info("hi");
console.warn("this is a warning");
console.error("this is an error");
console.table({ name: "Harsh", age: 22 });

// 🧾 OUTPUT:
// hello
// hi (ℹ️ info)
// ⚠️ warning
// ❌ error
// ┌─────────┬───────┐
// │ (index) │ Value │
// ├─────────┼───────┤
// │  name   │ Harsh │
// │  age    │ 22    │
// └─────────┴───────┘
// ======================================================


// ======================================================
// 🔹 TOPIC 12: prompt() and alert() (Browser only)
// ======================================================
/*
prompt("name?");
let nm = prompt("name?");
console.log(nm);
alert("hello " + nm);
*/
// 🧾 OUTPUT (if user types "Harsh"):
// Console → "Harsh"
// Alert → "hello Harsh"
// ======================================================


// ======================================================
// 🔹 TOPIC 13: Statements vs Expressions
// ======================================================
//
// A statement performs an action (e.g., variable declaration)
// An expression produces a value.

let num = 12; // statement
num + 5;      // expression → gives 17 but doesn’t store

🧠 PRACTICE:
let x1 = 5;
let result = x1 * 2; // expression
console.log(result); // 🧾 OUTPUT: 10
// ======================================================

// ======================================================
// 🧾 BONUS: var vs let vs const — QUICK REVISION TABLE
// ======================================================
//
// ┌───────────────┬───────────────┬───────────────┬───────────────┐
// │ Feature        │     var       │      let      │     const     │
// ├───────────────┼───────────────┼───────────────┼───────────────┤
// │ Scope          │ Function      │ Block         │ Block         │
// │                │ scoped        │ scoped        │ scoped        │
// ├───────────────┼───────────────┼───────────────┼───────────────┤
// │ Hoisting       │ ✅ Hoisted &   │ ✅ Hoisted but │ ✅ Hoisted but │
// │                │ initialized   │ not initialized│ not initialized│
// │                │ with undefined│ (TDZ applies)  │ (TDZ applies)  │
// ├───────────────┼───────────────┼───────────────┼───────────────┤
// │ Redeclaration  │ ✅ Allowed     │ ❌ Not allowed │ ❌ Not allowed │
// ├───────────────┼───────────────┼───────────────┼───────────────┤
// │ Reassignment   │ ✅ Allowed     │ ✅ Allowed     │ ❌ Not allowed │
// ├───────────────┼───────────────┼───────────────┼───────────────┤
// │ Temporal       │ ❌ No TDZ      │ ✅ TDZ present │ ✅ TDZ present │
// │ Dead Zone (TDZ)│               │ (error before  │ (error before  │
// │                │               │ initialization)│ initialization)│
// ├───────────────┼───────────────┼───────────────┼───────────────┤
// │ Example Hoist  │ console.log(a)│ console.log(b)│ console.log(c)│
// │                │ var a = 10;   │ let b = 10;   │ const c = 10; │
// │ Result         │ undefined     │ ❌ ReferenceErr│ ❌ ReferenceErr│
// └───────────────┴───────────────┴───────────────┴───────────────┘
//
// 💡 TIP:
// TDZ (Temporal Dead Zone) = time between variable declaration and initialization.
// During TDZ, you cannot access the variable — doing so throws an error.
//
// Example:
console.log(a); // ❌ ReferenceError
let a = 12;

// 🧾 Behind the scenes:
// JS engine breaks code as:
// let a;        // declared but not initialized (in TDZ)
// console.log(a); // ❌ Cannot access 'a' before initialization
// a = 12;       // initialization done here
// ======================================================

// ======================================================
// 🔹 TOPIC 4: Data Types, Type System [Common Confusions]
// ======================================================

// 🧠 PRACTICE: Predict the Results
// ------------------------------------------------------
true + false        // ✅ 1 + 0 → 1
null + 1            // ✅ 0 + 1 → 1
5 + '5'             // ✅ '5' + '5' → '55' (string concatenation)
!!undefined         // ✅ false (double negation makes falsy → false)

// Explanation:
// ------------------------------------------------------
// ➤ true → 1
// ➤ false → 0
// ➤ null → 0
// ➤ undefined → NaN (when used in arithmetic)
// ➤ !!value converts anything to boolean:
//     !!undefined → false
//     !!"hello"   → true


// ======================================================
// 💡 WHY "NaN" IS A NUMBER
// ======================================================
//
// typeof NaN === "number" // ✅ true
//
// Reason:
// Whenever a numeric operation fails in JS (like multiplying a number with a string),
// the result is "NaN" — which stands for "Not-a-Number".
// But ironically, JS classifies it under the "number" type.
//
// Example:
2 * "harsh"         // ❌ invalid → NaN
typeof NaN          // ✅ "number"

// Meaning:
// NaN is not a value itself — it’s an **error indicator** that says:
// “This was supposed to be a number, but the operation failed.”


// ======================================================
// 💭 undefined vs null
// ======================================================
//
// let x;            // ❌ no value assigned
// console.log(x);   // ✅ undefined (given automatically by JS)
//
// let y = null;     // ✅ null (manually assigned by developer)
// console.log(y);   // ✅ null
//
// 🧩 Explanation:
// ------------------------------------------------------
// ➤ undefined → given by JS by default when a variable has no value.
// ➤ null → assigned manually to show “intentional emptiness.”
//
// 🔍 Example Analogy:
// Before inserting your ATM card → user = null
// After inserting your card → user = "Prashant"
//
// 🧠 Summary:
// undefined → JS gives automatically
// null → we assign manually


// ======================================================
// 🔢 TYPE COERCION & OPERATOR BEHAVIOUR
// ======================================================
//
// ➤ "+" operator in JS can do two things:
//    → Addition (when both sides are numbers)
//    → Concatenation (when one side is a string)
//
// Example:
'5' + 1             // ✅ '51'  → converts number → string and concatenates
5 + 1               // ✅ 6     → normal addition

// Explanation:
// "+" has dual behavior. 
// When JS sees a string, it prioritizes string concatenation.


// ➤ "-" operator only does subtraction.
// It never concatenates, so it tries to convert strings → numbers.
//
'5' - 1             // ✅ 4
'10' - '2'          // ✅ 8

// 🧩 Why?
// "-" forces numeric conversion internally.
//
// ➤ Dependence on Operator Type:
//   - "+" → tries to convert to string
//   - "-" → tries to convert to number


// ======================================================
// 🧾 SUMMARY CHEAT SHEET
// ======================================================
//
// | Concept             | Explanation / Behavior                                      |
// |----------------------|-------------------------------------------------------------|
// | NaN                 | Result of invalid numeric operation                         |
// | typeof NaN          | "number"                                                    |
// | undefined           | Given by JS automatically                                   |
// | null                | Manually assigned “empty” value                             |
// | '+' operator        | Adds or concatenates depending on data type                 |
// | '-' operator        | Always performs subtraction (forces number conversion)      |
// | !!undefined         | false                                                      |
// | !!'string'          | true                                                       |
// | true + false        | 1                                                          |
// | null + 1            | 1                                                          |
// | 5 + '5'             | '55'                                                       |
// | '5' - 1             | 4                                                          |


// ======================================================
// ✅ END OF TOPIC 4 — Type System & Confusions Cleared!
// ======================================================

// ======================================================
// 🔹 TOPIC 3: OPERATORS in JavaScript
// ======================================================

// Operators help JS perform logic, comparison, and calculations.

// 🧩 TYPES OF OPERATORS
// ------------------------------------------------------
// ➤ Arithmetic
// ➤ Comparison
// ➤ Logical
// ➤ Assignment
// ➤ Unary
// ➤ Ternary


// ======================================================
// 🔸 ARITHMETIC OPERATORS (+, -, *, /, %, **)
// ======================================================

1 + 2           // 3
'ha' + 'rsh'    // 'harsh'  → concatenation
12 - 2          // 10
12 / 6          // 2
12 * 2          // 24
12 % 5          // 2   → remainder
2 ** 3          // 8   → 2³ = 8


// ======================================================
// 🔸 COMPARISON OPERATORS (==, ===, !=, !==, <, >, <=, >=)
// ======================================================

// "=" → Assignment (used to give value)
let a = 12; // assignment operator

12 == 13       // false
12 == '12'     // true  → checks only value (not type)
12 === '12'    // false → checks value + type (strict)
12 != 13       // true
12 != '12'     // false → checks only value
12 !== '12'    // true  → checks value + type

12 > 15        // false
12 < 15        // true
22 < 22        // false
22 <= 22       // true

// Summary:
// == and != → loose comparison (only value)
// === and !== → strict comparison (value + type)


// ======================================================
// 🔸 ASSIGNMENT OPERATORS (=, +=, -=, *=, /=, %=)
// ======================================================
let x = 12;
x += 3;   // x = 15
x -= 11;  // x = 4
x *= 2;   // x = 8
x /= 2;   // x = 4
x %= 3;   // x = 1


// ======================================================
// 🔸 LOGICAL OPERATORS (&&, ||, !)
// ======================================================
//
// && → AND → both sides must be true
// || → OR  → at least one side true
// !  → NOT → reverses truthiness

true && true      // true
false && true     // false
12 > 13 && 13 > 10 // false

12 > 13 || 13 > 10 // true
false || true      // true

!false             // true
!12                // false (12 → truthy → negated → false)
!!12               // true  (double negation → truthy)


// ======================================================
// 🔸 UNARY OPERATORS (+, -, !, typeof, ++, --)
// ======================================================

+'15'          // 15
+'harsh'       // NaN
-5             // -5
!12            // false

typeof 12           // 'number'
typeof '12'         // 'string'
typeof []           // 'object'
typeof function(){} // 'function'

let a1 = 12;
++a1;               // 13  (pre-increment)
a1++;               // 13 (shows 13, then becomes 14)

let b1 = 15;
b1++;               // 15 (now 16)
++b1;               // 17

let c1 = 2;
c1++ + c1;          // 2 + 3 = 5

let d1 = 3;
--d1;               // 2
d1--;               // 2 (now becomes 1)


// ======================================================
// 🔸 TERNARY OPERATOR ( ? : )
// ======================================================
// Syntax: condition ? trueExpression : falseExpression

12 > 13 ? console.log(true) : console.log(false);
// Output: false


// ======================================================
// 🔸 typeof vs instanceof
// ======================================================

typeof 12               // 'number'
typeof null             // 'object'
typeof []               // 'object'
typeof {}               // 'object'
typeof function(){}     // 'function'
typeof NaN              // 'number'

// ❌ typeof [] and typeof null → 'object' (incorrect categorization)

let arr = [];
arr instanceof Array    // true
let obj = {};
obj instanceof Object   // true
obj instanceof Array    // false

// instanceof → used for reference types ([], {}, functions)
// typeof → used for primitive types (number, string, boolean, etc.)


// ======================================================
// 🔹 COMMON OPERATOR QUESTIONS
// ======================================================

let x1 = 10, y1 = 20;
if (x1 > 5 && y1 < 25) console.log("A");
else console.log("B");
// ✅ A

let isAdmin = true;
let isLoggedIn = false;
if (isAdmin || isLoggedIn) console.log("Access granted");
else console.log("Access denied");
// ✅ Access granted

let temp = 35;
if (!(temp < 30)) console.log("Hot");
else console.log("Pleasant");
// ✅ Hot

let a2 = 0;
if (a2) console.log("Truthy");
else console.log("Falsy");
// ✅ Falsy

let score = 78;
let grade = score >= 90 ? "A" : score >= 75 ? "B" : score >= 60 ? "C" : "Fail";
console.log(grade); // ✅ B

let points = 120;
let status = points > 100 ? "Gold" : points > 50 ? "Silver" : "Bronze";
console.log(status); // ✅ Gold

let loggedIn = true, hasToken = false;
let access = loggedIn && hasToken ? "Allow" : "Deny";
console.log(access); // ✅ Deny


// ======================================================
// 🔹 Truthiness with !!
// ======================================================
!!""      // false
!!"hello" // true
!!0       // false
!!1       // true


// ======================================================
// 🔹 Pre vs Post Increment
// ======================================================
let i = 1;
console.log(++i); // 2
console.log(i++); // 2 (but now i = 3)


// ======================================================
// ✅ END OF TOPIC 3
// ======================================================




// ======================================================
// 🔹 TOPIC 4: CONTROL FLOW
// ======================================================
//
// Controls how code executes — based on conditions or decisions.


// ------------------------------------------------------
// 🔸 if, else if, else
// ------------------------------------------------------

if (12 > 10) console.log("true");     // true
if (115 > 120) console.log("false");  // not executed
if (15) console.log("truthy");        // truthy
if (0) console.log("falsy");          // falsy
if ("harsh") console.log("truthy");   // truthy

if (loggedin && admin) {
  // both must be true
} else if (loggedin) {
  // only logged in
} else {
  // none true
}


// ------------------------------------------------------
// 🔸 switch-case
// ------------------------------------------------------

switch (3) {
  case 1:
    console.log("One");
    break;
  case 2:
    console.log("Two");
    break;
  case 3:
    console.log("Matched");
    break;
  default:
    console.log("Default");
}
// ✅ Output: "Matched"

// Missing break example:
switch (1) {
  case 1:
    console.log("Hey");
  case 2:
    console.log("Case 2");
  case 3:
    console.log("Case 3");
    break;
  default:
    console.log("Default");
}
// ✅ Output: Hey, Case 2, Case 3
// (because no break in case 1)


// ------------------------------------------------------
// 🔸 Early Return Pattern
// ------------------------------------------------------

function getVal(val) {
  if (val < 25) return "D";
  else if (val < 50) return "C";
  else if (val < 75) return "B";
  else return "A";
}
getVal(48); // "C"
getVal(21); // "D"
getVal(76); // "A"


// ------------------------------------------------------
// 🔸 Q: Write function getGrade(score)
// ------------------------------------------------------
function getGrade(score) {
  if (score >= 90 && score <= 100) return "A+";
  if (score >= 80 && score <= 89) return "A";
  if (score >= 70 && score <= 79) return "B";
  if (score >= 60 && score <= 69) return "C";
  if (score >= 33 && score <= 59) return "D";
  if (score >= 0 && score <= 32) return "Fail";
  return "Invalid marks X";
}
console.log(getGrade(54)); // D


// ------------------------------------------------------
// 🔸 Rock–Paper–Scissors Logic
// ------------------------------------------------------

function rps(user, computer) {
  if (user === computer) return "Draw";
  if (user === "rock" && computer === "scissor") return "User";
  if (user === "scissor" && computer === "paper") return "User";
  if (user === "paper" && computer === "rock") return "User";
  return "Computer";
}
rps("rock", "rock"); // "Draw"


// ------------------------------------------------------
// 🔸 Common Question: Fallthrough in switch
// ------------------------------------------------------
let x2 = 2;
switch (x2) {
  case 2:
    console.log("Two");
  case 3:
    console.log("Three");
}
// Output: Two, Three (because missing break)


// ✅ Always use "break" after each case.


// ======================================================
// ✅ END OF TOPIC 4
// ======================================================




// ======================================================
// 🔹 TOPIC 5: LOOPS
// ======================================================
//
// Loops = repetition — running code multiple times.


// ------------------------------------------------------
// 🔸 FOR LOOP
// ------------------------------------------------------
// Syntax: for (start; condition; change) {}

for (let i = 1; i <= 100; i++) {
  console.log(i);
}

// Example: 1 → 40
for (let i = 1; i <= 40; i++) {
  console.log(i);
}


// ------------------------------------------------------
// 🔸 WHILE LOOP
// ------------------------------------------------------
let i2 = 1;
while (i2 < 32) {
  console.log(i2);
  i2++;
}

// Pattern:
// start
// while (condition) {
//   code
//   change
// }


// ------------------------------------------------------
// 🔸 DO-WHILE LOOP
// ------------------------------------------------------
let j = 1;
do {
  console.log(j);
  j++;
} while (j <= 5);


// ------------------------------------------------------
// 🔸 LOOP CONTROL — break & continue
// ------------------------------------------------------
// break → stops the loop completely
// continue → skips current iteration and goes to next


// ------------------------------------------------------
// 🔸 FOR-OF and FOR-EACH (for arrays)
// ------------------------------------------------------
let arr2 = [1, 2, 3];
for (let num of arr2) console.log(num); // 1, 2, 3

arr2.forEach((num) => console.log(num)); // same output


// ------------------------------------------------------
// 🔸 FOR-IN and Object.entries() (for objects)
// ------------------------------------------------------
let obj2 = { name: "Harsh", age: 20 };
for (let key in obj2) console.log(key, obj2[key]);

Object.entries(obj2).forEach(([key, value]) => {
  console.log(key, value);
});


// ======================================================
// ✅ END OF TOPIC 5 — Operators, Control Flow & Loops
// ======================================================