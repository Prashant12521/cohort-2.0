let start = document.querySelector('h2');
let inc = document.querySelector('#js-inc');
let dec = document.querySelector('#js-dec');
let sqr = document.querySelector('#js-sqr');
let cube = document.querySelector('#js-cube');
let reset = document.querySelector('#js-reset');

let count = 0;

inc.addEventListener('click', function(){
  count++;
  start.innerHTML = count;
})

dec.addEventListener('click', function(){
  count--;
  start.innerHTML = count;
})

sqr.addEventListener('click', function(){
  count*=count;
  start.innerHTML = count;
})

cube.addEventListener('click', function(){
  count = count**3;
  start.innerHTML = count;
})

reset.addEventListener('click', function(){
  count = 0;
  start.innerHTML = count;
})