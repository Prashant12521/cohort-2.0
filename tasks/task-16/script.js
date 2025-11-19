let grow = 0;
const btn = document.querySelector('button');
const percent = document.querySelector('h1');
const bar = document.querySelector('.inner');

btn.addEventListener('click', ()=>{
  btn.style.pointerEvents = 'none';

  const num = 50 + Math.floor(Math.random()*50);

  const int = setInterval(function(){
    grow++;
    percent.innerHTML = grow+'%';
    bar.style.width = grow+'%';
  },num)

  setTimeout(() => {
    clearInterval(int);
    btn.innerHTML = 'Downloaded';
    btn.style.opacity = 0.8;
  }, num*100);
})