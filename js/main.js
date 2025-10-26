var navbar = document.getElementById("navbar");
window.addEventListener("scroll", function() {
  if (window.scrollY > 64) {
    navbar.classList.remove("bg-accent");
    navbar.classList.add("glassy-bg");
  } else {
    navbar.classList.remove("glassy-bg");
    navbar.classList.add("bg-accent");
  }
});
document.getElementById("current-year").textContent = new Date().getFullYear();
