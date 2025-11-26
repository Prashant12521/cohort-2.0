const reels = [
  {
    username: "Joya Bennett",
    likeCount: 1200,
    isLiked: false,
    commentCount: 240,
    shareCount: 80,
    isFollowed: true,
    caption: "Enjoying the sunset vibes 🌅",
    video: "https://cdn.pixabay.com/video/2025/10/04/307864_large.mp4",
    userprofile: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e"
  },
  {
    username: "Ariana Collins",
    likeCount: 980,
    isLiked: true,
    commentCount: 110,
    shareCount: 30,
    isFollowed: false,
    caption: "Dance mode activated 💃🔥",
    video: "https://cdn.pixabay.com/video/2022/07/10/123664-728698002_large.mp4",
    userprofile: "https://images.unsplash.com/photo-1502685104226-ee32379fefbe"
  },
  {
    username: "Liam Turner",
    likeCount: 1540,
    isLiked: false,
    commentCount: 300,
    shareCount: 120,
    isFollowed: true,
    caption: "Road trip diaries 🚗✨",
    video: "https://cdn.pixabay.com/video/2023/10/07/183967-872226594_large.mp4",
    userprofile: "https://images.unsplash.com/photo-1494790108377-be9c29b29330"
  },
  {
    username: "Sophie Carter",
    likeCount: 2100,
    isLiked: true,
    commentCount: 410,
    shareCount: 160,
    isFollowed: true,
    caption: "Morning workout grind 💪🔥",
    video: "https://cdn.pixabay.com/video/2022/10/05/133644-757816799_large.mp4",
    userprofile: "https://images.unsplash.com/photo-1544005313-94ddf0286df2"
  },
  {
    username: "Liam Turner",
    likeCount: 1540,
    isLiked: false,
    commentCount: 300,
    shareCount: 120,
    isFollowed: true,
    caption: "Road trip diaries 🚗✨",
    video: "https://cdn.pixabay.com/video/2023/10/07/183967-872226594_large.mp4",
    userprofile: "https://images.unsplash.com/photo-1494790108377-be9c29b29330"
  },
  {
    username: "Ariana Collins",
    likeCount: 980,
    isLiked: true,
    commentCount: 110,
    shareCount: 30,
    isFollowed: false,
    caption: "Dance mode activated 💃🔥",
    video: "https://cdn.pixabay.com/video/2022/07/10/123664-728698002_large.mp4",
    userprofile: "https://images.unsplash.com/photo-1502685104226-ee32379fefbe"
  },
  {
    username: "Joya Bennett",
    likeCount: 1200,
    isLiked: false,
    commentCount: 240,
    shareCount: 80,
    isFollowed: true,
    caption: "Enjoying the sunset vibes 🌅",
    video: "https://cdn.pixabay.com/video/2025/10/04/307864_large.mp4",
    userprofile: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e"
  },
];

var sum = '';
reels.forEach(function (elem) {
  sum += `
    <div class="reel">
      <video autoplay loop muted src="${elem.video}"></video>

      <div class="bottom">
        <div class="user">
          <img src="${elem.userprofile}" alt="">
          <h4>${elem.username}</h4>
          <button>${elem.isFollowed ? 'Unfollow' : 'Follow'}</button>
        </div>
        <h3>${elem.caption}</h3>
      </div>

      <div class="right">
        <div class="like">
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

document.querySelector('.all-reels').innerHTML = sum;