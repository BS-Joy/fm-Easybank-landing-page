const hamburgerButton = document.getElementById("hamburger");
const navCloseButton = document.getElementById("close__nav");
const mobileNavLinks = document.getElementById("mob_nav_links");
const heroImage = document.getElementById("hero-image");

navCloseButton.classList.add("hide-close-button");

hamburgerButton.addEventListener("click", () => {
  // Show the mobile nav and close button, hide the hamburger button
  mobileNavLinks.classList.add("mobile-nav-active");
  navCloseButton.classList.remove("hide-close-button");
  navCloseButton.classList.add("show-close");
  hamburgerButton.classList.add("hide-hamburger");
  heroImage.style.opacity = "0";
});

navCloseButton.addEventListener("click", () => {
  // Hide the mobile nav and close button, show the hamburger button
  mobileNavLinks.classList.remove("mobile-nav-active");
  navCloseButton.classList.remove("show-close");
  navCloseButton.classList.add("hide-close-button");
  hamburgerButton.classList.remove("hide-hamburger");
  heroImage.style.opacity = "1";
});
