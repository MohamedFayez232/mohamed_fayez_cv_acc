// =========================
// Dark Mode
// =========================

const themeBtn = document.getElementById("themeBtn");

themeBtn.addEventListener("click", () => {

    document.body.classList.toggle("dark");

    if (document.body.classList.contains("dark")) {

        localStorage.setItem("theme", "dark");

        themeBtn.innerHTML = '<i class="fa-solid fa-sun"></i>';

    } else {

        localStorage.setItem("theme", "light");

        themeBtn.innerHTML = '<i class="fa-solid fa-moon"></i>';

    }

});

if (localStorage.getItem("theme") === "dark") {

    document.body.classList.add("dark");

    themeBtn.innerHTML = '<i class="fa-solid fa-sun"></i>';

}

// =========================
// Sticky Navbar
// =========================

window.addEventListener("scroll", () => {

    const nav = document.querySelector(".navbar");

    if (window.scrollY > 60) {

        nav.style.padding = "15px 8%";
        nav.style.boxShadow = "0 10px 35px rgba(0,0,0,.15)";

    } else {

        nav.style.padding = "";
        nav.style.boxShadow = "";

    }

});

// =========================
// Reveal Animation
// =========================

const observer = new IntersectionObserver(entries => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            entry.target.classList.add("show");

        }

    });

}, {

    threshold: .2

});

document.querySelectorAll(".timeline-item,.skill-card,.education-card,.contact-grid div").forEach(el => {

    el.classList.add("hidden");

    observer.observe(el);

});

// =========================
// Back To Top
// =========================

const topBtn = document.createElement("button");

topBtn.id = "topBtn";

topBtn.innerHTML = '<i class="fa-solid fa-arrow-up"></i>';

document.body.appendChild(topBtn);

window.addEventListener("scroll", () => {

    topBtn.style.display = window.scrollY > 300 ? "flex" : "none";

});

topBtn.onclick = () => {

    window.scrollTo({

        top: 0,

        behavior: "smooth"

    });

};

// =========================
// Typing Effect
// =========================

const title = document.querySelector(".hero h2");

const text = title.innerHTML;

title.innerHTML = "";

let i = 0;

function typing() {

    if (i < text.length) {

        title.innerHTML += text.charAt(i);

        i++;

        setTimeout(typing, 35);

    }

}

typing();

// =========================
// Language Toggle (Basic)
// =========================

const langBtn = document.getElementById("langBtn");

let english = true;

langBtn.onclick = () => {

    if (english) {

        langBtn.innerHTML = "🇪🇬 AR";

        alert("سيتم إضافة النسخة العربية بالكامل في الإصدار القادم.");

    } else {

        langBtn.innerHTML = "🇺🇸 EN";

    }

    english = !english;

};
