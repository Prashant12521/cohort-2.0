// 7. Ask user’s age and check if eligible to vote
// If age >= 18 → “Eligible”, else → “Not eligible”
//
// let age = prompt("Age?")
//
// if(age===null){
//   console.warn('You cancelled it')
// }else if(age.trim()===""){
//   console.warn("Write your age")
// }else if(isNaN(age)){
//   console.log("Write age in number")
// }else if(age<18){
//   console.log("Not eligible");
// }else{
//   console.log('Eligible');
// }

// 8. Print multiplication table of 5
// Use loop to print 5 × 1 to 5 × 10.
//
// for(let i=1; i<11; i++){
//   console.log(`5 x ${i} = ${5*i}`);
// }

// 9. Count how many numbers between 1 and 15 are greater than 8
//
// Loop and count conditionally.
// let count = 0;
// for(let i=0; i<16; i++){
//   if(i>8){
//     count++;
//   }
// }
// console.log(count);

// 10. Ask user for password and print access status
// Hardcoded correct password. Compare with user input.
//
// let password = "1234@abcd";
// let user = prompt('Login Password!');
// if(user===null){
//   console.log('You cancelled it');
// }else if(user.trim()===""){
//   console.log("Write properly!");
// }else if(user === password){
//   console.log("Welcome");
// }else{
//   console.log("Incorrect")
// }

// Level 2 - Slightly Tougher but Logical

// 11. Allow only 3 attempts to enter correct password
// If user gets it right early, stop. If not → “Account locked”
//
// let password = "123";
// let attempts = 0;

// function userPass(){
//   if(attempts>=3){
//     console.log('Account locked');
//     return;
//   }
//   let user = prompt('Password');
//   if(user === null){
//     console.log('Cancelled');
//     return;
//   }
//   if(user === password){
//     console.log('Welcome');
//     return;
//   }
//   attempts++;
//   console.log(`Wrong. Attempts left: ${3-attempts}`);
//   userPass();
// }

// userPass();

// 12. Ask user for words until they type “stop”. Count how many times they typed “yes”
// Loop until "stop" is typed. Count "yes".



// 13. Print numbers divisible by 7 from 1 to 50
// Use modulo % and loop.
// for(let i=1; i<51; i++){
//   if(i%7===0){
//     console.log(i);
//   }
// }


// 14. Sum of all odd numbers from 1 to 30
// Add only odd numbers. Print final sum.
// let sum = 0;
// for(let i=1; i<31; i++){
//   if(i%2===1){
//     sum=sum+i;
//   }
// }
// console.log(sum);


// 15. Keep asking number until user enters an even number
// Use while loop. Stop only if input is even.
// let oddEven;

// let number = prompt('Number');

// while(number%2 !== 0){
//   console.log('odd');
//   number = prompt('Number?');
// }

// console.log('even');


// 16. Print numbers between two user inputs
// Input start and end using prompt() → print all between.
// let num1 = prompt('First Number');
// num1 = Number(num1);

// let num2 = prompt('First Number');
// num2 = Number(num2);

// if(num1 < num2){
//   while(num1 !== num2-1){
//     num1++;
//     console.log(num1);
//   }
// } else if(num1 > num2){
//   while(num1 !== num2+1){
//     num1--;
//     console.log(num1);
//   }
// } else{
//   console.log('No number between them');
// }


// 17. Print only first 3 odd numbers from 1 to 20
// Use loop. Stop with break after 3 odd prints.



// 18. Ask user 5 numbers. Count how many are positive
// Use loop + condition + counter.

// 19. ATM Simulator – Allow 3 withdrawals
// Start with ₹1000 balance. Ask withdrawal amount 3 times.
// If enough balance → deduct
// Else → print “Insufficient balance”

//12