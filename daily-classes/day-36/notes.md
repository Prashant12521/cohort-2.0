# Day-36

### -do…while in JS

```
do{
  console.log(hi);
  i++;
}while(12>13);

//hi
```

### Recursion in JS

It means function calling itself until a **base condition** is met which stop the recursive calls and begins to return values back up the call stack.

```
function abcd(n){
  if(n===0) return;
  console.log(n);
  abcd(n-1);
}
abcd(5);

//
5
4
3
2
1
```

### Loop control statements - [break, continue]

```
for(let i=1; i<10; i++){
  if(i===3) continue;
  if(i===5) break;
  console.log(i);
}

//
1
2
4
5
```

## 13. Functions in JavaScript

code likhte hi chal jata h

**function **→ aapka code jo turant nahi chalega tab chalega jab aap bologe ki ab chalo

aap us code ko jitni baar bhi chala sakte ho

```
console.log(‘hi’); //hi
console.log(‘hello’); //hello
console.log(‘bye’); //bye
console.log(‘bye-bye’); //bye-bye
```

```
function greet(){
  console.log('hi’);
  console.log(‘hello’);
  console.log(‘bye’);
  console.log(‘bye-bye’);
}

greet();
//hi
//hello
//bye
//bye-bye


greet();
//hi
//hello
//bye
//bye-bye
```

```
function doSomething(name, age, email){
 console.log(name, age, email); 
}

doSomething(‘harsh’, 27, ‘harsh@gmail.com’);
// harsh 27 harsh@gmail.com

function doSomething(name, age, email){
 console.log(arguments); 
}

//Arguments (3) [harsh, 27, harsh@gmail.com]...

function doSomething(){
 console.log(arguments[0]); 
}

//harsh
```

Hoisting can be done with regular function but can’t with function expression