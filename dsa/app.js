let prompt = require("prompt-sync")();

// let units = Number(prompt("Total Units "));
// if (units <= 100) console.log(units * 4.2);
// else if (units >= 101 && units <= 200)
//   console.log(100 * 4.2 + (units - 100) * 6);
// else if (units >= 201 && units <= 400)
//   console.log(100 * 4.2 + 100 * 6 + (units - 200) * 8);
// else if (units > 400)
//   console.log(100 * 4.2 + 100 * 6 + 200 * 8 + (units - 400) * 13);

// let units = Number(prompt("Total Units "));
// let amount = 0;
// // units = 700
// if (units > 400) {
//   amount = (units - 400) * 13;
//   units = 400;
// }
// if (units > 200 && units <= 400) {
//   amount += (units - 200) * 8;
//   units = 200;
// }
// if (units > 100 && units <= 200) {
//   amount += (units - 100) * 6;
//   units = 100;
// }
// if (units <= 100) {
//   amount += units * 4.2;
// }
// console.log(amount);

// const month = Number(prompt("Month Number "));
// let days = 0;

// if (month == 2) {
//   const year = Number(prompt("Year "));
//   if (year%400 == 0 || (year % 4 == 0 && year%100 !== 0)) {
//     days = 29;
//   } else days = 28;
// } else if (
//   month == 1 ||
//   month == 3 ||
//   month == 5 ||
//   month == 7 ||
//   month == 8 ||
//   month == 10 ||
//   month == 11
// ) {
//   days = 31;
// } else {
//   days = 30;
// }
// console.log(days);

// Promises
console.log("HI");
const testPromise = new Promise((resolve, reject) => {
  const result = 5 + 51;

  result == 10 ? resolve("Fulfilled") : reject({ message: "error" });
});

testPromise
  .then((message) => {
    console.log(message);
  })
  .catch((message) => {
    console.log(message);
  })
  .finally(() => {
    console.log("done");
  });
console.log("Hey");