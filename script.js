const themeBtn = document.getElementById("themeBtn");
const langBtn = document.getElementById("langBtn");

themeBtn.onclick = () => {
document.body.classList.toggle("dark");

localStorage.setItem(
"theme",
document.body.classList.contains("dark")
? "dark"
: "light"
);
};

if(localStorage.getItem("theme")==="dark"){
document.body.classList.add("dark");
}

let currentLang="ar";

langBtn.onclick=()=>{

currentLang=currentLang==="ar"?"en":"ar";

document.documentElement.lang=currentLang;

document.documentElement.dir=
currentLang==="ar"?"rtl":"ltr";

langBtn.innerText=
currentLang==="ar"?"EN":"AR";

document.querySelectorAll("[data-ar]").forEach(el=>{

el.innerText=
currentLang==="ar"
? el.dataset.ar
: el.dataset.en;

});

};
