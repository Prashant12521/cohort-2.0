// Section 1: Objects and OOPS Thinking (Foundation)

// Create a user object that stores name and email and has a login method which prints "User logged in".

// let user = {
//   name: 'nick',
//   email: 'nick@email',

//   login: function(){
//     console.log('logged in')
//   },
// };

// user.login();

// // Imagine you now have 5 users.
// // First, think how you would manage them without using a class.

// let user1 = {
//   name: 'nick',
//   email: 'nick@email',

//   login: function(){
//     console.log('logged in')
//   },
// };

// let user2 = {
//   name: 'nick',
//   email: 'nick@email',

//   login: function(){
//     console.log('logged in')
//   },
// };

// let user3 = {
//   name: 'nick',
//   email: 'nick@email',

//   login: function(){
//     console.log('logged in')
//   },
// };

// let user4 = {
//   name: 'nick',
//   email: 'nick@email',

//   login: function(){
//     console.log('logged in')
//   },
// };

// let user5 = {
//   name: 'nick',
//   email: 'nick@email',

//   login: function(){
//     console.log('logged in')
//   },
// };

// // Then convert the same logic using a class and observe how the code becomes cleaner. Write code for both approaches.

// class User{
//   constructor(name, email){
//     this.name = name;
//     this.email = email;
//     this.login = function(){
//       console.log('loggedin');
//     };
//   }

//   loggedIn(){
//     console.log('logged in');
//   }
// }

// let user1 = new User('Harsh', 'harsh@email');
// let user2 = new User('Harshita', 'harshita@email');
// let user3 = new User('Horse', 'horse@email');

// console.log(user1);
// console.log(user2);
// console.log(user3);

// // loggedIn is a prototype which is shared memory among all user; But login which is inside the constructor is method and all user have their own login method.

// Create a product object that stores name and price and has a method which returns the final price after discount.

// let product = {
//   name: "Cap",
//   price: 1330,
//   discountedPrice: function () {
//     return this.price - 200;
//   },
// };

// console.log(product.discountedPrice());

// The goal of this section is to understand why keeping data and behavior together makes code easier to manage

// ---------------------------------

// Section 2: Classes and Objects

// Create a Car class with the following:
// brand
// speed
// a drive method that prints the car brand and speed
// Create two different car objects from the same class and verify that their data is different.

// class Car {
//   constructor(brand, speed) {
//     this.brand = brand;
//     this.speed = speed;
//   }

//   drive() {
//     console.log(this.brand, this.speed);
//   }
// }

// let car1 = new Car("BMW", "350km/hr");
// let car2 = new Car("Honda", "220km/hr");
// let car3 = new Car("Tesla", "320km/hr");

// car1.drive();
// car2.drive();
// car3.drive();

// Answer this in your own words:
// If classed did not exist, how would you write this logic and what problems might occur when the project becomes large?

// Then we have to make many object one by one and updating or adding in the object would takes much time. And if project becomes large then it would be difficult for developer to manage it.

// ---------------------------------

// Section 3: Constructor and this keyword

// Create a Student class whose constructor accepts name and roll number.
// Add a method introduce that prints both values.

// class Student {
//   constructor(name, roll) {
//     this.name = name;
//     this.roll = roll;
//   }

//   introduce() {
//     console.log(this.name, this.roll);
//   }
// }

// let student1 = new Student('Nick', 43);

// student1.introduce();

// Inside the constructor, set values using this.
// Then try removing this and notice what error occurs and why.

// --> undefined undefined

// ---------------------------------

// Create an object with two methods: normal fnc, arrow fnc
// Inside both, print this and observe the difference

// let obj = {
//   sayName: function(){console.log(this)},
//   sayArrowName: ()=>{console.log(this)}
// }

// obj.sayName();
// obj.sayArrowName();

// The goal is to clearly understand how this works and when it changes.

// ---------------------------------

// Section 4: Constructor Functions and Prototypes

// Create a User constructor function (do not use class syntax).

// bina class k bhi constructor fnc banta h
// es6 se pahle constructor fnc aise banta tha

// function User(){
//   this.name = 'harsh';
// }

// // Above one is constructor fnc

// let a1 = new User();

// Add a login method in two ways: inside the constructor and move the method to the prototype

// function User() {
//   this.name = "harsh";
//   this.login = function () {
//     console.log("loggedin");
//   };
// }

// User.prototype.loggedIn = function () {
//   console.log("loggedIn");
// };

// let user1 = new User();

// Create two User objects and compare their login methods using equality.
// Explain why the result is true or false

// function User(val) {
//   this.name = val;
// }

// User.prototype.loggedIn = function () {
//   console.log("loggedIn");
// };

// let user1 = new User("harsh");
// let user2 = new User("aman");

// console.log(user1.loggedIn === user2.loggedIn);

//--->

// function User(val) {
//   this.name = val;
//   this.loggedIn = function () {
//     console.log("loggedIn");
//   };
// }

// let user1 = new User("harsh");
// let user2 = new User("aman");

// console.log(user1.loggedIn === user2.loggedIn); // false

// The purpose here is to understand how prototypes help share behavior efficiently

// -------------------------------

// Section 5: call, apply, bind

// call

// const game = {
//   title: 'Ghost of Tsushima',
//   year: 2020,
// }

// function info(platform) {
//   console.log(this.title, this.year, platform);
// }

// info.call(game, 'PS4');

// apply - works same as call, but to pass argument we need it as an array

// const game = {
//   title: 'Ghost of Tsushima',
//   year: 2020,
// }

// function info(platform) {
//   console.log(this.title, this.year, platform);
// }

// info.apply(game, ['PS4']);

// bind - same as call with additional feature which we can save it inside variable and use it as a function as much as we want, can't rebind and this is permanently gets fixed
// call() ki tarah hi context set karta hai, but function ko return karta hai jise hum variable me store kar sakte hain, aur uska this permanently fix ho jata hai (re-bind nahi hota).


// const game = {
//   title: 'Ghost of Tsushima',
//   year: 2020,
// }

// function info(platform) {
//   console.log(this.title, this.year, platform);
// }

// const gameInfo = info.bind(game, 'PS4');

// const game2 = {
//   title: 'Super Mario',
//   year: 1985,
// }

// gameInfo.bind(game2);
// gameInfo();