// ==========================
// KPI COUNTERS
// ==========================

function animateCounter(id, target, suffix = "") {

    const element = document.getElementById(id);

    if (!element) return;

    let current = 0;

    const increment = target / 80;

    const timer = setInterval(() => {

        current += increment;

        if (current >= target) {

            current = target;
            clearInterval(timer);

        }

        element.innerText =
            Math.floor(current) + suffix;

    }, 20);

}

window.addEventListener("load", () => {

    animateCounter("employeeCounter", 1470);
    animateCounter("attritionCounter", 16, "%");
    animateCounter("retentionCounter", 84, "%");
    animateCounter("engagementCounter", 78, "%");

});


// ==========================
// SCROLL REVEAL
// ==========================

const revealElements = document.querySelectorAll(
    ".kpi-card,.chart-card,.project-card,.cert-card,.timeline-item,.glass-card"
);

function revealOnScroll() {

    revealElements.forEach((element) => {

        const top =
            element.getBoundingClientRect().top;

        if (top < window.innerHeight - 100) {

            element.classList.add("active");
            element.classList.add("reveal");

        }

    });

}

window.addEventListener("scroll", revealOnScroll);

revealOnScroll();


// ==========================
// CHART DEFAULTS
// ==========================

if (typeof Chart !== "undefined") {

    Chart.defaults.color = "#CBD5E1";

}


// ==========================
// EMPLOYEE ATTRITION CHART
// ==========================

const attritionCanvas =
    document.getElementById("attritionChart");

if (attritionCanvas && typeof Chart !== "undefined") {

    new Chart(attritionCanvas, {

        type: "doughnut",

        data: {

            labels: [
                "Retained",
                "Attrition"
            ],

            datasets: [{

                data: [
                    84,
                    16
                ],

                backgroundColor: [
                    "#10B981",
                    "#EF4444"
                ]

            }]

        },

        options: {

            responsive: true,

            plugins: {

                legend: {

                    position: "bottom"

                }

            }

        }

    });

}


// ==========================
// RECRUITMENT FUNNEL
// ==========================

const recruitmentCanvas =
    document.getElementById("recruitmentChart");

if (recruitmentCanvas && typeof Chart !== "undefined") {

    new Chart(recruitmentCanvas, {

        type: "bar",

        data: {

            labels: [
                "Applications",
                "Screened",
                "Interviews",
                "Offers",
                "Hires"
            ],

            datasets: [{

                label: "Candidates",

                data: [
                    1200,
                    450,
                    180,
                    75,
                    32
                ]

            }]

        },

        options: {

            responsive: true,

            scales: {

                y: {

                    beginAtZero: true

                }

            }

        }

    });

}


// ==========================
// NAVIGATION ACTIVE
// ==========================

const navLinks =
    document.querySelectorAll(".nav-links a");

navLinks.forEach(link => {

    link.addEventListener("click", function () {

        navLinks.forEach(
            item => item.classList.remove("active")
        );

        this.classList.add("active");

    });

});


// ==========================
// SMOOTH SCROLL
// ==========================

document.querySelectorAll('a[href^="#"]').forEach(anchor => {

    anchor.addEventListener("click", function (e) {

        e.preventDefault();

        const target =
            document.querySelector(
                this.getAttribute("href")
            );

        if (target) {

            target.scrollIntoView({

                behavior: "smooth"

            });

        }

    });

});


// ==========================
// PROJECT IMAGE OPEN
// ==========================

document.querySelectorAll(".project-card img")
    .forEach(image => {

        image.addEventListener("click", () => {

            window.open(
                image.src,
                "_blank"
            );

        });

    });


// ==========================
// WHATSAPP CONTACT FORM
// ==========================



// ==========================
// CONSOLE MESSAGE
// ==========================

console.log(
    "Ayesha Noor Baloch | HR Analytics Portfolio"
);
