

# 💻 JavaScript Complete Notes — YouTube Course (Beginner to Conditions + Logic)

---

## 🧩 Part 1 — JavaScript Basics to Conditions

### 🪄 Introduction
JavaScript is the **brain of the web**. It adds interactivity to websites — like buttons, animations, pop-ups, etc.  
It runs inside the browser and controls HTML & CSS dynamically.

---

### 📦 Variables
Variables store data temporarily in memory.

```js
let name = "Harsh";
const age = 22;
var city = "Bhopal";
```

🧠 **Types of Variables**
| Keyword | Can Change | Scope | Hoisting |
|----------|-------------|--------|-----------|
| `var` | ✅ | Function | ✅ |
| `let` | ✅ | Block | ❌ |
| `const` | ❌ | Block | ❌ |

💬 *Hinglish:* `let` and `const` modern JS me use karte hain — `var` se avoid karo.

---

### 🔢 Data Types

1. **String** — `"hello"`  
2. **Number** — `12`, `12.5`  
3. **Boolean** — `true`, `false`  
4. **Undefined** — value not assigned  
5. **Null** — intentionally empty  
6. **Object** — `{name: "Harsh"}`  
7. **Array** — `["JS", "HTML", "CSS"]`  

🧠 **Example:**
```js
let user = {
  name: "Harsh",
  age: 21,
  skills: ["HTML", "CSS", "JS"]
};
console.log(user.name);
```

---

### 💬 Comments
Used to describe code; ignored by JS.

```js
// Single-line comment
/* Multi-line comment */
```

---

### ⚙️ Operators
- **Arithmetic:** `+ - * / % **`
- **Comparison:** `== === != !== < > <= >=`
- **Logical:** `&& || !`
- **Assignment:** `= += -= *= /=`
- **Ternary:** `condition ? valueIfTrue : valueIfFalse`

🧠 **Example:**
```js
let age = 18;
let status = (age >= 18) ? "Adult" : "Minor";
console.log(status);
```

---

### 🔀 Conditions
Used for decision making.

```js
let rain = true;
if (rain) {
  console.log("Take umbrella");
} else {
  console.log("No umbrella needed");
}
```

**Else-if Chain Example:**
```js
let marks = 85;
if (marks >= 90) console.log("A+");
else if (marks >= 75) console.log("A");
else console.log("B or below");
```

**Switch Example:**
```js
let day = 3;
switch(day) {
  case 1: console.log("Monday"); break;
  case 2: console.log("Tuesday"); break;
  case 3: console.log("Wednesday"); break;
  default: console.log("Weekend");
}
```

---

## 🔁 Part 2 — Loops

### For Loop
```js
for (let i = 1; i <= 5; i++) {
  console.log("Count:", i);
}
```

### While Loop
```js
let i = 1;
while (i <= 5) {
  console.log(i);
  i++;
}
```

### Do While Loop
```js
let i = 1;
do {
  console.log(i);
  i++;
} while (i <= 5);
```

🧠 **Key Difference:** Do-while runs **at least once** even if the condition is false.

---

## ⚙️ Part 3 — Functions & DOM Basics

### Function Declaration
```js
function greet(name) {
  console.log("Hello", name);
}
greet("Harsh");
```

### Function Expression
```js
const add = function(a, b) {
  return a + b;
};
console.log(add(2,3));
```

### Arrow Function
```js
const multiply = (x, y) => x * y;
console.log(multiply(3,4));
```

### DOM (Document Object Model)
JS can access and change HTML elements.

```html
<p id="demo">Hello</p>
<script>
document.getElementById("demo").innerText = "Hi JS";
</script>
```

### Event Listener
```html
<button id="btn">Click Me</button>
<script>
document.getElementById("btn").addEventListener("click", () => {
  alert("Button clicked!");
});
</script>
```

---

## 🧠 Part 4 — Logic Practice & Mini Projects

### Print Even Numbers (1–20)
```js
for (let i = 1; i <= 20; i++) {
  if (i % 2 === 0) console.log(i);
}
```

### Factorial of a Number
```js
let num = 5;
let fact = 1;
for (let i = 1; i <= num; i++) fact *= i;
console.log(fact);
```

### Reverse a String
```js
let str = "hello";
let rev = "";
for (let i = str.length - 1; i >= 0; i--) rev += str[i];
console.log(rev);
```

---

### 🧮 Mini Projects

#### 🔹 Calculator
```html
<input id="num1">
<input id="num2">
<button id="addBtn">Add</button>
<p id="result"></p>

<script>
document.getElementById("addBtn").addEventListener("click", function() {
  let a = Number(num1.value);
  let b = Number(num2.value);
  result.innerText = a + b;
});
</script>
```

#### 💡 Bulb On/Off
```html
<img id="bulb" src="off.png" width="100">
<button id="btn">Turn On</button>

<script>
btn.addEventListener("click", function() {
  if (bulb.src.includes("off")) {
    bulb.src = "on.png";
    btn.innerText = "Turn Off";
  } else {
    bulb.src = "off.png";
    btn.innerText = "Turn On";
  }
});
</script>
```

#### ⏱ Counter App
```html
<h2 id="count">0</h2>
<button id="inc">+</button>
<button id="dec">-</button>

<script>
let count = 0;
inc.addEventListener("click", () => countDisplay(++count));
dec.addEventListener("click", () => countDisplay(--count));
function countDisplay(value) {
  document.getElementById("count").innerText = value;
}
</script>
```

---

## 🧩 Key Takeaways

1. JS controls logic, flow, and DOM interaction.
2. Practice conditional + loop logic daily.
3. Understand difference between `var`, `let`, and `const`.
4. Functions help you reuse code.
5. DOM connects JS with HTML for interactivity.
6. Mini projects solidify learning by combining all concepts.

---

📘 **End of JavaScript YouTube Notes (Part 1–4)**  
Next step → ES6 Features, Array Methods, and Real Projects.

