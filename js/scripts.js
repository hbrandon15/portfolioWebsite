// JavaScript to toggle the navigation menu on small screens
document.addEventListener("DOMContentLoaded", function () {
  const navbarToggler = document.querySelector(".navbar-toggler");
  const navbarLinks = document.querySelector(".navbar-links");

  navbarToggler.addEventListener("click", function () {
    navbarLinks.classList.toggle("active");
  });

  // Close the menu when clicking outside
  document.addEventListener("click", function (event) {
    if (
      !navbarToggler.contains(event.target) &&
      !navbarLinks.contains(event.target)
    ) {
      navbarLinks.classList.remove("active");
    }
  });

  // Close the menu when scrolling
  window.addEventListener("scroll", function () {
    navbarLinks.classList.remove("active");
  });

  // JavaScript to disable right-click on images
  document.addEventListener("contextmenu", function (e) {
    if (e.target.tagName === "IMG") {
      e.preventDefault();
    }
  });

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

document.addEventListener("DOMContentLoaded", function() {
	// Fade in the header first
	// const header = document.getElementById("header");
	// header.classList.add("fade-in");
  
	// Fade in the rest of the content after a delay
	setTimeout(() => {
	  const elementsToFadeIn = document.querySelectorAll(".navbar, #description, #about-me, .footer");
	  elementsToFadeIn.forEach(element => {
		element.classList.add("fade-in");
	  });
	}, 2000); // Adjust the delay as needed
  });
