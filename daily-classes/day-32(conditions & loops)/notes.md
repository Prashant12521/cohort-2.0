# **JavaScript — Conditions & Loops 🧠**

---

## **1. Conditions**

In programming, conditions help us **make decisions** — like choosing between multiple actions based on whether something is true or false.

**Example:**  
> If it’s raining, print “hello”; otherwise, print “bye-bye”.

### **Common Conditional Structures**
- `if`
- `else`
- `else if`
- `ternary operator`
- `switch case`

**Example:**
```js
let a = 12;

if (a > 10) {
  console.log('hello');
} else {
  console.log('bye-bye');
}

// Output: hello


⸻

2. If–Else Statement

Used when we have two possible outcomes — one for true and another for false.

Syntax:

if (condition) {
  // Executes if condition is true
} else {
  // Executes if condition is false
}


⸻

3. Truthy and Falsy Values

In JavaScript, every value is either truthy or falsy when converted to a Boolean.

Falsy Values:

false, 0, -0, "", null, undefined, NaN, document.all

Truthy Values:

Everything except the above is considered truthy.

⸻

4. Else–If Ladder

Used when there are multiple possible conditions.

if (12 > 13) {
  console.log('hello');
} else if (12 > 10) {
  console.log('hi');
} else {
  console.log('bye');
}

// Output: hi


⸻

5. Ternary Operator (?:)

A shortcut for writing simple if–else statements.

Syntax:

condition ? expressionIfTrue : expressionIfFalse;

Example:

12 > 13 ? console.log('yes') : console.log('no');
// Output: no


⸻

6. Switch–Case Statement

Used to compare one value against multiple possible cases.

switch (2) {
  case 1:
    console.log('hey');
    break;
  case 2:
    console.log('hey hey');
    break;
  case 3:
    console.log('hey hey hey');
    break;
  case 4:
    console.log('hey hey hey hey');
    break;
  default:
    console.log('default case');
}

// Output: hey hey

Note:

The break statement is used to stop or exit a switch or loop immediately.
Without break, execution continues into the next case (“fall-through”).

⸻

7. Loops (Repetition in Programming)

Loops are used to repeat a block of code multiple times.

Types of Loops
	•	Static (Straightforward) → Same value printed repeatedly.
	•	Dynamic → Values change during each iteration.

Examples:

Static: 1 1 1 1 1
Dynamic: 0 1 1 2 3 5 8 13 ...


⸻

8. For Loop

Used when we know how many times we want to repeat a task.

Syntax:

for (start; condition; change) {
  // code to repeat
}

Examples

Print a word 5 times

for (let i = 1; i < 6; i++) {
  console.log('harsh');
}

// Output:
// harsh
// harsh
// harsh
// harsh
// harsh

Print numbers from 50 to 99

for (let i = 50; i < 100; i++) {
  console.log(i);
}

Print numbers from 101 to 156

for (let i = 101; i <= 156; i++) {
  console.log(i);
}

Print numbers from 30 down to 10

for (let i = 30; i >= 10; i--) {
  console.log(i);
}

Print numbers from 121 down to 12

for (let i = 121; i >= 12; i--) {
  console.log(i);
}

Print numbers from 12 down to 1, but skip 5 and 7

for (let i = 12; i > 0; i--) {
  if (i === 5 || i === 7) {
    continue;
  }
  console.log(i);
}

Or equivalently:

for (let i = 12; i > 0; i--) {
  if (i !== 5 && i !== 7) {
    console.log(i);
  }
}


⸻

Key Takeaways ✅
	•	Conditions decide what code should run.
	•	Truthy/Falsy values control logical decisions.
	•	Ternary operators are shorthand for simple if–else.
	•	Switch–case is used for multiple comparisons of one variable.
	•	Break exits loops or switch blocks.
	•	For loops are ideal for fixed or countable repetitions.
	•	Always ensure loop conditions eventually become false — to prevent infinite loops.

⸻