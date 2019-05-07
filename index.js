let menu = document.querySelector("#menu");
let overlay = document.querySelector("#overlay");
let bars = document.querySelector("#bars");
let barsContainer = document.querySelector("#bars-container");
let closeBtn = document.querySelector("#close-btn");
let body = document.querySelector("body");
let options = Array.from(document.querySelector(".options").children[0].children)

const opacityTransitionHandler = e => {
  let elementDisplay = getComputedStyle(e).display;
  if (elementDisplay === "none") {
    e.style.display = "block";
    setTimeout(() => {
      e.style.opacity = 1;
    }, 200);
  } else {
    e.style.opacity = 0;
    setTimeout(() => {
      e.style.display = "none";
    }, 200);
  }
};

const topPositionTransitionHandler = e => {
  let elementHeight = getComputedStyle(e).height;
  let elementPosition = parseInt(getComputedStyle(e).marginTop);
  if (elementPosition === 0) {
    e.style.marginTop = `-${elementHeight}`;
  } else {
    e.style.marginTop = 0;
  }
};

const menuHandler = () => {
  let menuPosition = parseInt(getComputedStyle(menu).right);

  let menuWidth = getComputedStyle(menu).width;

  if (menuPosition < 0) {
    menu.style.right = 0;
    opacityTransitionHandler(overlay);
    topPositionTransitionHandler(barsContainer);
  } else {
    menu.style.right = `-${menuWidth}`;
    opacityTransitionHandler(overlay);
    topPositionTransitionHandler(barsContainer);
  }
};

let scrollTopPosition = 0

const onScroll = (e,bars) => {
  let elementHeight = getComputedStyle(e).height;
  if (document.body.scrollTop > scrollTopPosition) {
    e.style.marginTop = `-${elementHeight}`;
    scrollTopPosition = document.body.scrollTop
    e.style.background = "rgba(255,255,255,1)"
    bars.style.color = "#000"
  } else {
    e.style.marginTop = 0;
    scrollTopPosition = document.body.scrollTop
  }
  if(document.body.scrollTop === 0){
    e.style.background = "rgba(255,255,255,0)"
    bars.style.color = "#fff"
  }
};

const srollTo = (e)=>{
 e.scrollIntoView({block: 'start', behavior: 'smooth'});
 menuHandler()
}

for (let index = 0; index < options.length; index++) {
  
  options[index].addEventListener("click", ()=>{
    srollTo(document.querySelector(`#${options[index].id}_id`))
  });
}

body.addEventListener("scroll", () => {
  onScroll(barsContainer, bars);
});

bars.addEventListener("click", menuHandler);
closeBtn.addEventListener("click", menuHandler);
overlay.addEventListener("click", menuHandler);
