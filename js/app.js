const container = document.querySelector(".container");
const menuBtn = document.querySelector(".menu-btn");
const openMenu = document.querySelector(".menu");
const clickLink = document.querySelectorAll(".link");

let menuOpen = false;

menuBtn.addEventListener("click", () => {
  if (!menuOpen) {
    menuBtn.classList.add("open");
    menuOpen = true;
  } else {
    menuBtn.classList.remove("open");
    menuOpen = false;
  }

  openMenu.classList.toggle("toggle");
});

clickLink.forEach((link) =>
  link.addEventListener("click", () => {
    menuBtn.classList.remove("open");
    menuOpen = false;

    openMenu.classList.toggle("toggle");
  })
);
