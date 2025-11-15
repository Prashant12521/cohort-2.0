let btn = document.querySelector('button');
let box = document.querySelector('#box');

btn.addEventListener('click', function(){
  let num1 = Math.floor(Math.random()*256);
  let num2 = Math.floor(Math.random()*256);
  let num3 = Math.floor(Math.random()*256);

  box.style.backgroundColor = `rgb(${num1},${num2},${num3})`;
})


