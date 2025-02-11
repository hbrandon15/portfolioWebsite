// JavaScript to toggle the navigation menu on small screens
document
  .querySelector(".navbar-toggler")
  .addEventListener("click", function () {
    document.querySelector(".navbar-links").classList.toggle("active");
  });

// JavaScript to disable right-click on images
document.addEventListener("contextmenu", function (e) {
  if (e.target.tagName === "IMG") {
    e.preventDefault();
  }
});