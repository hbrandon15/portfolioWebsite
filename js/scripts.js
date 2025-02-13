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

document.addEventListener("DOMContentLoaded", function () {
  const mainContent = document.getElementById("main-content");

  // Add a small delay before adding the fade-in class
  setTimeout(() => {
    mainContent.classList.add("fade-in");
  }, 50);

  const links = document.querySelectorAll("a");

  links.forEach((link) => {
    link.addEventListener("click", function (event) {
      event.preventDefault();
      const href = this.getAttribute("href");

      mainContent.classList.remove("fade-in");
      mainContent.classList.add("fade-out");

      setTimeout(() => {
        window.location.href = href;
      }, 500);
    });
  });
});
