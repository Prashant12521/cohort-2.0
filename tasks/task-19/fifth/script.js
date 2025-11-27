let arr = [
  {
    dp: 'https://images.unsplash.com/photo-1763793927948-7faaa6adb479?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    story: 'https://images.unsplash.com/photo-1763854492937-fb7ae2f601f3?q=80&w=1035&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
  },
  {
    dp: 'https://plus.unsplash.com/premium_photo-1669704098876-2a38eb10e56a?q=80&w=988&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    story: 'https://images.unsplash.com/photo-1549570652-97324981a6fd?q=80&w=985&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
  },
  {
    dp: 'https://plus.unsplash.com/premium_photo-1664875849194-0adbac28529f?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    story: 'https://images.unsplash.com/photo-1513379733131-47fc74b45fc7?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
  },
  {
    dp: 'https://images.unsplash.com/photo-1541519481457-763224276691?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    story: 'https://images.unsplash.com/photo-1503342394128-c104d54dba01?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
  },
  {
    dp: 'https://images.unsplash.com/photo-1469334031218-e382a71b716b?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    story: 'https://images.unsplash.com/photo-1509631179647-0177331693ae?q=80&w=988&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
  },
]

const storians = document.querySelector('#storians');

const fullScreen = document.querySelector('#full-screen');

let clutter = '';

arr.forEach(function(elem, idx){
  clutter+= `<div class="story">
      <img id="${idx}" src="${elem.dp}" alt="">
      </div>`;
})

document.querySelector('#storians').innerHTML = clutter;

let storyScreen = 0;

storians.addEventListener('click', function(dtls){
    document.querySelector('#full-screen').style.display  = 'block';
    document.querySelector('#full-screen').style.backgroundImage = `url(${arr[dtls.target.id].story})`;

    storyScreen++;
})

fullScreen.addEventListener('click', function(){
  fullScreen.style.display = 'none';

  storyScreen--;
})
