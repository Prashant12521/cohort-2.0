# Day-42

HTML

CSS

JS (Basic)

DOM (Frontend ki JS)

JS (Advance)

React

# Introduction to DOM

### **DOM - Document Object Model**

## DOM 4 Pillers

1. Selection of an Element
- querySelector
- querySelectorAll
- getElementById

```
document.querySelector(‘h1’);
```

2. Changing HTML
- innerHTML
- textContent

```
let heading = document.querySelector(‘h1');

heading.innerHTML = ‘Change';
```

3. Changing CSS

```
let heading = document.querySelector(‘h1');

heading.style.color = ‘red';

heading.style.backgroundColor = 'white';
```

4. Event Listeners

```
let heading = document.querySelector('h1’);

heading.addEventListener(‘click’, function(){
  console.log('hello');
});
```