document.addEventListener("DOMContentLoaded", function () {
    // Smooth Scrolling
    document.querySelectorAll('nav ul li a').forEach(anchor => {
        anchor.addEventListener("click", function (event) {
            event.preventDefault();
            const targetId = this.getAttribute("href").substring(1);
            document.getElementById(targetId).scrollIntoView({ behavior: "smooth" });
        });
    });

    // Sticky Navbar Effect
    window.addEventListener("scroll", function () {
        const navbar = document.querySelector("nav");
        if (window.scrollY > 50) {
            navbar.style.background = "black";
        } else {
            navbar.style.background = "rgba(0, 0, 0, 0.7)";
        }
    });
});