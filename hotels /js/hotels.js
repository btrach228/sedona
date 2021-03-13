// imported from main.js

let nav_item__0 = document.querySelectorAll(".nav-item");
let nav_item__1 = document.querySelectorAll(".button-pop__ap");
let nav_item__2 = document.querySelectorAll(".social_item");
let nav_item__3 = document.querySelectorAll(".book-button");

let arr = [nav_item__0, nav_item__1, nav_item__2, nav_item__3];

arr.map((item) => {
  item.forEach((el) => {
    el.addEventListener("mousedown", () => {
      el.classList.add("text_hover");
    });
    el.addEventListener("mouseup", () => {
      el.classList.remove("text_hover");
    });
    el.addEventListener("mouseout", () => {
      el.classList.remove("text_hover");
    });
  });
});

//  arrows color
