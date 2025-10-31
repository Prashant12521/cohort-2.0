// 1. Basic Operators (Arithmetic, Assignment, Increment, Decrement, Comparison, Logical, Bitwise)

// a. Create two numbers a = 10 and b = 3.
// Perform and log: a + b, a - b, a *b, a / b, a % b.
// let a = 10;
// let b = 3;
// console.log(a+b);
// console.log(a-b);
// console.log(a*b);
// console.log(a/b);
// console.log(a%b);


// b. Write: let x = 5; x = x + 3;
// Now rewrite the same using +=.
// Do the same for -=, *=, /=.
// let x = 5;
// x = x + 3;
// x+=3;
// x-=3;
// x*=3;
// x/=3;


// c. let count = 5;
// Use count++ and log value before and after.
// Repeat for count-.
// let count = 5;
// count++; //Still count = 5 but now its 6.
// console.log(count); //6
// count--; //Still 6 but now its 5.
// console.log(count); //5


// d. Compare two values: 5 == "5" and 5 ==="5".
// Observe difference.
// console.log(5 == "5"); //true
// console.log(5 === "5"); //false


// e. Check if 10 is greater than 5, less than 20, and equal to 10.
// if(10>5){
//   console.log('true');
// }
// if(10<20){
//   console.log('true');
// }
// if(10===10){
//   console.log('true');
// }


// f. Try logical AND and OR:
// true && false
// true false
// (true)
// if(10 && 15){
//   console.log('AND');
// }
// if(10 || 0){
//   console.log('OR');
// }
// if(15){
//   console.log('truthy');
// }


// g. Predict the result of:
// (5 > 3 && 10 > 8),
// (5 > 3 || 10 < 8)
// if(5 > 3 && 10 > 8){
//   console.log('true');
// }
// if(5 > 3 || 10 > 8){
//   console.log('true');
// }


// h. Bitwise (light intro):
// Evaluate 5 & 1 and 5 1.
// Write result and your observation (no deep explanation needed now).
// console.log(5&1); //1
// console.log(5|1); //5
//5->101
//1->001



// 2. Variable Hoisting in JavaScript

// a. Predict output of:
// console.log(a);
// var a = 10
//undefined


// b. Predict output of:
// console.log(b);
// let b = 10
//can't access before initialization because of TDZ


// c. Predict output of:
// test ()
// function test() { console.log("Hello") }
//Hello


// d. Try writing a function expression before initialization and call it:
// hello()
// var hello = function () { console.log("Hi") }
// Write what happened and why.
//We got error saying hello is not a function because variable var is fully hoisted and function are inside the var variable.


// e. Write one sentence:
// What gets hoisted?
// What does not get hoisted fully?
//variable and function gets hoisted. Var variable and function are fully hoisted.
//let, const, function expression don't get fully hoisted because of TDZ.



// 3. Conditional Operators (if, else, else-if, ternary, switch)

// a. Take input using prompt for age.
// If age > 18 → 1og "Adult".
// Else → log "Minor".
// let age = prompt('age');
// if(age>18){
//   console.log('Adult');
// }else{
//   console.log('Minor');
// }


// b. Write a program:
// If marks >= 90 → "A grade"
// Else if marks >= 75 → "B grade"
// Else if marks >= 50 → "C grade"
// Else → "Fail"
// let marks = prompt("marks?");
// if(marks >= 90){
//   console.log('A');
// } else if(marks >= 75){
//   console.log('B');
// } else if(marks >= 50){
//   console.log('C');
// } else{
//   console.log('Fail');
// }


// c. Create a variable city = "Bhopal".
// If city is "Bhopal" → log "MP"
// Else if city is "Delhi" → log "Capital"
// Else → log "Unknown City"
// let city = "Bhopal";
// if (city === "Bhopal") {
//   console.log("MP");
// } else if (city === "Delhi"){
//   console.log("Capital");
// } else {
//   console.log("Unknown City");
// }


// d. Use ternary operator:
// Let score = 40.
// If score > 35 → "Pass" else "Fail" using a ternary.
// let score = 40;
// score>35 ? console.log("Pass") : console.log("fail");


// e. Convert this if-else into a ternary:
// if (temperature > 30) { "Hot" } else { "Pleasant" }
// let temperature = prompt("temp?")
// temperature > 30 ? console.log("Hot") : console.log("Pleasant");


// f. Write a switch case:
// Take day number (1 to 7).
// Print the day name.
// Default case: "Invalid Day".
// let number = +prompt("Number between 1 to 7");
// switch (number) {
//   case 1:
//     console.log("Mon");
//     break;
//   case 2:
//     console.log("Tue");
//     break;
//   case 3:
//     console.log("Wed");
//     break;
//   case 4:
//     console.log("Thur");
//     break;
//   case 5:
//     console.log("Fri");
//     break;
//   case 6:
//     console.log("Sat");
//     break;
//   case 7:
//     console.log("Sun");
//     break;
//   default:
//     console.log("Invalid Day");
// }


// g. Using logical operators in condition:
// If age > 18 and country == "India" → log "Eligible for Vote"
// Else → "Not Eligible"
// const age = prompt("Age?");
// const country = prompt("Country?");
// if(age > 18 && country === "India"){
//   console.log("Eligible for Vote");
// } else {
//   console.log("Not Eligible");
// }