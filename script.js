// =========================
// Fade In Animation
// =========================

const cards = document.querySelectorAll(".card");

const observer = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if(entry.isIntersecting){

            entry.target.classList.add("show");

        }

    });

});

cards.forEach(card=>{

    observer.observe(card);

});

// =========================
// Back To Top Button
// =========================

const topBtn = document.createElement("button");

topBtn.innerHTML="↑";

topBtn.id="topBtn";

document.body.appendChild(topBtn);

window.addEventListener("scroll",()=>{

    if(window.scrollY>300){

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

// =========================
// Dark Mode
// =========================

const darkBtn=document.createElement("button");

darkBtn.innerHTML='<i class="fa-solid fa-moon"></i>';

darkBtn.id="darkMode";

document.body.appendChild(darkBtn);

darkBtn.onclick=()=>{

    document.body.classList.toggle("dark");

    localStorage.setItem("theme",

        document.body.classList.contains("dark")

        ?"dark"

        :"light"

    );

};

if(localStorage.getItem("theme")==="dark"){

    document.body.classList.add("dark");

}
