const aKey = document.getElementById('js-a');
const sKey = document.getElementById('js-s');
const dKey = document.getElementById('js-d');
const fKey = document.getElementById('js-f');
const gKey = document.getElementById('js-g');
const hKey = document.getElementById('js-h');
const jKey = document.getElementById('js-j');
const kKey = document.getElementById('js-k');
const lKey = document.getElementById('js-l');
const llKey = document.getElementById('js-;');
const wKey = document.getElementById('js-w');
const eKey = document.getElementById('js-e');
const tKey = document.getElementById('js-t');
const yKey = document.getElementById('js-y');
const uKey = document.getElementById('js-u');
const oKey = document.getElementById('js-o');
const pKey = document.getElementById('js-p');

const keyPressed = document.querySelector('#js-keyPressed');
const showKey = document.querySelector('#js-showKey');



const aSound = new Audio('./sounds/a.mp3');
const sSound = new Audio('./sounds/s.mp3');
const dSound = new Audio('./sounds/d.mp3');
const fSound = new Audio('./sounds/f.mp3');
const gSound = new Audio('./sounds/g.mp3');
const hSound = new Audio('./sounds/h.mp3');
const jSound = new Audio('./sounds/j.mp3');
const kSound = new Audio('./sounds/k.mp3');
const lSound = new Audio('./sounds/l.mp3');
const llSound = new Audio('./sounds/;.mp3');
const wSound = new Audio('./sounds/w.mp3');
const eSound = new Audio('./sounds/e.mp3');
const tSound = new Audio('./sounds/t.mp3');
const ySound = new Audio('./sounds/y.mp3');
const uSound = new Audio('./sounds/u.mp3');
const oSound = new Audio('./sounds/o.mp3');
const pSound = new Audio('./sounds/p.mp3');



aKey.addEventListener('click', function(){
  aSound.play();
});
sKey.addEventListener('click', function(){
  sSound.play();
});
dKey.addEventListener('click', function(){
  dSound.play();
});
fKey.addEventListener('click', function(){
  fSound.play();
});
gKey.addEventListener('click', function(){
  gSound.play();
});
hKey.addEventListener('click', function(){
  hSound.play();
});
jKey.addEventListener('click', function(){
  jSound.play();
});
kKey.addEventListener('click', function(){
  kSound.play();
});
lKey.addEventListener('click', function(){
  lSound.play();
});
llKey.addEventListener('click', function(){
  llSound.play();
});
wKey.addEventListener('click', function(){
  wSound.play();
});
eKey.addEventListener('click', function(){
  eSound.play();
});
tKey.addEventListener('click', function(){
  tSound.play();
});
yKey.addEventListener('click', function(){
  ySound.play();
});
uKey.addEventListener('click', function(){
  uSound.play();
});
oKey.addEventListener('click', function(){
  oSound.play();
});
pKey.addEventListener('click', function(){
  pSound.play();
});



document.body.addEventListener('keydown', (val)=>{

  function showPressedKey(){
    showKey.innerHTML = val.key.toUpperCase();
    keyPressed.style.display = 'block';

    setTimeout(() => {
      keyPressed.style.display = 'none';
    }, 1000);
  }

  if(val.key === 'a'){
    aSound.play();
    showPressedKey();
  } else if(val.key === 's'){
    sSound.play();
    showPressedKey();
  } else if(val.key === 'd'){
    dSound.play();
    showPressedKey();
  } else if(val.key === 'f'){
    fSound.play();
    showPressedKey();
  } else if(val.key === 'g'){
    gSound.play();
    showPressedKey();
  } else if(val.key === 'h'){
    hSound.play();
    showPressedKey();
  } else if(val.key === 'j'){
    jSound.play();
    showPressedKey();
  } else if(val.key === 'k'){
    kSound.play();
    showPressedKey();
  } else if(val.key === 'l'){
    lSound.play();
    showPressedKey();
  } else if(val.key === ';'){
    llSound.play();
    showPressedKey();
  } else if(val.key === 'w'){
    wSound.play();
    showPressedKey();
  } else if(val.key === 'e'){
    eSound.play();
    showPressedKey();
  } else if(val.key === 't'){
    tSound.play();
    showPressedKey();
  } else if(val.key === 'y'){
    ySound.play();
    showPressedKey();
  } else if(val.key === 'u'){
    uSound.play();
    showPressedKey();
  } else if(val.key === 'i'){
    oSound.play();
    showPressedKey();
  } else if(val.key === 'o'){
    pSound.play();
    showPressedKey();
  }
});