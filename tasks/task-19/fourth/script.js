const boxes = document.querySelectorAll(".box");

boxes.forEach((val) => {
  const img = val.querySelector("img");

  val.addEventListener("mouseenter", () => {
    img.style.opacity = "1";
  });

  val.addEventListener("mousemove", (e) => {
    const rect = val.getBoundingClientRect();

    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    img.style.top = y + "px";
    img.style.left = x + "px";
  });

  val.addEventListener("mouseleave", () => {
    img.style.opacity = "0";
  });
});

// <--------- children and querySelector is better and safer then childNodes -------->

// box.forEach(function(val){
//   val.addEventListener('mouseenter', (detail)=>{
//     val.childNodes[3].style.opacity = 1;
//   })
  
//   val.addEventListener('mousemove', (detail)=>{
//     val.childNodes[3].style.top = detail.y + 'px';
//     val.childNodes[3].style.left = detail.x + 'px';
//   })

//   val.addEventListener('mouseleave', ()=>{
//     val.childNodes[3].style.opacity = 0;
//   })
// });