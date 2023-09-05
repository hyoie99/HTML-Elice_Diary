const nav = document.querySelector(".category").querySelectorAll("a");

const post = document.querySelectorAll(".post");
const popup = document.querySelector(".popup");
const btn = document.querySelector(".btn");

const open = () => {
  popup.classList.remove("hidden");
};

const close = () => {
  popup.classList.add("hidden");
};

nav.forEach((n) => {
  n.addEventListener("mouseover", function (e) {
    e.target.style.color = "#7913f0";
  });
  n.addEventListener("mouseleave", function (e) {
    e.target.style.color = "#ffffff";
  });
});

post[0].addEventListener("click", open);
btn.addEventListener("click", close);
