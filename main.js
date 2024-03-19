const navBar = document.querySelector(".fa-bars");
const hideMenu = document.querySelector(".menu");

navBar.addEventListener("click", () => {
  hideMenu.classList.toggle("show-menu");
});
