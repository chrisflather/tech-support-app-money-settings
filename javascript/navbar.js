document.addEventListener("DOMContentLoaded", function() {
  navToggle();
});

// Navbar functionality
function navToggle() {
  let mainNav = document.getElementById("js-menu");
  console.log(mainNav);
  let navBarToggle = document.getElementById("js-navbar-toggle");
  navBarToggle.addEventListener("click", function() {
    console.log(this.classList);
    mainNav.classList.toggle("active");
    this.classList.toggle("change");
  });
}
