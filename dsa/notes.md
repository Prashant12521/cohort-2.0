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

# __3. Operator__

## Operators

- Arithmetic → +,-,*,%,/
- Relation operator → >,<,>=,<=,≠
- Logical operator → &&, ||
- Unary operator → ++, —

### __Arithmetic__ [+, -, *, /, %]

```
console.log(231%10); // 1
console.log(231%100); // 31
console.log(231%1000); // 231
```

```
console.log(Math.floor(232/10)); // 23
```

**In DSA,**
- **Integer / Integer **should be** Integer**
- **Integer % Integer **should be **Integer**

### __Relation operator __[>, <, >=, <=, ==, !=]

```
console.log(10>9); // true
console.log(10<9); // false
console.log(13<=22); // true
console.log('9' == 9); // true
console.log('9’ === 9); // false
console.log(9 != 9); // false
```

### __Logical Operator__ [&&, ||]

```
console.log(12>3 && 9<12); // true
console.log(12>3 && 9>12); // false
console.log(true && true); // true
console.log(true && false); // false
console.log(12>3 && 9<12 && 19<10); // false
```

```
console.log(12>32 || 9<12 || 19>10); // true
console.log(!(12>7 || 8>10 || 34<30)); //false
```

### __Unary Operator__ [++, —]

- Increment (++) → 1. Pre ++, 2. Post ++
- Decrement (—) → 1. Pre —, 2. Post —

__Post++, Post—__

```
let a = 10;
let b = a++;
console.log(a, b); //11 10

let c = 12;
let d = c--;
console.log(c, d); //11 12
```

**__Pre++, Pre—__**

```
let a = 10;
let b = ++a;
console.log(a, b); //11, 11

let c = 13;
let d = --c;
console.log(c, d); //12, 12
```

```
let b = 15;
let c = 20;
let d = a++ + --b + ++a - c-- + --c

console.log(a, b, c, d);
// 12 14 18 34
```

```
let a = 10++ // error

++(++a) // error
```

```
let a = true;
console.log(a++); // 1

let a = true;
console.log(++a); // 2
```

```
let a = false;
console.log(a++); // 0

let a = false;
console.log(++a); // 1
```

---