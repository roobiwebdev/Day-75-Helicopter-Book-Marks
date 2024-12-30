window.onload = () => {
  document.querySelector(".loading-wrapper").classList.add("hidden");
  document.body.classList.remove("overflow-hidden");
};

const menu = document.querySelector("#menu");
const navBar = document.querySelector("#nav-bar");
const navLinks = document.querySelectorAll(".nav-link");

menu.addEventListener("click", () => {
  navBar.classList.toggle("left-[0%]");
  menu.classList.toggle("ri-close-large-line");
});

navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    navBar.classList.toggle("left-[0%]");
    menu.classList.toggle("ri-close-large-line");
  });
});

const chatBtn = document.getElementById("chatBtn");
const chatBot = document.getElementById("chatBot");
const chatBtnTxt = document.querySelector(".chatTxt");

chatBtn.addEventListener("click", () => {
  chatBot.classList.toggle("hidden");

  // const currentState = "closed";

  // if (currentState === "open") {
  //   chatBtnTxt.textContent = "Close chat with support";
  //   chatBtnTxt.dataset.state = "closed";
  // } else {
  //   chatBtnTxt.textContent = "Start chat with support";
  //   chatBtnTxt.dataset.state = "open";
  // }
});

document.addEventListener("DOMContentLoaded", () => {
  chatBtn.classList.add("hidden");
  setTimeout(() => {
    chatBtn.classList.remove("hidden");
  }, 3000);
});
new Swiper(".swiper", {
  loop: true,
  speed: 500,
  autoplay: {
    delay: 5000,
    disableOnIntraction: true,
  },

  allowTouchMove: false,

  grabCursor: true,

  breakpoints: {
    640: {
      slidesPerView: 1,
    },
    760: {
      slidesPerView: 2,
    },
    1024: {
      slidesPerView: 2,
    },
  },
});
if (window.innerWidth >= 760) {
  const sr = ScrollReveal({
    origin: "top",
    distance: "60px",
    duration: 2500,
    delay: 300,
    reset: true,
  });

  sr.reveal(".nav_data");
  sr.reveal(".header_img", { origin: "top", distance: "100px", delay: 600 });
  sr.reveal(".nav_data", { origin: "top", distance: "100px", delay: 2300 });
  sr.reveal(".header_data", { origin: "left", distance: "100px", delay: 2300 });
  sr.reveal(".header_chat");
  sr.reveal(".nav_data2");
  sr.reveal(".left_data", { origin: "left", distance: "400px" });
  sr.reveal(".right_data", { origin: "right", distance: "400px" });
  sr.reveal(".scale_down", { scale: 0.5 });
  sr.reveal(".footer_data", {
    origin: "bottom",
    distance: "400px",
  });
}
