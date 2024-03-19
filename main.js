const navBar = document.getElementById("hiddenMenu");
const hideMenu = document.getElementById("dropMenu");

navBar.addEventListener("click", () => {
  hideMenu.classList.toggle("hidden");
});
