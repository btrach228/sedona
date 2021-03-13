// let person = {
//   lname: "trach",
//   knowladges: function (what, name) {
//     console.log(`You -  ${name} ${this.lname}, know ${what}`);
//   },
// };

// person.knowladges("a lot about JS", "Bogdan");

// style-guide

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

// pop-up open

let button = document.querySelector(".book-button");
let popUp = document.querySelector(".pop-up");

button.addEventListener("click", () => {
  popUp.classList.toggle("pop-up__active");
});

// click close pop-up

let buttonClose = document.querySelector(".close-pop__up");

buttonClose.addEventListener("click", () => {
  popUp.classList.remove("pop-up__active");
});
