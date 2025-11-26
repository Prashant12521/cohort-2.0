// const arr = [192,34,323,43,45,93,82,39,44];

// arr.forEach(function(elem, indx){
//   console.log(elem, indx)
// })

const reels = [
  {
    isMuted: true,
    username: "Joya Bennett",
    likeCount: 1200,
    isLiked: false,
    commentCount: 240,
    shareCount: 80,
    isFollowed: true,
    caption: "Enjoying the sunset vibes 🌅",
    video: "videos/video1.mp4",
    userprofile: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e"
  },
  {
    isMuted: true,
    username: "Ariana Collins",
    likeCount: 980,
    isLiked: true,
    commentCount: 110,
    shareCount: 30,
    isFollowed: false,
    caption: "Dance mode activated 💃🔥",
    video: "videos/video2.mp4",
    userprofile: "https://images.unsplash.com/photo-1502685104226-ee32379fefbe"
  },
  {
    isMuted: true,
    username: "Liam Turner",
    likeCount: 1540,
    isLiked: false,
    commentCount: 300,
    shareCount: 120,
    isFollowed: true,
    caption: "Road trip diaries 🚗✨",
    video: "videos/video3.mp4",
    userprofile: "https://images.unsplash.com/photo-1494790108377-be9c29b29330"
  },
  {
    isMuted: true,
    username: "Sophie Carter",
    likeCount: 2100,
    isLiked: true,
    commentCount: 410,
    shareCount: 160,
    isFollowed: true,
    caption: "Morning workout grind 💪🔥",
    video: "videos/video4.mp4",
    userprofile: "https://images.unsplash.com/photo-1544005313-94ddf0286df2"
  },
  {
    isMuted: true,
    username: "Liam Turner",
    likeCount: 1540,
    isLiked: false,
    commentCount: 300,
    shareCount: 120,
    isFollowed: true,
    caption: "Road trip diaries 🚗✨",
    video: "videos/video5.mp4",
    userprofile: "https://images.unsplash.com/photo-1494790108377-be9c29b29330"
  },
  {
    isMuted: true,
    username: "Ariana Collins",
    likeCount: 980,
    isLiked: true,
    commentCount: 110,
    shareCount: 30,
    isFollowed: false,
    caption: "Dance mode activated 💃🔥",
    video: "videos/video3.mp4",
    userprofile: "https://images.unsplash.com/photo-1502685104226-ee32379fefbe"
  },
  {
    isMuted: true,
    username: "Joya Bennett",
    likeCount: 1200,
    isLiked: false,
    commentCount: 240,
    shareCount: 80,
    isFollowed: true,
    caption: "Enjoying the sunset vibes 🌅",
    video: "videos/video5.mp4",
    userprofile: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e"
  },
];

const allReels = document.querySelector('.all-reels');

function addData(){
  var sum = '';
reels.forEach(function (elem, idx) {
  sum += `
    <div class="reel">
      <video autoplay loop ${elem.isMuted ? 'muted' : ''} src="${elem.video}"></video>
      <div id="${idx}" class="mute">
        ${elem.isMuted ? '<i class="ri-volume-mute-fill"></i>' : '<i class="ri-volume-up-fill"></i>'}
        
      </div>

      <div class="bottom">
        <div class="user">
          <img src="${elem.userprofile}" alt="">
          <h4>${elem.username}</h4>
          <button id='${idx}' class='follow'>${elem.isFollowed ? 'Unfollow' : 'Follow'}</button>
        </div>
        <h3>${elem.caption}</h3>
      </div>

      <div class="right">
        <div id="${idx}" class="like">
          <h4 class="like-icon icon">
            ${elem.isLiked ? '<i class="love ri-heart-3-fill"></i>' : '<i class="ri-heart-3-line"></i>'}
          </h4>
          <h6>${elem.likeCount}</h6>
        </div>

        <div class="comment">
          <h4><i class="ri-chat-3-line"></i></h4>
          <h6>${elem.commentCount}</h6>
        </div>

        <div class="share">
          <h4><i class="ri-share-forward-line"></i></h4>
          <h6>${elem.shareCount}</h6>
        </div>

        <div class="menu">
          <h4><i class="ri-more-2-fill"></i></h4>
        </div>
      </div>
    </div>
  `;
});

allReels.innerHTML = sum;
}

addData();

allReels.addEventListener('click', function(dets){
  
  

  if(dets.target.className === 'like'){
  
    if(!reels[dets.target.id].isLiked){
      reels[dets.target.id].likeCount++;
      reels[dets.target.id].isLiked = true;
    } else{
      reels[dets.target.id].likeCount--;
      reels[dets.target.id].isLiked = false;
    }

    addData();

  }
  
  if(dets.target.className === 'follow'){
    
    if(!reels[dets.target.id].isFollowed){
      reels[dets.target.id].isFollowed = true;
    } else{
      reels[dets.target.id].isFollowed = false;
    }

    addData();

  }
  
  if(dets.target.className === 'mute'){

    if(!reels[dets.target.id].isMuted){
      reels[dets.target.id].isMuted = true;
    } else {
      reels[dets.target.id].isMuted = false;
    }
    
    addData();

  }
  
  
})