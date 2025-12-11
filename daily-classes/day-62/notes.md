## D-62

### Introduction to Error Handling

**Error handling** means **detecting**, **catching**, and **managing** errors in a program so that it does NOT crash and can respond gracefully.

**Without error handling** → program stops suddenly.

**With error handling** → you control what happens next.

### Common types of errors in JavaScript - [Syntax errors, Runtime errors, Logical errors]

1. **Syntax Errors** → Wrong code structure

aapne code me likhte waqt galti kardi

```
leat a = 12; 
> SyntaxError

a let = 12;
> SyntaxError
```

format me galti
1. **Runtime Errors **→ Error while executing code

Code likhte waqt error nahi h chalte waqt error h

```
function abcd(){
  let a = 12;
  console.log(a.name);
}

abcd();
> undefined
```

```
function abcd(){
  let a = 12;
  console.log(a.name.first);
}

abcd();
> TypeError: Cannot read properties of undefined
```
1. **Logical Errors → **Code runs but gives wrong output

aapke code ko kuch karna chahiye tha par wo kar kuch aur raha h, logic galat likh diya yahan koi error nahi aayega lekin jo output aana chahiye tha wo nahi aayega

```
function add(a,b){
  return a-b;
}

console.log(add(1, 2));
> -1
```

```
try{
  console.log(a.age.name);
} catch(err){
  console.log(err);
}

console.log('hi’);

> ReferenceError: a is not defined
> hi

// code will not crash because we handled it
```

### Understanding the Error object - [message, name, stack]

When something goes wrong in JavaScript, an **Error Object** is created.

This object stores **all the details about what went wrong**.

You can access this object using catch(error) in a try/catch block or inside a rejected promise.

```
try{
  let a = 12;
  console.log(a.name.age);
}
catch(err){
  console.log(err.message);
  console.log(err.name);
  console.log(err.stack);
}

> Cannot read peoperties of undefined (reading 'age')
> TypeError
> TypeError: Cannot read properties of undefined (reading 'age')
  at script.js.16:12
```

### Handling exceptions using ‘try-catch’, ‘try-catch-finally’

JavaScript uses **try-catch** blocks to handle runtime errors (exceptions) without crashing the program.

```
try{
  let a = 12;
  console.log(a.name.message);
}
catch(err){
  console.log(err);
}
finally{
  console.log('hihihi’);
}

>TypeError: ....
> hihihi
```

```
try{
  let a = 12;
  console.log(a);
}
catch(err){
  console.log(err);
}
finally{
  console.log('hihihi’);
}

> 12
> hihihi
```

code error de ya naa de lekin finally jarur chalega

### How to Throw Errors in JavaScript

```
try{
  let a = 12;
  console.log(a.name.age);
} catch (err) {
  throw new Error(
  'Something went wrong from out side, please wait for some time.');
}

> Uncaught Error: Something went wrong from our side, please wait for some time.
```

### Error Handling in Asynchronous Code