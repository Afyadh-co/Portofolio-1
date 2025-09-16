// import "./dist/styles.css"

const menuButton = document.getElementById("menu-button");

const navMenu = document.querySelector("ul");

menuButton.addEventListener("click", () => {
  if (menuButton.classList.contains("is-active")) {
    menuButton.classList.remove("is-active");

    navMenu.classList.remove("left-0");
    navMenu.classList.add("-left-full");
  } else {
    menuButton.classList.add("is-active");

    navMenu.classList.add("left-0");
    navMenu.classList.remove("-left-full");
  }
});
