/*==========================================
PORTFOLIO
Mohamed Fayez
==========================================*/

AOS.init({

duration:900,

once:true,

offset:80

});

/*==========================================
LOADER
==========================================*/

window.addEventListener("load",()=>{

setTimeout(()=>{

document.getElementById("loader").style.opacity="0";

setTimeout(()=>{

document.getElementById("loader").style.display="none";

},700);

},1200);

});

/*==========================================
SCROLL PROGRESS
==========================================*/

window.addEventListener("scroll",()=>{

const scrollTop=document.documentElement.scrollTop;

const height=document.documentElement.scrollHeight-document.documentElement.clientHeight;

const progress=(scrollTop/height)*100;

document.getElementById("progressBar").style.width=progress+"%";

});

/*==========================================
BACK TO TOP
==========================================*/

const topBtn=document.getElementById("topBtn");

window.addEventListener("scroll",()=>{

if(window.scrollY>500){

topBtn.style.display="block";

}else{

topBtn.style.display="none";

}

});

topBtn.onclick=()=>{

window.scrollTo({

top:0,

behavior:"smooth"

});

};

/*==========================================
TYPEWRITER
==========================================*/

const titles=[

"General Accountant",

"Revenue Accountant",

"Teller",

"Banking Professional"

];

let titleIndex=0;

let charIndex=0;

let deleting=false;

const typing=document.querySelector(".typing");

function type(){

const current=titles[titleIndex];

if(!deleting){

typing.textContent=current.substring(0,charIndex++);

if(charIndex>current.length){

deleting=true;

setTimeout(type,1400);

return;

}

}else{

typing.textContent=current.substring(0,charIndex--);

if(charIndex===0){

deleting=false;

titleIndex++;

if(titleIndex>=titles.length){

titleIndex=0;

}

}

}

setTimeout(type,deleting?50:110);

}

type();

/*==========================================
COUNTERS
==========================================*/

const counters=document.querySelectorAll(".counter");

let counterStarted=false;

function startCounter(){

if(counterStarted) return;

const trigger=document.getElementById("about");

if(window.scrollY>trigger.offsetTop-400){

counterStarted=true;

counters.forEach(counter=>{

const target=+counter.dataset.target;

let count=0;

const speed=target/70;

const update=()=>{

count+=speed;

if(count<target){

counter.innerHTML=Math.floor(count);

requestAnimationFrame(update);

}else{

counter.innerHTML=target;

}

};

update();

});

}

}

window.addEventListener("scroll",startCounter);

/*==========================================
SKILLS ANIMATION
==========================================*/

const skillBars=document.querySelectorAll(".progress-bar");

let skillsAnimated=false;

function animateSkills(){

if(skillsAnimated) return;

const section=document.getElementById("skills");

if(window.scrollY>section.offsetTop-450){

skillsAnimated=true;

skillBars.forEach(bar=>{

const width=bar.dataset.width;

bar.style.width=width+"%";

});

}

}

window.addEventListener("scroll",animateSkills);

/*==========================================
DARK / LIGHT MODE
==========================================*/

const themeBtn=document.getElementById("themeBtn");

const savedTheme=localStorage.getItem("theme");

if(savedTheme==="light"){

document.body.classList.add("light");

themeBtn.innerHTML='<i class="fa-solid fa-sun"></i>';

}else{

themeBtn.innerHTML='<i class="fa-solid fa-moon"></i>';

}

themeBtn.onclick=()=>{

document.body.classList.toggle("light");

if(document.body.classList.contains("light")){

localStorage.setItem("theme","light");

themeBtn.innerHTML='<i class="fa-solid fa-sun"></i>';

}else{

localStorage.setItem("theme","dark");

themeBtn.innerHTML='<i class="fa-solid fa-moon"></i>';

}

};

/*==========================================
LANGUAGE SWITCHER
==========================================*/

const langBtn=document.getElementById("langBtn");

let currentLang=localStorage.getItem("lang") || "ar";

function applyLanguage(lang){

document.documentElement.lang=lang;

document.documentElement.dir=(lang==="ar")?"rtl":"ltr";

document.querySelectorAll("[data-ar]").forEach(el=>{

el.textContent=(lang==="ar") ? el.dataset.ar : el.dataset.en;

});

langBtn.textContent=(lang==="ar") ? "EN" : "AR";

localStorage.setItem("lang",lang);

currentLang=lang;

}

applyLanguage(currentLang);

langBtn.onclick=()=>{

applyLanguage(currentLang==="ar" ? "en" : "ar");

};

/*==========================================
ACTIVE NAVBAR LINK
==========================================*/

const sections=document.querySelectorAll("section");

const navLinks=document.querySelectorAll("nav ul li a");

window.addEventListener("scroll",()=>{

let current="";

sections.forEach(section=>{

const top=section.offsetTop-180;

const height=section.offsetHeight;

if(window.scrollY>=top){

current=section.getAttribute("id");

}

});

navLinks.forEach(link=>{

link.classList.remove("active");

if(link.getAttribute("href")==="#"+current){

link.classList.add("active");

}

});

});

/*==========================================
MOUSE GLOW EFFECT
==========================================*/

document.addEventListener("mousemove",(e)=>{

document.body.style.setProperty("--x",e.clientX+"px");

document.body.style.setProperty("--y",e.clientY+"px");

});

/*==========================================
SMOOTH NAVIGATION
==========================================*/

navLinks.forEach(link=>{

link.addEventListener("click",(e)=>{

e.preventDefault();

const target=document.querySelector(link.getAttribute("href"));

target.scrollIntoView({

behavior:"smooth"

});

});

});

/*==========================================
END SCRIPT
==========================================*/
/*==========================================
CARD HOVER EFFECT
==========================================*/

const cards=document.querySelectorAll(

".glass,.skill-card,.timeline-content,.contact-card,.lang-card,.education-card"

);

cards.forEach(card=>{

card.addEventListener("mousemove",(e)=>{

const rect=card.getBoundingClientRect();

const x=e.clientX-rect.left;

const y=e.clientY-rect.top;

const centerX=rect.width/2;

const centerY=rect.height/2;

const rotateX=((y-centerY)/18)*-1;

const rotateY=((x-centerX)/18);

card.style.transform=

`perspective(900px)

rotateX(${rotateX}deg)

rotateY(${rotateY}deg)

translateY(-8px)`;

});

card.addEventListener("mouseleave",()=>{

card.style.transform=

"perspective(900px) rotateX(0) rotateY(0) translateY(0)";

});

});

/*==========================================
REVEAL EFFECT
==========================================*/

const revealElements=document.querySelectorAll(

".timeline-item,.skill-card,.contact-card,.lang-card,.education-card"

);

const revealObserver=new IntersectionObserver(entries=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.classList.add("show");

}

});

},{

threshold:.15

});

revealElements.forEach(el=>{

revealObserver.observe(el);

});

/*==========================================
COPY PHONE
==========================================*/

document.querySelectorAll(".contact-card").forEach(card=>{

card.addEventListener("dblclick",()=>{

const phone=card.innerText.match(/01\d+/);

if(phone){

navigator.clipboard.writeText(phone[0]);

alert("Phone copied ✔");

}

});

});

/*==========================================
COPY EMAIL
==========================================*/

const email=document.querySelector(

'a[href^="mailto"]'

);

if(email){

email.addEventListener("click",()=>{

navigator.clipboard.writeText(

email.getAttribute("href").replace("mailto:","")

);

});

}

/*==========================================
IMAGE PARALLAX
==========================================*/

const profile=document.querySelector(".profile");

window.addEventListener("mousemove",(e)=>{

const x=(window.innerWidth/2-e.clientX)/35;

const y=(window.innerHeight/2-e.clientY)/35;

profile.style.transform=

`translate(${x}px,${y}px)`;

});

/*==========================================
NAVBAR SHADOW
==========================================*/

const navbar=document.querySelector("nav");

window.addEventListener("scroll",()=>{

if(window.scrollY>80){

navbar.style.padding="14px 30px";

navbar.style.background="rgba(8,17,31,.85)";

navbar.style.backdropFilter="blur(30px)";

}else{

navbar.style.padding="18px 30px";

navbar.style.background="var(--glass)";

}

});

/*==========================================
PRELOAD IMAGE
==========================================*/

const preload=new Image();

preload.src="assets/profile.jpg";

/*==========================================
BUTTON RIPPLE EFFECT
==========================================*/

document.querySelectorAll(".btn").forEach(button=>{

button.addEventListener("click",function(e){

const circle=document.createElement("span");

const diameter=Math.max(

this.clientWidth,

this.clientHeight

);

circle.style.width=diameter+"px";

circle.style.height=diameter+"px";

circle.classList.add("ripple");

const rect=this.getBoundingClientRect();

circle.style.left=e.clientX-rect.left-diameter/2+"px";

circle.style.top=e.clientY-rect.top-diameter/2+"px";

const ripple=this.querySelector(".ripple");

if(ripple){

ripple.remove();

}

this.appendChild(circle);

});

});

/*==========================================
CURRENT YEAR
==========================================*/

const year=document.querySelector(".copyright");

if(year){

year.innerHTML=

"© "+new Date().getFullYear()+" Mohamed Fayez Portfolio";

}

/*==========================================
CONSOLE MESSAGE
==========================================*/

console.log(

"%cPortfolio Developed Successfully",

"color:#3b82f6;font-size:18px;font-weight:bold"

);

console.log(

"%cDesigned with ❤️ by ChatGPT",

"color:#22c55e;font-size:14px"

);
