document.addEventListener("DOMContentLoaded", () => {

    const menuToggle = document.querySelector(".menu-toggle");
    const nav = document.querySelector(".nav");

    if (!menuToggle || !nav) return;

    // Add mobile Let's Talk button automatically
    if (!nav.querySelector(".mobile-nav-cta")) {
        const mobileCTA = document.createElement("a");

        mobileCTA.href = "mailto:biokouk@outlook.com";
        mobileCTA.className = "mobile-nav-cta";
        
mobileCTA.textContent = document.documentElement.lang === "el"
    ? "Ας μιλήσουμε"
    : "Let's Talk";

        nav.appendChild(mobileCTA);
    }

    menuToggle.setAttribute("aria-expanded", "false");

    menuToggle.addEventListener("click", () => {
        nav.classList.toggle("nav-open");
        menuToggle.classList.toggle("active");

        const isOpen = nav.classList.contains("nav-open");
        menuToggle.setAttribute("aria-expanded", isOpen);
    });

    nav.querySelectorAll("a").forEach(link => {
        link.addEventListener("click", () => {
            nav.classList.remove("nav-open");
            menuToggle.classList.remove("active");
            menuToggle.setAttribute("aria-expanded", "false");
        });
    });

});