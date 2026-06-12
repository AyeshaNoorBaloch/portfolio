// Animated Counters

function animateValue(id,start,end,duration){

let obj=document.getElementById(id);
let range=end-start;
let current=start;
let increment=end>start?1:-1;
let stepTime=Math.abs(Math.floor(duration/range));

let timer=setInterval(()=>{

current+=increment;

obj.innerHTML=current;

if(current==end){
clearInterval(timer);
}

},stepTime);
}

animateValue("projectsCounter",0,16,2000);
animateValue("certCounter",0,6,2000);
animateValue("toolsCounter",0,6,2000);
animateValue("experienceCounter",0,2,2000);


// Attrition Chart

new Chart(
document.getElementById("attritionChart"),
{
type:"bar",
data:{
labels:[
"HR",
"Finance",
"Sales",
"IT",
"Operations"
],
datasets:[{
label:"Attrition %",
data:[8,12,18,10,14]
}]
},
options:{
responsive:true
}
}
);


// Recruitment Funnel

new Chart(
document.getElementById("recruitmentChart"),
{
type:"line",
data:{
labels:[
"Applications",
"Screening",
"Interviews",
"Offers",
"Hires"
],
datasets:[{
label:"Candidates",
data:[500,300,180,90,45],
fill:false
}]
}
}
);


// Engagement

new Chart(
document.getElementById("engagementChart"),
{
type:"doughnut",
data:{
labels:[
"Highly Engaged",
"Moderate",
"Low"
],
datasets:[{
data:[55,30,15]
}]
}
}
);


// Training

new Chart(
document.getElementById("trainingChart"),
{
type:"pie",
data:{
labels:[
"Completed",
"In Progress",
"Not Started"
],
datasets:[{
data:[70,20,10]
}]
}
}
);
