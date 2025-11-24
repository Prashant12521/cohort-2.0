# D-49

`document.querySelector(‘h1’);` → This will select top first h1 element.

`document.querySelectorAll(‘h1’);` → This will select all h1 element.

NodeList is like an array but not all methods of array work with it. NodeList is similar to array.

```
<h1>Hello 1</h1>
<h1>Hello 1</h1>
<h1>Hello 1</h1>

const allH1 = document.querySelectorAll(‘h1’);

allH1.forEach(){
  console.log('hello’);
}

// hello
// hello
// hello
```

```
const outer = document.querySelector('.outer');
console.log(outer.childNodes[0])
outer.childNodes[0].nodeValue = 'hello';
outer.childNodes[2].textContent = 'hello2';

outer.childNodes.forEach((elem)=>{
  console.log(elem);
  
})
```