const header = document.querySelector(".header__site");

document.addEventListener("scroll", (e) => {
  if (window.scrollY > header.clientHeight) {
    header.classList.add("white-header");
  } else {
    header.classList.remove("white-header");
  }
});
