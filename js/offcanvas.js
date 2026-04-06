const hamburger = document.getElementById("hamburger");
const navLinks = document.getElementById("navLinks");
const links = document.querySelectorAll(".nav-links a");

hamburger.addEventListener("click", function (e) {
    e.stopPropagation();
    navLinks.classList.toggle("active");
});

links.forEach(link => {
    link.addEventListener("click", function () {
        navLinks.classList.remove("active");
    });
});

document.addEventListener("click", function (e) {
    if (!navLinks.contains(e.target) && !hamburger.contains(e.target)) {
        navLinks.classList.remove("active");
    }
});