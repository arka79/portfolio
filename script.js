const menuButton = document.querySelector(".menu-button");
const popupMenu = document.querySelector(".popup-menu");
const closeButton = document.querySelector(".close-button");
const listitem = document.querySelector(".listitem");

popupMenu.style.display = "none ";

menuButton.addEventListener("click", () => {
  popupMenu.style.display = "flex";
});

closeButton.addEventListener("click", () => {
  popupMenu.style.display = "none";
});
