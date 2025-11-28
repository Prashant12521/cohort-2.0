const p = document.querySelector('p');
const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';

const text = p.innerText;

let iteration = 0;

function randomText () {

  const str = text.split('').map((char, index)=>{

     if(index < iteration){
      return char;
    }

    return characters.split('')[Math.floor(Math.random()*53)]
  }).join('');

  p.innerText = str;

  iteration += 0.25;

  console.log(iteration)

  if(iteration > 25){
    clearInterval(intervalId)
    return;
  }
}


let intervalId = setInterval(randomText, 30);