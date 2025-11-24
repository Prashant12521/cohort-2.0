const outer = document.querySelector('.outer');
console.log(outer.childNodes[0])
outer.childNodes[0].nodeValue = 'hello';
outer.childNodes[2].textContent = 'hello2';

outer.childNodes.forEach((elem)=>{
  console.log(elem);
  
})