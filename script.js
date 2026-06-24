/* ==========================================
MOBILE MENU
========================================== */

const mobileToggle =
document.querySelector(".mobile-toggle");

const navMenu =
document.querySelector(".nav-menu");

if (mobileToggle) {

mobileToggle.addEventListener("click", () => {

navMenu.classList.toggle("active");

mobileToggle.textContent =
navMenu.classList.contains("active")
? "✕"
: "☰";

});

}

/* ==========================================
CLOSE MOBILE MENU
========================================== */

document
.querySelectorAll(".nav-menu a")
.forEach(link => {

link.addEventListener("click", () => {

if(navMenu){

navMenu.classList.remove("active");

}

if(mobileToggle){

mobileToggle.textContent = "☰";

}

});

});

/* ==========================================
DARK MODE TOGGLE
========================================== */

const themeToggle =
document.getElementById("themeToggle");

const savedTheme =
localStorage.getItem("theme");

if(savedTheme === "dark"){

document.body.classList.add("dark");

if(themeToggle){

themeToggle.textContent = "☀️";

}

}

if(themeToggle){

themeToggle.addEventListener("click", () => {

document.body.classList.toggle("dark");

const darkMode =
document.body.classList.contains("dark");

themeToggle.textContent =
darkMode ? "☀️" : "🌙";

localStorage.setItem(
"theme",
darkMode ? "dark" : "light"
);

});

}

/* ==========================================
SMOOTH SCROLL
========================================== */

document
.querySelectorAll('a[href^="#"]')
.forEach(anchor => {

anchor.addEventListener("click", function(e){

e.preventDefault();

const target =
document.querySelector(
this.getAttribute("href")
);

if(target){

target.scrollIntoView({

behavior:"smooth",
block:"start"

});

}

});

});

/* ==========================================
ACTIVE NAVIGATION
========================================== */

const sections =
document.querySelectorAll("section");

const navLinks =
document.querySelectorAll(".nav-menu a");

window.addEventListener("scroll", () => {

let current = "";

sections.forEach(section => {

const sectionTop =
section.offsetTop - 150;

if(window.scrollY >= sectionTop){

current =
section.getAttribute("id");

}

});

navLinks.forEach(link => {

link.classList.remove("active");

if(
link.getAttribute("href")
=== `#${current}`
){

link.classList.add("active");

}

});

});

/* ==========================================
NAVBAR SHADOW
========================================== */

const header =
document.querySelector(".header");

window.addEventListener("scroll", () => {

if(window.scrollY > 50){

header.style.boxShadow =
"0 10px 30px rgba(0,0,0,.08)";

}else{

header.style.boxShadow =
"none";

}

});

/* ==========================================
BACK TO TOP BUTTON
========================================== */

const backToTop =
document.getElementById("backToTop");

window.addEventListener("scroll", () => {

if(window.scrollY > 500){

backToTop.style.display =
"flex";

}else{

backToTop.style.display =
"none";

}

});

if(backToTop){

backToTop.addEventListener("click", () => {

window.scrollTo({

top:0,
behavior:"smooth"

});

});

}

/* ==========================================
TYPING EFFECT
========================================== */

const typingElement =
document.querySelector(".typing-text");

if(typingElement){

const roles = [

"HR Analytics Professional",
"Power BI Developer",
"Data Analyst",
"Creative Designer",
"Business Intelligence Enthusiast"

];

let roleIndex = 0;
let charIndex = 0;
let deleting = false;

function typeEffect(){

const currentRole =
roles[roleIndex];

if(!deleting){

typingElement.textContent =
currentRole.substring(
0,
charIndex + 1
);

charIndex++;

if(
charIndex === currentRole.length
){

deleting = true;

setTimeout(
typeEffect,
1500
);

return;

}

}else{

typingElement.textContent =
currentRole.substring(
0,
charIndex - 1
);

charIndex--;

if(charIndex === 0){

deleting = false;

roleIndex =
(roleIndex + 1)
%
roles.length;

}

}

setTimeout(

typeEffect,

deleting
? 60
: 120

);

}

typeEffect();

}

/* ==========================================
COUNTER ANIMATION
========================================== */

const counters =
document.querySelectorAll(".counter");

const counterObserver =
new IntersectionObserver(

entries => {

entries.forEach(entry => {

if(entry.isIntersecting){

const counter =
entry.target;

const target =
+counter.dataset.target;

let count = 0;

const updateCounter = () => {

const increment =
Math.ceil(target / 100);

count += increment;

if(count >= target){

counter.textContent =
target;

}else{

counter.textContent =
count;

requestAnimationFrame(
updateCounter
);

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
threshold:0.5
}

);

counters.forEach(counter => {

counterObserver.observe(counter);

});

/* ==========================================
SKILL BAR ANIMATION
========================================== */

const progressBars =
document.querySelectorAll(".progress");

const skillObserver =
new IntersectionObserver(

entries => {

entries.forEach(entry => {

if(entry.isIntersecting){

const progress =
entry.target.dataset.progress;

entry.target.style.width =
progress + "%";

skillObserver.unobserve(
entry.target
);

}

});

},

{
threshold:0.4
}

);

progressBars.forEach(bar => {

bar.style.width = "0";

bar.style.transition =
"width 1.5s ease";

skillObserver.observe(bar);

});

/* ==========================================
SCROLL REVEAL
========================================== */

const fadeElements =
document.querySelectorAll(".fade-up");

const revealObserver =
new IntersectionObserver(

entries => {

entries.forEach(entry => {

if(entry.isIntersecting){

entry.target.classList.add(
"show"
);

revealObserver.unobserve(
entry.target
);

}

});

},

{
threshold:0.15
}

);

fadeElements.forEach(element => {

revealObserver.observe(element);

});

/* ==========================================
CONTACT FORM
========================================== */

const contactForm =
document.getElementById("contactForm");

if(contactForm){

contactForm.addEventListener(

"submit",

function(e){

e.preventDefault();

const button =
contactForm.querySelector(
"button"
);

button.textContent =
"Message Sent ✓";

button.disabled = true;

setTimeout(() => {

button.textContent =
"Send Message";

button.disabled = false;

contactForm.reset();

},2000);

}

);

}

/* ==========================================
CURRENT YEAR
========================================== */

const yearElement =
document.getElementById(
"currentYear"
);

if(yearElement){

yearElement.textContent =
`© ${new Date().getFullYear()} Ayesha Noor Baloch. All Rights Reserved.`;

}

/* ==========================================
PAGE LOAD ANIMATION
========================================== */

window.addEventListener(
"load",
() => {

document.body.classList.add(
"loaded"
);

}
);

/* ==========================================
OPTIONAL PARTICLE EFFECT
========================================== */

const hero =
document.querySelector(".hero");

if(hero){

for(let i = 0; i < 20; i++){

const particle =
document.createElement("span");

particle.classList.add(
"particle"
);

particle.style.left =
Math.random() * 100 + "%";

particle.style.animationDelay =
Math.random() * 10 + "s";

hero.appendChild(particle);

}

}

