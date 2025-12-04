# D-58

### More Topics in OOPS - [class expression, hoisting, inheritence, getter & setter]

**class expression** - basically class is saved inside variable

```
let Animal = class {
  constructor(){
this.name = "Dodo";
this.breed = 'dog';
}
};

let an1 = new Animal();

console.log(an1);
// Animal {name: ‘dodo’, breed: ‘dog’}
```

**hoisting - **kisi bhi variable ya fnc ko uske banne se pahle use karne ko hoisting kahte h

Jab bhi class expression ham banate h to hoisting perform nahi hota h kyonki isse ham variable me daal rahe h

**inheritence - **basically ek class ko extend karna aur uske feature ko copy karna

```
class Animal {
  constructor() {
    this.hands = 2;
    this.legs = 2;
  }

  eat(){}
  brethe(){}
}

class Kekda extends Animal {
  constructor(){
    super();
    this.legs = 8;
    thsi.hands = 0;
  }

  susu(){}
}
```

inheritance - agar koi class h jisme kuch kuch likha h and aap maante ho ek nayi class usi ka extension h to aap wo saare feature puraani class se borrow kar sakte h and nayi class me use kar sakte ho and apne naye feature bhi bana sakte ho

```
class Marker{}
class BlueMarker extends Marker{

}
```

**getter & setter - **2 tarike hote h jisse ham value ko get aur set kar sakte h

```
class Animal{
  constructor(){
    this.age //not private//
    this._age //private//
  }

  set kuchbhi(val){
    if(val<0){
      console.error('not’);
      return;
    }
    this._age = val;
    return this._age;
  }  

  get age(){
    return.this._age;
  }
}

let a1 = new Animal();
a1._age = 23; //it will change directly;
a1.kuchbhi = 37; //it condition is true then change
```
