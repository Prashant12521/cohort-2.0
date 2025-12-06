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

# __4. Math Function__

## Math functions and Problems:

### **Math.abs()**

-ve → +ve

+ve → +ve

```
console.log(Math.abs(-10)); // 10
console.log(Math.abs(10)); // 10
```

### Math.ceil()

```
console.log(Math.ceil(10.1)); // 11
console.log(Math.ceil(10.78)); // 11
console.log(Math.ceil(10.9)); // 11
```

### Math.floor()

```
console.log(Math.floor(10.9)); // 10
console.log(Math.floor(10.1)); // 10
```

### Math.round()

```
console.log(Math.round(10.4)); // 10
console.log(Math.round(10.5)); // 11
console.log(Math.round(10.9)); // 11
```

### Math.trunc()

remove the decimal part

```
console.log(Math.trunc(10.4837493)); //10
console.log(Math.trunc(10.1)); // 10
```

### Math.pow()

```
console.log(Math.pow(10, 3)); // 1000
console.log(Math.pow(2, 5)); // 32
```

### Math.sqrt()

```
console.log(Math.sqrt(9)); // 3
```

### Math.cbrt()

```
console.log(Math.cbrt(8)); // 2
```

### Math.max()

```
console.log(Math.max(10, 3, 84, 23, 99)); // 99
```

### Math.min()

```
console.log(Math.min(10, 3, 84, 23, 99)); // 3
```

### Math.random()

random no between 0 - 1 with excluding 1.

```
console.log(Math.random()); // 0.0384938
console.log(Math.random()); // 0.76438728
```

### toFixed()

```
console.log(12.2121.toFixed(2)); // 12.21
console.log(12.2121.toFixed(3)); // 12.212
```

### Math problems:

**Q.** Calculate compound interest

CP = P(1 + r/100)^(t) - P

Example: input => P = 10000, r = 5, t = 3, output = 1576.25

```
let prompt = require("prompt-sync")();

let p = Number(prompt("Enter Principle: "));
let r = Number(prompt("Enter rate of Interest: "));
let t = Number(prompt("Enter time: "));

let a = p * Math.pow(1 + (r/100), t);

let ci = a - p

console.log(ci.toFixed(2));

// 1576.25
```

**Q. **Generator OTP

```
console.log(Math.trunc(Math.random()*9000)); // 8437
```

**Q. **Area of triangle by heron’s formula

```
let a = 5;
let b = 6;
let c = 7;

let s = (a + b + c)/2;

let area = Math.sqrt(s * (s - a) * (s - b) * (s - c));

console.log(area.toFixed(2));
```

**Q. **Circumference of circle

```
let r = 14;

const c = 2 * Math.PI * r

console.log(c.toFixed(2));
```

---

# __5. Conditional Statement__

```
let age = Number(prompt("Enter your age "));

if(age>=18){
  console.log('valid voter');  
} else {
  console.log('not valid');
}
```

```
let marks = Number(prompt("Enter your marks "));

if(marks>30)console.log('pass');
if(marks<=30)console.log('fail');
```

```
let marks = Number(prompt("Enter your marks "));

if (marks <= 30) {
  console.log("fail");
} else if (marks > 30 && marks < 70) {
  console.log("study more");
} else if (marks > 70 && marks < 90) {
  console.log("good");
} else {
  console.log("very good");
}
```

### Conditional Statements Questions:-

**Q. **Accept two numbers and print the greatest between them

```
let num1 = prompt("First Number ");

let num2 = prompt("Second Number ");

if (num1 > num2) {
  console.log(num1+' is greatest number');
} else {
  console.log(num2 + ' is the greatest number');
}
```

**Q. **Accept an integer and check whether it is an even number or odd

```
let num = +prompt('Number ');
if(num%2 === 0){
  console.log('even');
}else{
  console.log('odd');
}
```

**Q. **Accept name and age from the user. Check if the user is a valid voter or not.

```
let name = prompt("Your Name ");
let age = prompt("Your age ");
if (age >= 18) {
  console.log(`${name} is eligible to vote`);
} else {
  console.log(`${name} is not eligible to vote`);
}
```

**Q. **Accept three numbers and print the greatest among them

```
let num1 = prompt("1st Number");
let num2 = prompt("2nd Number");
let num3 = prompt("3rd Number");
if (num1 > num2 && num1 > num3) {
  console.log(num1);
} else if (num2 > num1 && num2 > num3) {
  console.log(num2);
} else {
  console.log(num3);
}
```

**Q. **Accept a year and check if it a leap year or not

```
let year = Number(prompt("Year "));
if (year % 4 === 0 && year % 100 !== 0) {
  console.log(year + " is a leap year");
} else if (year % 400 === 0) {
  console.log(year + " is  a leap year");
} else {
  console.log(year + " is not a leap year");
}
```

**Q. **Shop discount - Description on below

**    Amount**                      **Discount**

   0 - 5000                         0%

5001 - 7000                      5%

7001 - 9000                     10%

     >9000                         20%

```
let amount = Number(prompt("Total Amount "));
if (amount < 5001) {
  console.log("Discount: 0%");
} else if (amount >= 5001 && amount <= 7000) {
  console.log("Discount: 5%");
} else if (amount >= 7001 && amount <= 9000) {
  console.log("Discount: 10%");
} else if (amount > 9000) {
  console.log("Discount: 20%");
}
```

**Q.  **Electricity Bill - Description below

**Amount**                      **Discount**

  <=100                             4.2

101 - 200                            6

201 - 400                           8

    >400                              13

```
let units = prompt("Total Units ");

if (units <= 100) console.log(units * 4.2);
else if (units >= 101 && units <= 200)
  console.log(100 * 4.2 + (units - 100) * 6);
else if (units >= 201 && units <= 400)
  console.log(100 * 4.2 + 100 * 6 + (units - 200) * 8);
else if (units > 400)
  console.log(100 * 4.2 + 100 * 6 + 200 * 8 + (units - 400) * 13);
```

```
let units = Number(prompt("Total Units "));
let amount = 0;
// units = 700
if (units > 400) {
  amount = (units - 400) * 13;
  units = 400;
}
if (units > 200 && units <= 400) {
  amount += (units - 200) * 8;
  units = 200;
}
if (units > 100 && units <= 200) {
  amount += (units - 100) * 6;
  units = 100;
}
if (units <= 100) {
  amount += units * 4.2;
}
console.log(amount);
```

**Q. ** Counting number of days in a given month of a year

```
const month = Number(prompt("Month Number "));
let days = 0;

if (month == 2) {
  const year = Number(prompt("Year "));
  if (year%400 == 0 || (year % 4 == 0 && year%100 !== 0)) {
    days = 29;
  } else days = 28;
} else if (
  month == 1 ||
  month == 3 ||
  month == 5 ||
  month == 7 ||
  month == 8 ||
  month == 10 ||
  month == 11
) {
  days = 31;
} else {
  days = 30;
}
console.log(days);
```