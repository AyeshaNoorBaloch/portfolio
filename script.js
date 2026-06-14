/* =========================
   MOBILE MENU TOGGLE
========================= */

const menuToggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");

if (menuToggle) {
    menuToggle.addEventListener("click", () => {
        navLinks.classList.toggle("active");

        const icon = menuToggle.querySelector("i");

        if (navLinks.classList.contains("active")) {
            icon.classList.remove("fa-bars");
            icon.classList.add("fa-times");
        } else {
            icon.classList.remove("fa-times");
            icon.classList.add("fa-bars");
        }
    });
}

/* =========================
   CLOSE MENU ON LINK CLICK
========================= */

document.querySelectorAll(".nav-links a").forEach(link => {
    link.addEventListener("click", () => {
        navLinks.classList.remove("active");

        const icon = menuToggle?.querySelector("i");

        if (icon) {
            icon.classList.remove("fa-times");
            icon.classList.add("fa-bars");
        }
    });
});

/* =========================
   SMOOTH SCROLL
========================= */

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function (e) {
        e.preventDefault();

        const target = document.querySelector(
            this.getAttribute("href")
        );

        if (target) {
            target.scrollIntoView({
                behavior: "smooth",
                block: "start"
            });
        }
    });
});

/* =========================
   ACTIVE NAVIGATION LINK
========================= */

const sections = document.querySelectorAll("section");
const navItems = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", () => {
    let current = "";

    sections.forEach(section => {
        const sectionTop = section.offsetTop - 120;
        const sectionHeight = section.clientHeight;

        if (pageYOffset >= sectionTop) {
            current = section.getAttribute("id");
        }
    });

    navItems.forEach(link => {
        link.classList.remove("active");

        if (
            link.getAttribute("href") === `#${current}`
        ) {
            link.classList.add("active");
        }
    });
});

/* =========================
   SCROLL TO TOP BUTTON
========================= */

const scrollBtn = document.getElementById("scrollTop");

window.addEventListener("scroll", () => {
    if (window.scrollY > 400) {
        scrollBtn.style.display = "flex";
    } else {
        scrollBtn.style.display = "none";
    }
});

if (scrollBtn) {
    scrollBtn.addEventListener("click", () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    });
}

/* =========================
   SCROLL ANIMATIONS
========================= */

const fadeElements =
    document.querySelectorAll(".fade-up");

const observer = new IntersectionObserver(
    entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("show");
            }
        });
    },
    {
        threshold: 0.15
    }
);

fadeElements.forEach(element => {
    observer.observe(element);
});

/* =========================
   CONTACT FORM
========================= */

const contactForm =
    document.getElementById("contactForm");

if (contactForm) {
    contactForm.addEventListener(
        "submit",
        function (e) {
            e.preventDefault();

            alert(
                "Thank you! Your message has been received."
            );

            contactForm.reset();
        }
    );
}

/* =========================
   CURRENT YEAR IN FOOTER
========================= */

const yearElement =
    document.getElementById("currentYear");

if (yearElement) {
    yearElement.textContent =
        new Date().getFullYear();
}

/* =========================
   NAVBAR SHADOW ON SCROLL
========================= */

const navbar =
    document.querySelector(".navbar");

window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
        navbar.style.boxShadow =
            "0 4px 20px rgba(0,0,0,0.1)";
    } else {
        navbar.style.boxShadow = "none";
    }
});

/* =========================
   TYPING EFFECT
========================= */

const typingElement =
    document.querySelector(".typing-text");

if (typingElement) {

    const roles = [
        "HR Professional",
        "People Operations Specialist",
        "Talent Acquisition Expert",
        "HR Dashboard Developer"
    ];

    let roleIndex = 0;
    let charIndex = 0;
    let deleting = false;

    function typeEffect() {

        const currentRole =
            roles[roleIndex];

        if (!deleting) {
            typingElement.textContent =
                currentRole.substring(
                    0,
                    charIndex + 1
                );

            charIndex++;

            if (
                charIndex === currentRole.length
            ) {
                deleting = true;

                setTimeout(
                    typeEffect,
                    1500
                );

                return;
            }
        } else {
            typingElement.textContent =
                currentRole.substring(
                    0,
                    charIndex - 1
                );

            charIndex--;

            if (charIndex === 0) {
                deleting = false;
                roleIndex =
                    (roleIndex + 1) %
                    roles.length;
            }
        }

        setTimeout(
            typeEffect,
            deleting ? 60 : 120
        );
    }

    typeEffect();
}

/* =========================
   SKILL BAR ANIMATION
========================= */

const skillBars =
    document.querySelectorAll(".progress");

const skillObserver =
    new IntersectionObserver(
        entries => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {

                    const progress =
                        entry.target.dataset.progress;

                    entry.target.style.width =
                        progress + "%";
                }
            });
        },
        { threshold: 0.3 }
    );

skillBars.forEach(bar => {
    skillObserver.observe(bar);
});
