# D-56, Advance JS 1

## 18. Object Oriented Concepts in JS

### 1. Introduction to OOP in JavaScript

**Object Oriented Programming**

jab code chota hota h fir aap kuch bhi kar sakte ho bina koi guideline follow kiye and jab code bada ho jata h tab role m aata h guidelines

ek kamra ek banda bana sakte h koi naksha nahi chahiye, architect bhi nahi, koi guideline bhi nahi

jab bhi bada s/w banta h waise code nahi likhte jaise pure dom me aapne dekha h

faila hua code → objects, classed and functions

modular

scalable

manageable

reuse

easy to fix

### 2. Understanding ‘classes’ and ‘objects’ in JS

```
let name = 'harsh';
let age = 24;
let email = 'h@h';

let obj = {
  name: ‘harsh’,
  age: ’24’,
  email: 'h@h'
}
```

ek bande ki details ek sath rakhne k liye aapke paas hai object

```
class BiscuitMaker {
  constructor () {
    this.name = 'ParleG';
    this.price = 5;
  }
}

let biscuit =  new BiscuitMaker();
let biscuit2 =  new BiscuitMaker();
let biscuit3 =  new BiscuitMaker();
let biscuit4 =  new BiscuitMaker();
```

classes banate h taki hame har baar ek naya object mil jaye

classes object ki facory h

har baar ‘new’ word k sath class run karoge to ek naya object milega

### 3. Understanding ‘Constructor’ and ‘Prototypes’ - [‘this keywords’, ‘call’, ‘apply’, ‘bind’]

```
class AlooChaat{
  constructor(){
    this.price = 55;
    this.oil = '5ml';
    this.oilBrand = 'Saffola';
    this.masaale = ['dhaniya’, ‘pudina’, ‘mirch’];
  }
  
  pack(){
    console.log(‘aaloo chat packed');
  }

  unpack(){
    console.log('aaloo chaat unpacked’);
  }

}

let ac1 = new AlooChaat();
ac1.pack();
```

```
class Kitaab{
  constructor(){
    this.name = 'science';
    this.price = 1200;
    this.author = 'harsh sharma';
    this.color = 'yellow';
  }

  pannaPalto(){}

  bookmarkLagao(){}

  padhlo(){}
}

class User{
  constructor(){
    this.username = 'harsh';
    this.age = 27;
    this.email = 'asd@sfd';
  }

  khaanaKhaao(){}

  saansLo(){}
}
```

```
class Kitaab{
  constructor(name, price, author, color){
    this.name = name;
    this.price = price;
    this.author = author;
    this.color = color;
  }

  pannaPalto(){}

  bookmarkLagao(){}

  padhlo(){}
}
let k1 = new Kitaab('moral’, 120, ‘harsh sharma’, 'white');
let k2 = new Kitaab(‘CS’, 890, ‘Gopi Bau’, 'red');
let k3 = new Kitaab(‘constitution’, 362, ‘swantantra senanies’, ‘dark blue');
```

**this **→ this ki value likhte waqt nahi chalte waqt decide hoti h

```
class Animal{
  constructor(){
    this -> for window
  }
}

this -> for window
```

**constructor** → ek function jo automatic chalta h jaise hi class se naya instance banaya jaata h

let k1 = new Kitaab();

let k2 = new Kitaab();

Here k1 and k2 instance h

new Animal(); → chalate hi constructor chal jayega

```
class Human() {
  constructor(){
    this.name = 'abcd';
    this.age = 27;
  }

  saansLo(){console.log(‘hey’);}
  khaanaKhaao(){console.log(‘hey’);}
}

let h1 = new Human();
let h2 = new Human();
```

```
class Human() {
  constructor(){
    this.name = 'abcd';
    this.age = 27;
  }
}

Human.prototype.saansLo = function(){
  console.log(‘hey’);
};
Human.prototype.khaanaKhaao = function(){
  console.log(‘hey');
}

let h1 = new Human();
let h2 = new Human();
```

**Prototype **→ Shared memory