
const menuButton = document.getElementById("menu-button");
const navLinks = document.getElementById("nav-links");

menuButton.addEventListener("click", () => {
    navLinks.classList.toggle("open");

    const isOpen = navLinks.classList.contains("open");
    menuButton.setAttribute("aria-expanded", isOpen);
    menuButton.innerHTML = isOpen ? "✕" : "☰";
});

navLinks.querySelectorAll("a").forEach(link => {
    link.addEventListener("click", () => {
        if (navLinks.classList.contains("open")) {
            navLinks.classList.remove("open");
            menuButton.innerHTML = "☰";
            menuButton.setAttribute("aria-expanded", false);
        }
    });
});

const contactForm = document.getElementById("contact-form-id");
const messageDiv = document.getElementById("form-message");

contactForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const nameValue = document.getElementById("name").value.trim();
    const emailValue = document.getElementById("email").value.trim();

    if (nameValue === "" || emailValue === "") {
        messageDiv.textContent = "Please fill in all fields.";
        messageDiv.style.color = "red";
        return;
    }

    messageDiv.textContent = "Thank you! Your message has been sent.";
    messageDiv.style.color = "lightgreen";

    contactForm.reset();
});

window.addEventListener("scroll", () => {
    const sections = document.querySelectorAll("section");
    const scrollPos = window.scrollY + 150;

    sections.forEach(section => {
        if (scrollPos > section.offsetTop && scrollPos < section.offsetTop + section.offsetHeight) {
            const id = section.getAttribute("id");
            document.querySelectorAll(".nav-links a").forEach(link => {
                link.classList.remove("active");
                if (link.getAttribute("href") === `#${id}`) {
                    link.classList.add("active");
                }
            });
        }
    });
});
