let heading = document.querySelector('h1');

heading.innerHTML = 'Changed';

heading.style.color = 'red';

heading.style.backgroundColor = "pink";

heading.style.fontSize = '5rem';

heading.addEventListener('click', function(){
  console.log('click');
  heading.style.color = 'lightgreen';
  heading.style.backgroundColor = 'grey';
});
heading.addEventListener('dblclick', function(){
  console.log('dblclick');
  heading.style.color = 'salmon';
  heading.style.backgroundColor = 'gold';
});

let btn = document.querySelector('button');

btn.addEventListener('click', function(){
  heading.innerHTML = 'Changed Again';
  heading.style.backgroundColor = 'lightblue';
  heading.style.color = 'black';
})