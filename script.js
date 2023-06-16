const menuIcon = document.querySelector("#hamburger").closest("#hamburger");
const menuClose = document.querySelector("#menuClose").closest("#menuClose");
const sidebar = document.querySelector(".sidebar");

menuIcon.addEventListener("click", function () {
  sidebar.style.display = "block";
});

sidebar.addEventListener("click", function (e) {

  if (e.target.tagName === "A" || e.target === menuClose) {
    sidebar.style.display = "none";
  } else return;
});
