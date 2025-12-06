# DSA

# __1. DSA Intro__

---

# __2. JS Essentials__

## Variable

- container
- use to store data

### Types of variable in js - const, let and var

**Const - **can’t redeclare and reinitalize

**let - **can reinitalize but can’t redeclare

**var - **can redeclare and reinitalize

## Operation

### string + string = string (contenation)

```
let s1 = 'hello';
let s2 = 'world';
console.log(s1 + s2);
//‘helloworld'
console.log(typeof(s1+s2));
//string
```

### string + int = string (contenation)

```
let s1 = 'hello';
let temp = 10;
console.log(typeof(s1+temp));
//string
```

### int + int = int (arithmatic)

```
let temp1 = 20;
let temp2 = 10;
console.log(typeof(temp1+temp2));
//number
```

### Operand and Operator

An **operand** is simply **the data/value** that an operator works on.

e.g.- 1, 8, ’string’ etc

An **operator** is a symbol that *does something*.

e.g.- +,-,* etc

```
let a = 10;
let b = 20;
console.log(‘the sum of ‘ + a +’ and ‘ + b +’ is ‘ + a + b);
//the sum of 10 and 20 is 1020

console.log(‘the sum of ‘ + a +’ and ‘ + b +’ is ‘ + (a + b));
//the sum of 10 and 20 is 30

console.log(a + b + ‘is the sum of’ + a + ‘ and ‘ + b);
//30 is the sum of 10 and 20
```

```
let prompt = require('prompt-sync’)()
let age = Number(prompt('Enter your age ‘))

console.log(typeof(age);
console.log(`Age ${age}`);
```

## swap two variable with 3 methods

```
let a = 10;
let b = 20;
console.log(a); //10
console.lgo(b); //20

let temp = a;
a = b;
b = temp;

console.log(a); //20
console.lgo(b); //10
```

```
let a = 10;
let b = 20;

a = a + b; //30
b = a - b; //10
a = a - b; //20
```

```
let a = 10;
let b = 20;

[a,b] = [b,a]

console.log(a, b);
// 20 10
```

---