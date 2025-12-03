# D-57

faila hua code X hai

hame aisa code likhna h jo — scaleable, modular, easy to maintain, read and manage

to write like this we write in OOP way.

```
class Bottle{
  constructor(){
    this.color = 'blue';
    this.material = 'plastic';
    this.price = 150;
  }

  drink(){};
  fill(){};
}

let bottle1 = new Bottle();
let bottle2 = new Bottle();
```

class hamlog banate h har baar ek naya object banane k liye

class is a blueprint which makes object and methods inside it.

## Prototypes

Every class in js automatically use prototypes chain to store methods

```
class Person {
  speak() {
    console.log("Hello!");
  }
}
```

js convert this to

```
function Person() {}

Person.prototype.speak = function () {
  console.log("Hello!");
};
```

Properties defined inside constructor() go inside the object (instance)

Methods defined inside the class go into the prototype

**Prototype is an object which is shared by all instances of a class or constructor function.**

---

## Prototypes - [this keyword, call, apply, bind]

### this

this ek special keyword, jiski value jikhte waqt tay nahi hota jab wo chalega tab uski value tay hoti h

**Global → window**

`console.log(this);`

**function → window**

```
function abcd() {
  console.log(this);
}
abcd();
```

**es5 function inside object → object** 

```
let obj = {
  name: ‘harsh’,
  fnc: function(){
    console.log(this.name);
  },
};

obj.func();
//harsh
```

**es6 function inside object → window**

```
let obj = {
  fnc: () => {
    console.log(this);
  },
};

obj.fnc();
// window
```

**es5 function inside es5 function inside object → window**

```
let obj = {
  fnc: function(){
    function abcd() {
      console.log(this);
    }
    abcd();
  },
};

obj.fnc();
//window
```

**es6 function inside es5 function inside object → object **

```
let obj = {
  fnc: function(){
    (()=>{
      console.log(this);
    })();
  },
};

obj.fnc();
//obj
```

### call apply bind

ek function me this ki value **window **hoti h, agar aap chaahte ho ki wo value window naa ho par koi aur object ho tab aap use kar sakte ho call, apply, bind ka

**call**

```
function abc(){
  console.log(this);
}

abc();
//window
```

```
let obj = {
  name: ‘harsh’,
};

function abc(){
  console.log(this);
}

abc.call(obj);
//{name:’harsh’}
```

**apply**

```
let obj = {
  name: ‘harsh’,
};

function abc(a,b,c){
  console.log(this,a,b,c);
}

abc.apply(obj, [1,2,3]);
//{name:’harsh’}1 2 3
```

**bind**

```
let obj = {
  name: ‘harsh’,
};

function abc(a,b,c){
  console.log(this,a,b,c);
}

let newfnc = abcd.bind(obj,1,2,3);

newfnc();
//{name:’harsh’} 1 2 3
```

**call **→ fnc chalata h and this ki value set karta h

**apply** → wahi karta h jo call karta h and arguments me pahli value this ki and doosri value array hoti h

**bind** → wahi karta h jo call karta h and aapko naya fnc deta h