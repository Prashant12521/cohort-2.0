const wallpaper = document.querySelector(".wrapper");
const rtClick = document.querySelector("#js-rtClick");
let rtClickDisplay = 1;

wallpaper.addEventListener("click", function (val) {
  if (rtClickDisplay === 1) {
    rtClickDisplay++;
    rtClick.style.display = "block";
    rtClick.style.top = val.clientY + "px";
    rtClick.style.left = val.clientX + "px";
  } else {
    rtClickDisplay--;
    rtClick.style.display = "none";
  }
});

const close = document.querySelector("#close");
const browser = document.querySelector("#js-chrome");

const appMenu = document.querySelector("#app-menu");

close.addEventListener("click", function () {
  browser.style.display = "none";
  appMenu.innerHTML = "Finder";
});

const browserDock = document.querySelector("#chrome-dock");

browserDock.addEventListener("click", function (e) {
  e.stopPropagation();
  browser.style.display = "block";
  appMenu.innerHTML = "Chrome";
});
