const cursor = document.querySelector('.cursor');

document.querySelector('main').addEventListener('mousemove', (val)=>{
  cursor.style.left = val.x + 'px';
  cursor.style.top = val.y + 'px';
})