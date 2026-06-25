/* ==================================================
   MOBILE MENU
================================================== */

const mobileToggle = document.querySelector(".mobile-toggle");
const navMenu = document.querySelector(".nav-menu");

if (mobileToggle && navMenu) {

    mobileToggle.addEventListener("click", () => {

        navMenu.classList.toggle("active");

        const icon = mobileToggle.querySelector("i");

        if (navMenu.classList.contains("active")) {
            icon.classList.remove("fa-bars");
            icon.classList.add("fa-times");
        } else {
            icon.classList.remove("fa-times");
            icon.classList.add("fa-bars");
        }

    });

}

/* ==================================================
   CLOSE MOBILE MENU ON LINK CLICK
================================================== */

document.querySelectorAll(".nav-menu a").forEach(link => {

    link.addEventListener("click", () => {

        navMenu?.classList.remove("active");

        const icon = mobileToggle?.querySelector("i");

        if (icon) {
            icon.classList.remove("fa-times");
            icon.classList.add("fa-bars");
        }

    });

});

/* ==================================================
   DARK MODE TOGGLE
================================================== */

const themeToggle = document.getElementById("themeToggle");

const savedTheme = localStorage.getItem("theme");

if (savedTheme === "light") {
    document.body.classList.add("light");
    if (themeToggle) themeToggle.textContent = "☀️";
}

themeToggle?.addEventListener("click", () => {

    document.body.classList.toggle("light");

    const isLight =
        document.body.classList.contains("light");

    localStorage.setItem(
        "theme",
        isLight ? "light" : "dark"
    );

    themeToggle.textContent =
        isLight ? "☀️" : "🌙";

});

/* ==================================================
   SMOOTH SCROLLING
================================================== */

document
    .querySelectorAll('a[href^="#"]')
    .forEach(anchor => {

        anchor.addEventListener("click", function (e) {

            e.preventDefault();

            const target =
                document.querySelector(
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

/* ==================================================
   TYPING EFFECT
================================================== */

const typingElement =
    document.querySelector(".typing-text");

if (typingElement) {

    const roles = [

        "HR Analytics Professional",

        "Aspiring Data Analyst",

        "Power BI Dashboard Developer",

        "Business Intelligence Enthusiast",

        "Workforce Analytics Learner"

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
            deleting ? 60 : 100
        );

    }

    typeEffect();

}

/* ==================================================
   COUNTER ANIMATION
================================================== */

const counters =
    document.querySelectorAll(".counter");

const counterObserver =
    new IntersectionObserver(
        entries => {

            entries.forEach(entry => {

                if (entry.isIntersecting) {

                    const counter =
                        entry.target;

                    const target =
                        +counter.dataset.target;

                    let current = 0;

                    const increment =
                        target / 80;

                    const updateCounter =
                        () => {

                            if (
                                current < target
                            ) {

                                current += increment;

                                counter.textContent =
                                    Math.ceil(current);

                                requestAnimationFrame(
                                    updateCounter
                                );

                            } else {

                                counter.textContent =
                                    target;

                            }

                        };

                    updateCounter();

                    counterObserver.unobserve(
                        counter
                    );

                }

            });

        },
        {
            threshold: 0.4
        }
    );

counters.forEach(counter => {
    counterObserver.observe(counter);
});

/* ==================================================
   SCROLL REVEAL
================================================== */

const fadeElements =
    document.querySelectorAll(".fade-up");

const revealObserver =
    new IntersectionObserver(
        entries => {

            entries.forEach(entry => {

                if (entry.isIntersecting) {

                    entry.target.classList.add(
                        "show"
                    );

                }

            });

        },
        {
            threshold: 0.15
        }
    );

fadeElements.forEach(element => {
    revealObserver.observe(element);
});

/* ==================================================
   ACTIVE NAVIGATION
================================================== */

const sections =
    document.querySelectorAll("section");

const navLinks =
    document.querySelectorAll(
        ".nav-menu a"
    );

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop =
            section.offsetTop - 150;

        if (
            window.scrollY >= sectionTop
        ) {

            current =
                section.getAttribute("id");

        }

    });

    navLinks.forEach(link => {

        link.classList.remove("active");

        if (
            link.getAttribute("href") ===
            `#${current}`
        ) {

            link.classList.add("active");

        }

    });

});

/* ==================================================
   NAVBAR SHADOW
================================================== */

const header =
    document.querySelector(".header");

window.addEventListener("scroll", () => {

    if (window.scrollY > 50) {

        header.style.boxShadow =
            "0 8px 25px rgba(0,0,0,.25)";

    } else {

        header.style.boxShadow = "none";

    }

});

/* ==================================================
   BACK TO TOP BUTTON
================================================== */

const backToTop =
    document.getElementById("backToTop");

window.addEventListener("scroll", () => {

    if (window.scrollY > 500) {

        backToTop.style.display = "flex";

    } else {

        backToTop.style.display = "none";

    }

});

backToTop?.addEventListener("click", () => {

    window.scrollTo({

        top: 0,
        behavior: "smooth"

    });

});

/* ==================================================
   CURRENT YEAR
================================================== */

const yearElement =
    document.getElementById("currentYear");

if (yearElement) {

    yearElement.textContent =
        `© ${new Date().getFullYear()} Ayesha Noor Baloch. All Rights Reserved.`;

}

/* ==================================================
   PRELOADER FADE (SAFE)
================================================== */

window.addEventListener("load", () => {

    document.body.classList.add("loaded");

});

/* ==================================================
   CONSOLE SIGNATURE
================================================== */

console.log(
    "%cAyesha Noor Baloch Portfolio",
    "color:#8b5cf6;font-size:16px;font-weight:bold;"
);

console.log(
    "HR Analytics • Data Analytics • Business Intelligence"
);
