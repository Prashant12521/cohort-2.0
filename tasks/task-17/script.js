const users = [
  {
    username: "Joya Bannett",
    img: "https://images.unsplash.com/photo-1568739253582-afa48fbcea47?q=80&auto=format&fit=crop",
    job: "Frontend Developer specializing in modern UI development.",
    followers: 312,
    posts: 48
  },
  {
    username: "Anna Mendes",
    img: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?q=80&auto=format&fit=crop",
    job: "UI/UX Designer focused on building user-centric interfaces.",
    followers: 389,
    posts: 22
  },
  {
    username: "Ivan Doolay",
    img: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?q=80&auto=format&fit=crop",
    job: "Full Stack Developer experienced in the MERN stack.",
    followers: 612,
    posts: 58
  },
  {
    username: "Wesley Lawson",
    img: "https://plus.unsplash.com/premium_photo-1670282393309-70fd7f8eb1ef?auto=format&fit=crop",
    job: "Graphic Designer crafting clean and modern brand visuals.",
    followers: 488,
    posts: 36
  },
  {
    username: "Angela Yu",
    img: "https://images.unsplash.com/photo-1604904612715-47bf9d9bc670?auto=format&fit=crop",
    job: "JavaScript Developer building fast and interactive web apps.",
    followers: 271,
    posts: 19
  },
  {
    username: "Ethan Clark",
    img: "https://plus.unsplash.com/premium_photo-1727942416727-9f16462ef11b?q=80&w=1035&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    job: "Backend Engineer specializing in scalable API systems.",
    followers: 541,
    posts: 62
  },
  {
    username: "Sofia Ward",
    img: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop",
    job: "Product Designer crafting intuitive digital experiences.",
    followers: 312,
    posts: 27
  },
  {
    username: "Mike Adams",
    img: "https://images.unsplash.com/photo-1544725176-7c40e5a71c5e?auto=format&fit=crop",
    job: "Mobile App Developer working with Flutter and Kotlin.",
    followers: 498,
    posts: 44
  },
  {
    username: "Lisa Brooks",
    img: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop",
    job: "Content Strategist and marketer helping brands tell better stories.",
    followers: 367,
    posts: 33
  },
  {
    username: "Aaron Smith",
    img: "https://images.unsplash.com/photo-1510706019500-d23a509eecd4?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    job: "DevOps Engineer focusing on automation and cloud deployments.",
    followers: 421,
    posts: 52
  }
];

let sum = "";

users.forEach(function(user){
  sum += `<div class="card">
      <img src="${user.img}" alt="">
      <div class="details">
        <h3>${user.username}<i class="bi bi-patch-check-fill"></i></h3>
        <p>${user.job}</p>
        <div class="social">
          <h4><i class="bi bi-person"></i>${user.followers}</h4>
          <h4><i class="bi bi-check-square"></i>${user.posts}</h4>
          <button>Follow +</button>
        </div>
      </div>
    </div>`
})

document.querySelector('main').innerHTML = sum;