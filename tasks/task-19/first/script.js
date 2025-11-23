const h3 = document.querySelector('h3');
const btn = document.querySelector('button');
let friend = 0;

btn.addEventListener('click', ()=>{
  if(friend === 0){
    friend++;
    h3.innerHTML = 'Friend';
    h3.style.color = 'green';
    btn.innerHTML = 'Remove';
    btn.style.backgroundColor = 'red';
  } else{
    friend--;
    h3.innerHTML = 'Stranger';
    h3.style.color = 'red';
    btn.innerHTML = 'Add Friend';
    btn.style.backgroundColor = 'lightgreen';
  }
})