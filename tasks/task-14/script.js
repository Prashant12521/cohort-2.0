const btn = document.querySelector('button');
let teamImg = document.querySelector('#teamImg');
let team = document.querySelector('h1');
let fullForm = document.querySelector('h2');
let captain = document.querySelector('h3');
let trophy = document.querySelector('h4');

let teams = [
  {
    team: 'GT',
    fullForm: 'Gujarat Titans',
    trophy: 1,
    captain: 'Shubman Gill',
    img: 'gt.jpg'
  },
  {
    team: 'Mi',
    fullForm: 'Mumbai Indians',
    trophy: 6,
    captain: 'Hardik Pandya',
    img: 'mi.jpg'
  },
  {
    team: 'PBKS',
    fullForm: 'Punjab Kings',
    trophy: 0,
    captain: 'Shreyas Iyer',
    img: 'pbks.jpg'
  },
  {
    team: 'LSG',
    fullForm: 'Lucknow Super Giants',
    trophy: 0,
    captain: 'Rishabh Pant',
    img: 'lsg.jpg'
  },
  {
    team: 'CSK',
    fullForm: 'Chennai Super Kings',
    trophy: 5,
    captain: 'MS Dhoni',
    img: 'csk.jpg'
  },
  {
    team: 'RCB',
    fullForm: 'Royal Challengers Bangalore',
    trophy: 1,
    captain: 'Rajat Patidar',
    img: 'rcb.jpg'
  },
  {
    team: 'KKR',
    fullForm: 'Kolkata Knignt Riders',
    trophy: 3,
    captain: 'Ajinkya Rahane',
    img: 'kkr.jpg'
  }
]

btn.addEventListener('click', function(){
  const random = teams[Math.floor(Math.random()*teams.length)];

  teamImg.src = `images/${random.img}`;
  team.innerHTML = random.team;
  fullForm.innerHTML = random.fullForm;
  captain.innerHTML = random.captain;
  trophy.innerHTML = `🏆: ${random.trophy};`
})