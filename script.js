const cards =
document.querySelectorAll(
'.card,.project-card,.stat'
);

const observer =
new IntersectionObserver(entries => {

entries.forEach(entry => {

if(entry.isIntersecting){

entry.target.style.opacity = 1;
entry.target.style.transform =
'translateY(0px)';

}

});

});

cards.forEach(card => {

card.style.opacity = 0;
card.style.transform =
'translateY(30px)';

card.style.transition =
'all 0.7s ease';

observer.observe(card);

});
