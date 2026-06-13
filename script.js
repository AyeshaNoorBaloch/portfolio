// ==========================
// TYPEWRITER EFFECT
// ==========================

const roles = [
"Data Analyst",
"HR Analytics Specialist",
"Power BI Developer",
"Business Intelligence Analyst",
"SQL & Python Analyst",
"Data Visualization Expert"
];

let roleIndex = 0;
let charIndex = 0;
let deleting = false;

const typingElement = document.getElementById("typing");

function typeWriter() {

if (!typingElement) return;

const currentRole = roles[roleIndex];

if (!deleting) {

typingElement.textContent =
currentRole.substring(0, charIndex + 1);

charIndex++;

if (charIndex === currentRole.length) {

deleting = true;
setTimeout(typeWriter, 2000);
return;

}

} else {

typingElement.textContent =
currentRole.substring(0, charIndex - 1);

charIndex--;

if (charIndex === 0) {

deleting = false;
roleIndex = (roleIndex + 1) % roles.length;

}

}

setTimeout(typeWriter, deleting ? 50 : 100);

}

typeWriter();


// ==========================
// COUNTER ANIMATION
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

const revealElements =
document.querySelectorAll(
".kpi-card,.chart-card,.project-card,.cert-card,.timeline-item,.glass-card"
);

function revealOnScroll() {

revealElements.forEach((element) => {

const windowHeight =
window.innerHeight;

const top =
element.getBoundingClientRect().top;

if (top < windowHeight - 100) {

element.classList.add("active");
element.classList.add("reveal");

}

});

}

window.addEventListener(
"scroll",
revealOnScroll
);

revealOnScroll();


// ==========================
// CHART.JS DEFAULTS
// ==========================

if(typeof Chart !== "undefined"){

Chart.defaults.color = "#CBD5E1";

Chart.defaults.borderColor =
"rgba(255,255,255,.08)";

}


// ==========================
// ATTRITION CHART
// ==========================

const attritionCtx =
document.getElementById("attritionChart");

if(attritionCtx){

new Chart(attritionCtx, {

type: "bar",

data: {

labels: [
"Sales",
"HR",
"Finance",
"IT",
"Operations"
],

datasets: [{

label: "Attrition %",

data: [
22,
14,
10,
9,
12
],

backgroundColor: [

"#3B82F6",
"#06B6D4",
"#8B5CF6",
"#10B981",
"#F59E0B"

],

borderRadius: 10

}]

},

options: {

responsive: true,

plugins: {

legend: {

labels: {

color: "#fff"

}

}

}

}

});

}


// ==========================
// RECRUITMENT FUNNEL
// ==========================

const recruitmentCtx =
document.getElementById("recruitmentChart");

if(recruitmentCtx){

new Chart(recruitmentCtx, {

type: "line",

data: {

labels: [
"Applications",
"Screening",
"Interview",
"Offer",
"Hired"
],

datasets: [{

label: "Candidates",

data: [
2500,
1200,
500,
180,
95
],

borderColor: "#06B6D4",

backgroundColor:
"rgba(6,182,212,.2)",

fill: true,

tension: .4

}]

},

options: {

responsive: true

}

});

}


// ==========================
// ENGAGEMENT TREND
// ==========================

const engagementCtx =
document.getElementById("engagementChart");

if(engagementCtx){

new Chart(engagementCtx, {

type: "line",

data: {

labels: [
"Jan",
"Feb",
"Mar",
"Apr",
"May",
"Jun"
],

datasets: [{

label: "Engagement Score",

data: [
72,
74,
75,
77,
79,
81
],

borderColor:
"#8B5CF6",

backgroundColor:
"rgba(139,92,246,.2)",

fill: true,

tension: .4

}]

},

options: {

responsive: true

}

});

}


// ==========================
// WORKFORCE DISTRIBUTION
// ==========================

const workforceCtx =
document.getElementById("workforceChart");

if(workforceCtx){

new Chart(workforceCtx, {

type: "doughnut",

data: {

labels: [
"Sales",
"Operations",
"IT",
"Finance",
"HR"
],

datasets: [{

data: [
35,
25,
18,
15,
7
],

backgroundColor: [

"#3B82F6",
"#06B6D4",
"#8B5CF6",
"#10B981",
"#F59E0B"

]

}]

},

options: {

responsive: true,

plugins: {

legend: {

position: "bottom",

labels: {

color: "#fff"

}

}

}

}

});

}


// ==========================
// NAV ACTIVE EFFECT
// ==========================

const navLinks =
document.querySelectorAll(".nav-links a");

navLinks.forEach(link => {

link.addEventListener(
"click",
function(){

navLinks.forEach(
l => l.classList.remove("active")
);

this.classList.add("active");

}
);

});


// ==========================
// SMOOTH SCROLL
// ==========================

document.querySelectorAll(
'a[href^="#"]'
).forEach(anchor => {

anchor.addEventListener(
"click",
function(e){

e.preventDefault();

const target =
document.querySelector(
this.getAttribute("href")
);

if(target){

target.scrollIntoView({

behavior:"smooth"

});

}

}

);

});


// ==========================
// PROJECT IMAGE CLICK
// ==========================

document.querySelectorAll(
".project-card img"
).forEach(image => {

image.addEventListener(
"click",
() => {

window.open(
image.src,
"_blank"
);

}
);

});


// ==========================
// PROJECT CARD REVEAL
// ==========================

const projectCards =
document.querySelectorAll(".project-card");

const projectObserver =
new IntersectionObserver((entries) => {

entries.forEach(entry => {

if(entry.isIntersecting){

entry.target.classList.add("show");

}

});

},{
threshold:0.15
});

projectCards.forEach(card => {

projectObserver.observe(card);

});


// ==========================
// FLOATING PARTICLES
// ==========================

const particleCount = 20;

for(let i=0;i<particleCount;i++){

const particle =
document.createElement("div");

particle.style.position="fixed";

particle.style.width="3px";
particle.style.height="3px";

particle.style.borderRadius="50%";

particle.style.background=
"rgba(255,255,255,.15)";

particle.style.left=
Math.random()*100+"vw";

particle.style.top=
Math.random()*100+"vh";

particle.style.pointerEvents=
"none";

particle.style.zIndex="-1";

particle.style.animation=
`float ${5 + Math.random()*10}s linear infinite`;

document.body.appendChild(
particle
);

}


// ==========================
// CONSOLE SIGNATURE
// ==========================

console.log(
"%cAyesha Noor Baloch | Data Analytics Portfolio",
"color:#06B6D4;font-size:18px;font-weight:bold;"
);

console.log(
"Power BI | SQL | Python | Tableau | R | HR Analytics"
);
function sendWhatsAppMessage(event) {

    event.preventDefault();

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;

    const text =
        `Hello Ayesha,%0A%0A` +
        `Name: ${name}%0A` +
        `Email: ${email}%0A%0A` +
        `Message:%0A${message}`;

    window.open(
        `https://wa.me/923327887473?text=${text}`,
        "_blank"
    );
}
