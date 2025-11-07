# Day-37

## Function

### Understanding Function in JS and why its widely used

A **function** is a block of code designed to **perform a specific task**. It only runs **when you call **it.

```
function functionName() {
  // code to be executed
}
```

### **🎯 Why Use Functions?**

- To **reuse code** (write once, use many times)
- To **organize** your program into smaller, logical parts
- To **avoid repetition**
- To make code **cleaner and easier to debug**

### -[‘parameters’, ‘arguments’, ‘rest parameters’, ‘hoisting’, ‘variable hoisting’, ‘Function Hoisting’]

**__Parameters & Arguments__**

```
function greetUser(name) {
  console.log("Hello, " + name + "!");
}

// parameter: name
```

```
greetUser("Harsh"); // Output: Hello, Harsh!

//argument: Harsh
```

**__Rest Parameter__**

```
function abcd(a,b,...c){

}

abcd(1,2,3,4,5);
```

**__Hoisting, Veriable hoisting, Function hoisting__**

**Hoisting** means — JavaScript **moves all declarations (not assignments)** to the **top** of the current scope (before code execution).

```
console.log(a);
var a = 10;
-----------------
var a;
console.log(a); // undefined
a = 10;
-----------------
console.log(a);
let a = 10;  
// ❌ Error: Cannot access 'a' before initialization
```

```
abcd();
function abcd() {
  console.log(‘hey’);
}
//hey
```

### -Parameters in JS - [required, destructured, rest, default]

**__Required Parameters__**

```
function abcd(a,b,c,d){
  // agar parameter banaya aur unme arguments nahi diya to uski value undefined ho jayega
}
abcd();

//🧠 If you don’t pass a required parameter, it becomes undefined.
```

**__Detructured Parameters__**

Object

```
function showUser({ name, age }) {
  console.log(`${name} is ${age} years old.`);
}

showUser({ name: "Prashant", age: 22 });
// ✅ Prashant is 22 years old.
```

Array

```
function printCoords([x, y]) {
  console.log(`X: ${x}, Y: ${y}`);
}

printCoords([10, 20]);
// ✅ X: 10, Y: 20
```

**__Rest Parameter__**

```
function example(...rest) {
  console.log(rest);
}
example(1, 2, 3, 4, 5);

//
1
2
3
4
5
```

**__Default Parameter__**

```
function abcd(a=0, b=0, c=0){
  console.log(a,b,c);
}
abcd(1,2);
// 1 2 0
```

### -Arguments in JS - [positional, default, spread]

**__Position Agrument__**

The **position/order matters** — the first value goes to the first parameter, the second to the second, and so on.

```
function intro(name, age, city) {
  console.log(`${name} is ${age} years old and lives in ${city}.`);
}

intro("Prashant", 22, "Indore");
// ✅ Prashant → name
// ✅ 22 → age
// ✅ Indore → city
```

```
intro("Indore", "Prashant", 22);
```

You’ll get nonsense output — because JavaScript matches them **by order**, not name.

🧠 That’s why they are called **positional arguments**.

**__Default Argument__**

```
function greet(name = "Guest", city = "Unknown") {
  console.log(`Hello ${name} from ${city}!`);
}

greet("Harsh", "Bhopal"); // ✅ Hello Harsh from Bhopal!
greet();                  // ✅ Hello Guest from Unknown!
```

**__Spread Argument__**

```
function abcd(a,b,c,d){
  console.log(a,b,c,d);
}
let arr = [1,2,3,4];
abcd(…arr);
// 1 2 3 4
```

### -Classic Function, Nested Function, Scope Chain

```
function abcd(){

}
```

```
function abcd(){
  function defg(){
    console.log('defg’);
  }
  defg();
}

abcd();
//defg
```

```
let a = 12;
function abcd(){
  let b = 13;
  function defg(){
    console.log(b);
  }
}
abcd();
```

**-Understand Immediately Invoked Function Expression (IIFE)**

```
(function(){

})();
```

### -More Function - [Arrow Function, Fat Arrow, Anonymous, Higher Order, Callback, First Class, Pure Function, Impure Function]

**__Arrow Function__**

```
let fnc = ()=>{
  console.log('hello’);
}
fnc();
// hello
```

**__Fat Arrow__**

```
()=>{

}
```

**__Anonymous__**

Benami

```
function(){

}
```

**__Higher Order__**
- function jo return kare ek aur function
- function which accept function in its parameter

```
function abc(){
  return function(){
  }
}


function abc(a){

}
abc(function(){

});
```

**__Callback__**

A **callback function** is a **function passed as an argument** to another function.

The receiving function can **call it later (or immediately)** — hence the name *callback*.

```

function abc(a){

}
abc(function(){

});
```

**__First Class__**

FCF ek concept h jisme function us language me variable ki tarah use ho sakte h

```
let fnc = function(){

}
------
function abcd(a,b){
}
abcd(function(){
},2);
```