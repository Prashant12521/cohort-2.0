const box = document.querySelector('.box');

box.addEventListener('mousemove', function(details){
  let boxLocation = box.getBoundingClientRect();

  let cursorLocation = details.clientX - boxLocation.left;

  let half = boxLocation.width/2;

  let distance = Math.abs(cursorLocation - half) / half;

  let color = Math.floor(255 * distance);

  if(cursorLocation < boxLocation.width/2){

    box.style.backgroundColor = `rgb(${color},0,0)`;
  } else{
    box.style.backgroundColor = `rgb(0,0,${color})`;
  }
})

box.addEventListener('mouseleave', function(){
  box.style.backgroundColor = 'rgb(255,255,255)';
})