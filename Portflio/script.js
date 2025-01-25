// Highlight active section
document.addEventListener("DOMContentLoaded", function() {
    const sections = document.querySelectorAll("section");
    const navLinks = document.querySelectorAll("nav ul li a");

    function activateSection() {
        let scrollPosition = document.documentElement.scrollTop || document.body.scrollTop;

        sections.forEach(section => {
            if (scrollPosition >= section.offsetTop - 50 && scrollPosition < section.offsetTop + section.offsetHeight) {
                navLinks.forEach(link => {
                    link.classList.remove("active");
                    if (link.getAttribute("href").substring(1) === section.getAttribute("id")) {
                        link.classList.add("active");
                    }
                });
                sections.forEach(sec => sec.classList.remove("active"));
                section.classList.add("active");
            }
        });
    }

    window.addEventListener("scroll", activateSection);
    activateSection(); // Initial call to highlight the section in view

    const toggleButton = document.createElement("button");
    toggleButton.classList.add("toggle-button");
    toggleButton.textContent = "Toggle Light/Dark Mode";
    document.body.appendChild(toggleButton);

    toggleButton.addEventListener("click", function() {
        document.body.classList.toggle("light-mode");
        document.querySelectorAll("nav, nav ul li a, .project img, .logo, section.active").forEach(element => {
            element.classList.toggle("light-mode");
        });
        toggleButton.classList.toggle("light-mode");
    });
});
