// console.log(Math.abs(10));
// console.log(Math.ceil(10.9));
// console.log(Math.round(10.4));
// console.log(Math.round(10.5));
// console.log(Math.trunc(10.4837493));
// console.log(Math.pow(10, 3));
// console.log(Math.sqrt(9));
// console.log(Math.max(10, 3, 84, 23, 99));
// console.log(Math.min(10, 3, 84, 23, 99)); // 3
// console.log(Math.random());
// console.log(12.2121.toFixed(2)); // 12.21
// console.log(Math.sqrt(9)); // 3
// console.log(Math.cbrt(8)); // 2

// --->

// **Q.** Calculate compound interest

// CP = P(1 + r/100)^(t) - P

// Example: input => P = 10000, r = 5, t = 3, output = 1576.25

// let prompt = require("prompt-sync")();

// let p = Number(prompt("Enter Principle: "));
// let r = Number(prompt("Enter rate of Interest: "));
// let t = Number(prompt("Enter time: "));

// let a = p * Math.pow(1 + (r/100), t);

// let ci = a - p

// console.log(ci.toFixed(2));

// ----->

// **Q** Generate OTP

// console.log(Math.trunc(Math.random() * 9000 + 1000));

// Q. Area of triangle

// let a = 5;
// let b = 6;
// let c = 7;

// let s = (a + b + c)/2;

// let area = Math.sqrt(s * (s - a) * (s - b) * (s - c));

// console.log(area.toFixed(2));

// Q. Circumference of circle

// let r = 14;

// const c = 2 * Math.PI * r

// console.log(c.toFixed(2));