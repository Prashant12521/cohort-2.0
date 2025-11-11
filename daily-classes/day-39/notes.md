# Day-39

## Questions:

**Use rest parameters to make a function that adds unlimited numbers.**

```
function addUnlimited(...nums){
  let sum = 0;
  nums.forEach(function (val) {
    sum += val;
  });
  console.log(sum);
}

addUnlimited(1,2,3,4,5,6); // 21
```

```
function addUnlimited(...nums){
  let sum = 0;
  for (let i=0; i<nums.length; i++){
    sum = sum + nums[i];
  }
  console.log(sum);
}

addUnlimited(1,2,3); // 6
```

```
function addUnlimited(...nums) {
  let ans = nums.reduce(function (acc, val) {
    return acc + val;
  }, 0);
  console.log(ans);
}

addUnlimited(1, 2, 3); // Output: 6
```

**Create an IIFE that prints “I run instantly!”**

```
(function(){
  console.log("I run instantly!”)'
})();
```

Make a nested function where the inner one prints a variable from the outer one.

```
function parent(){
  let a = 12;
  function child(){
    console.log(a);
  }
  child();
}

parent();
// 12
```

**Create an array of 5 fruits. Add one at the end and remove one from the beginning.**

```
let arr = [‘hi’, ‘hello’, ‘hey’, ‘bye’];
arr.pus’('bye-bye');
arr.unshift(‘hola');

['hola', ‘hello’, ‘hey’, ‘bye’, 'bye-bye'];
```

**Use a for loop to print all elements of an array**

```
let arr = [1,2,3,4,5,6];
for (let i=0; i<arr.length; i++){
  console.log(arr[i]);
}

//
1
2
3
4
5
6
```

**Create an object person with keys name, age, and city and print each key’s value**

```
let obj = {
  name: ‘harsh’,
  age: 27,
  city: 'Bhopal',
};

for (let key in obj) {
  console.log(key);
}
// name
// age
// city

for (let key in obj) {
  console.log(obj[key]);
}
// harsh
// 27
// Bhopal
```

**Use setTimeout() to log “Time’s up!” after 2 seconds**

```
setTimeout(function(){
  console.log("Time's up”);
}, 2000);
```