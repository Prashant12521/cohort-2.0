# Day-41

### Questions:—-

1. **Write a higher order function runTwice(fn) that takes another function and executes it two times.**

```
function runTwice(fn){
  fn();
  fn();
}

runTwice(function(){
  console.log('Hello’);
});
```

1. **Create one pure function that always returns the same output for given input, and one impure function using a global variable**

```
function pure(a,b){
  console.log(a,b);
}
pure(1,4); // 1 4
pure(1,4); // 1 4

let num = 1;
function impure(a){
  num+=a;
  console.log(num);
}
impure(4); // 5
impure(4); // 9
```

1. **Write a function that uses object destructuring inside parameters to extract and print name and age**

```
function abcd({name, age}){
  console.log(name, age);
}

abcd({name:"harsh", age:27});

// harsh 27
```

1. **Demonstrate the differnece between normal function and arrow function when used as object methods**

this keyword → this ek aisa keyword h jo ki dynamic h iski value badal jaati h baar baar

```
let obj = {
  name: “harsh”,
  fnc: function(){
    console.log(this);
  },
  fnc2: ()=>{
    console.log(this);
  },
};

obj.fnc();
// {name: 'harsh', fnc: f}
obj.fnc2();
// Window {window: Window, self: ......}
```

arrow function `this` ki value apne parent se leta h aur yahan fnc2 jo ko arrow fnc h iska parent obj h aur obj ka `this` Window h
1. **Given an array of numbers, use map() to create a new array where each number is squared**

```
let arr = [1,2,3,4,5];
let newarr = arr.map(function(val){
  return val * val;
});
console.log(newarr);
// [1,4,9,16,25]
```

1. **Use filter() to get only even numbers from an array**

```
let arr = [1,2,3,4,5];
let newarr = arr.filter(function(val){
  return val%2 === 0;
});
console.log(newarr);
// [2,4]
```

1. **Use reduce() to find the total salary from an array of numbers [1000, 2000, 3000]**

```
let arr = [1000, 2000, 3000];
let total = arr.reduce((acc, val)=>{
  return acc + val;
}, 0);

console.log(total);
// 6000
```

1. **Create an array of names and use some() and every() to test a condition**

```
let names = ["dhaneshwar”, “om”, “shanti”];
let ans = names.some(function(val){
  retrun val.length > 3;
});
console.log(ans); //true
let anss = names.every(function(val){
  retrun val.length > 3;
});
console.log(anss); //false
```

1. **Create an object user and test the behavior of Object. freeze() and Object.seal() by adding/changing keys**

```
let user = {
  name: “harsh”,
  age: 27,
  email: "h@h.h",
};

Object.freeze(user);
user.name = "harshita";

console.log(user.name);
// “harsh"

let user2 = {
  name: “harsh”,
  age: 27,
  email: "h@h.h",
};

Object.seal(user2);
user.name = "harshita”;
user.social = “insta";

console.log(user2);
// name: harshita, age: 27, email: h@h.h
```

1. **Create a nested object (user → address → city) and access the city name inside it**

```
let obj = {
  user: {
    address: {
      city: "Bhopal"
    },
  },
};

let {city} = obj.user.address;

console.log(city);
// Bhopal
```