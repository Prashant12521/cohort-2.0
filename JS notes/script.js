// const num = prompt("Number!");
// for(let i=1; i<=num; i++){
//   if(i%2===0){
//     console.log(`${i} is even`);
//   } else{
//     console.log(`${i} is odd`);
//   }
// }

var a = 10;
let b = 20;
{
  var a = 30; // same var, overwrites outer a
  let b = 40; // block-scoped, new variable
  console.log(a, b); // 30 40
}
console.log(a, b); // 30 20