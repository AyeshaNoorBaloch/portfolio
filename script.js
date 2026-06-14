// ======================================================
// AYESHA NOOR BALOCH
// HR ANALYTICS PORTFOLIO
// ======================================================

document.addEventListener("DOMContentLoaded", () => {

    // ======================================================
    // TYPING EFFECT
    // ======================================================

    const typingElement =
    document.getElementById("typing-text");

    if (typingElement) {

        const roles = [
            "HR Analyst",
            "People Analytics Specialist",
            "Power BI Developer",
            "Workforce Analytics Professional"
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
                        2000
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

                    roleIndex++;

                    if (
                        roleIndex >= roles.length
                    ) {
                        roleIndex = 0;
                    }
                }
            }

            setTimeout(
                typeEffect,
                deleting ? 50 : 100
            );
        }

        typeEffect();
    }

    // ======================================================
    // KPI COUNTERS
    // ======================================================

    const counters =
    document.querySelectorAll(".counter");

    const counterObserver =
    new IntersectionObserver(

        entries => {

            entries.forEach(entry => {

                if (
                    entry.isIntersecting
                ) {

                    const counter =
                    entry.target;

                    const target =
                    +counter.dataset.target;

                    let current = 0;

                    const increment =
                    target / 100;

                    const timer =
                    setInterval(() => {

                        current += increment;

                        if (
                            current >= target
                        ) {

                            current =
                            target;

                            clearInterval(
                                timer
                            );
                        }

                        const suffix =
                        counter.dataset.suffix
                        || "";

                        counter.innerText =
                        Math.floor(
                            current
                        ) + suffix;

                    }, 20);

                    counterObserver
                    .unobserve(counter);

                }

            });

        },

        {
            threshold: 0.5
        }

    );

    counters.forEach(counter => {

        counterObserver.observe(
            counter
        );

    });

    // ======================================================
    // SCROLL REVEAL
    // ======================================================

    const revealItems =
    document.querySelectorAll(

        ".glass-card, .kpi-card, .chart-card, .project-card, .cert-card, .timeline-item"

    );

    const revealObserver =
    new IntersectionObserver(

        entries => {

            entries.forEach(entry => {

                if (
                    entry.isIntersecting
                ) {

                    entry.target.classList
                    .add("show");

                }

            });

        },

        {
            threshold: 0.15
        }

    );

    revealItems.forEach(item => {

        revealObserver.observe(item);

    });

    // ======================================================
    // ACTIVE NAVIGATION
    // ======================================================

    const sections =
    document.querySelectorAll("section");

    const navLinks =
    document.querySelectorAll(
        ".nav-links a"
    );

    window.addEventListener(

        "scroll",

        () => {

            let current = "";

            sections.forEach(section => {

                const sectionTop =
                section.offsetTop - 200;

                if (
                    window.scrollY >=
                    sectionTop
                ) {

                    current =
                    section.id;

                }

            });

            navLinks.forEach(link => {

                link.classList
                .remove("active");

                if (

                    link.getAttribute(
                        "href"
                    ) === "#" + current

                ) {

                    link.classList
                    .add("active");

                }

            });

        }

    );

    // ======================================================
    // SMOOTH SCROLL
    // ======================================================

    document
    .querySelectorAll(
        'a[href^="#"]'
    )
    .forEach(link => {

        link.addEventListener(
            "click",

            function(e){

                e.preventDefault();

                const target =
                document.querySelector(
                    this.getAttribute(
                        "href"
                    )
                );

                if(target){

                    target.scrollIntoView({

                        behavior:"smooth"

                    });

                }

            }

        );

    });

    // ======================================================
    // BACK TO TOP BUTTON
    // ======================================================

    const topButton =
    document.getElementById(
        "backToTop"
    );

    if(topButton){

        window.addEventListener(

            "scroll",

            () => {

                if(
                    window.scrollY > 500
                ){

                    topButton.classList
                    .add("visible");

                }else{

                    topButton.classList
                    .remove("visible");

                }

            }

        );

        topButton.addEventListener(

            "click",

            () => {

                window.scrollTo({

                    top:0,

                    behavior:"smooth"

                });

            }

        );

    }

    // ======================================================
    // PROJECT LIGHTBOX
    // ======================================================

    const projectImages =
    document.querySelectorAll(
        ".project-image"
    );

    const lightbox =
    document.getElementById(
        "lightbox"
    );

    const lightboxImage =
    document.getElementById(
        "lightbox-image"
    );

    if(
        lightbox &&
        lightboxImage
    ){

        projectImages.forEach(image => {

            image.addEventListener(

                "click",

                () => {

                    lightbox.style.display =
                    "flex";

                    lightboxImage.src =
                    image.src;

                }

            );

        });

        lightbox.addEventListener(

            "click",

            () => {

                lightbox.style.display =
                "none";

            }

        );

    }

    // ======================================================
    // FOOTER YEAR
    // ======================================================

    const year =
    document.getElementById(
        "currentYear"
    );

    if(year){

        year.textContent =
        new Date()
        .getFullYear();

    }

    // ======================================================
    // CHART.JS
    // ======================================================

    if(typeof Chart !== "undefined"){

        Chart.defaults.color =
        "#CBD5E1";

        // ATTRITION

        const attritionCanvas =
        document.getElementById(
            "attritionChart"
        );

        if(attritionCanvas){

            new Chart(

                attritionCanvas,

                {

                    type:"doughnut",

                    data:{

                        labels:[
                            "Retained",
                            "Attrition"
                        ],

                        datasets:[{

                            data:[
                                84,
                                16
                            ],

                            backgroundColor:[
                                "#3B82F6",
                                "#06B6D4"
                            ],

                            borderWidth:0

                        }]

                    },

                    options:{

                        responsive:true,

                        plugins:{

                            legend:{

                                position:"bottom"

                            }

                        }

                    }

                }

            );

        }

        // RECRUITMENT

        const recruitmentCanvas =
        document.getElementById(
            "recruitmentChart"
        );

        if(recruitmentCanvas){

            new Chart(

                recruitmentCanvas,

                {

                    type:"bar",

                    data:{

                        labels:[

                            "Applications",
                            "Screened",
                            "Interviews",
                            "Offers",
                            "Hires"

                        ],

                        datasets:[{

                            label:"Candidates",

                            data:[

                                1200,
                                450,
                                180,
                                75,
                                32

                            ]

                        }]

                    },

                    options:{

                        responsive:true,

                        scales:{

                            y:{

                                beginAtZero:true

                            }

                        }

                    }

                }

            );

        }

    }

    // ======================================================
    // CONSOLE
    // ======================================================

    console.log(
        "Ayesha Noor Baloch | HR Analytics Portfolio Loaded"
    );

});
