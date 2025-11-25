const allBtn = document.querySelectorAll('button');

allBtn.forEach(function(btn){
  btn.addEventListener('click', ()=>{
    if(btn.innerHTML === 'Add Friend'){
      btn.innerHTML = 'Remove';
    } else{
      btn.innerHTML = 'Add Friend';
    }
  })
})

// ------------ forEach vs map ----------

let arr = [10, 20, 30];

let newArr = arr.forEach(function(elem){
  return elem * elem;
})

console.log(newArr);
// undefined

let arrr = [10, 20, 30];

let newArrr = arr.map(function(elem){
  return elem * elem;
})

console.log(newArrr);
// (3)[100, 400, 900]