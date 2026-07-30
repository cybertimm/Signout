/* ===========================================================
   Graduation Letter Website
   script.js
===========================================================*/

// Wait until page loads
document.addEventListener("DOMContentLoaded", () => {

    initSmoothScroll();
    initRevealAnimations();
    initTypingEffect();
    initFloatingHearts();
    initSparkles();
    initGallery();
    initBackToTop();
    initScrollProgress();
    initRippleButtons();
    initEndingConfetti();

});


/* ===========================================================
   Smooth Scroll
===========================================================*/

function initSmoothScroll() {

    document.querySelectorAll('a[href^="#"]').forEach(anchor => {

        anchor.addEventListener("click", function (e) {

            e.preventDefault();

            const target = document.querySelector(this.getAttribute("href"));

            if (target) {

                target.scrollIntoView({
                    behavior: "smooth"
                });

            }

        });

    });

}


/* ===========================================================
   Scroll Reveal
===========================================================*/

function initRevealAnimations() {

    const reveals = document.querySelectorAll(".reveal");

    const observer = new IntersectionObserver(entries => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                entry.target.classList.add("active");

            }

        });

    }, {

        threshold: 0.15

    });

    reveals.forEach(el => observer.observe(el));

}


/* ===========================================================
   Hero Typing Effect
===========================================================*/

function initTypingEffect() {

    const heroTitle = document.querySelector(".hero h2");

    if (!heroTitle) return;

    const text = heroTitle.innerHTML.replace(/<br>/g, "\n");

    heroTitle.innerHTML = "";

    let i = 0;

    function type() {

        if (i < text.length) {

            if (text.charAt(i) === "\n") {

                heroTitle.innerHTML += "<br>";

            } else {

                heroTitle.innerHTML += text.charAt(i);

            }

            i++;

            setTimeout(type, 45);

        }

    }

    type();

}


/* ===========================================================
   Floating Hearts
===========================================================*/

function initFloatingHearts() {

    setInterval(() => {

        const heart = document.createElement("div");

        heart.className = "floating-heart";

        heart.innerHTML = ["❤️","🤍","💖","💕"][Math.floor(Math.random()*4)];

        heart.style.left = Math.random()*100 + "vw";

        heart.style.fontSize = (18 + Math.random()*20) + "px";

        heart.style.animationDuration = (6 + Math.random()*4) + "s";

        document.body.appendChild(heart);

        setTimeout(() => {

            heart.remove();

        },10000);

    },1200);

}


/* ===========================================================
   Floating Sparkles
===========================================================*/

function initSparkles() {

    setInterval(() => {

        const star = document.createElement("div");

        star.className = "sparkle";

        star.innerHTML = "✨";

        star.style.left = Math.random()*100+"vw";

        star.style.top = Math.random()*100+"vh";

        star.style.animationDuration = (2 + Math.random()*2) + "s";

        document.body.appendChild(star);

        setTimeout(()=>{

            star.remove();

        },4000);

    },500);

}


/* ===========================================================
   Gallery Lightbox
===========================================================*/

function initGallery() {

    const images = document.querySelectorAll(".gallery img");

    if(images.length===0) return;

    const lightbox = document.createElement("div");

    lightbox.className = "lightbox";

    lightbox.innerHTML = `
        <span class="close-lightbox">&times;</span>
        <img class="lightbox-img">
    `;

    document.body.appendChild(lightbox);

    const lightboxImg = lightbox.querySelector(".lightbox-img");

    images.forEach(img=>{

        img.addEventListener("click",()=>{

            lightbox.classList.add("show");

            lightboxImg.src = img.src;

        });

    });

    lightbox.addEventListener("click",()=>{

        lightbox.classList.remove("show");

    });

}


/* ===========================================================
   Back To Top Button
===========================================================*/

function initBackToTop(){

    const btn=document.createElement("button");

    btn.className="backToTop";

    btn.innerHTML="↑";

    document.body.appendChild(btn);

    window.addEventListener("scroll",()=>{

        if(window.scrollY>600){

            btn.classList.add("show");

        }else{

            btn.classList.remove("show");

        }

    });

    btn.onclick=()=>{

        window.scrollTo({

            top:0,

            behavior:"smooth"

        });

    };

}


/* ===========================================================
   Scroll Progress
===========================================================*/

function initScrollProgress(){

    const progress=document.createElement("div");

    progress.className="progress-bar";

    document.body.prepend(progress);

    window.addEventListener("scroll",()=>{

        const total=document.documentElement.scrollHeight-window.innerHeight;

        const current=(window.scrollY/total)*100;

        progress.style.width=current+"%";

    });

}


/* ===========================================================
   Ripple Effect
===========================================================*/

function initRippleButtons(){

    document.querySelectorAll(".btn").forEach(button=>{

        button.addEventListener("click",function(e){

            const ripple=document.createElement("span");

            ripple.className="ripple";

            const rect=this.getBoundingClientRect();

            ripple.style.left=e.clientX-rect.left+"px";

            ripple.style.top=e.clientY-rect.top+"px";

            this.appendChild(ripple);

            setTimeout(()=>{

                ripple.remove();

            },600);

        });

    });

}


/* ===========================================================
   Ending Confetti
===========================================================*/

function initEndingConfetti(){

    const ending=document.querySelector(".ending");

    if(!ending) return;

    const observer=new IntersectionObserver(entries=>{

        entries.forEach(entry=>{

            if(entry.isIntersecting){

                fireConfetti();

            }

        });

    },{

        threshold:0.5

    });

    observer.observe(ending);

}


function fireConfetti(){

    for(let i=0;i<120;i++){

        const piece=document.createElement("div");

        piece.className="confetti";

        piece.style.left=Math.random()*100+"vw";

        piece.style.backgroundColor=randomColor();

        piece.style.animationDuration=(2+Math.random()*3)+"s";

        piece.style.transform=`rotate(${Math.random()*360}deg)`;

        document.body.appendChild(piece);

        setTimeout(()=>{

            piece.remove();

        },5000);

    }

}


function randomColor(){

    const colors=[

        "#ffb6c1",

        "#ffd700",

        "#ffffff",

        "#ff69b4",

        "#ffc0cb",

        "#ffe4e1"

    ];

    return colors[Math.floor(Math.random()*colors.length)];

}


/* ===========================================================
   Parallax Hero
===========================================================*/

window.addEventListener("scroll",()=>{

    const hero=document.querySelector(".hero");

    if(hero){

        hero.style.backgroundPositionY=window.scrollY*0.4+"px";

    }

});


/* ===========================================================
   Random Love Quotes (Optional)
===========================================================*/

const quotes=[

"Forever proud of you ❤️",

"You are my favorite achievement.",

"Your future is brighter than the stars.",

"You make my heart smile.",

"This is only the beginning."

];

setInterval(()=>{

    const quote=document.querySelector(".hero p");

    if(!quote) return;

    quote.style.opacity=0;

    setTimeout(()=>{

        quote.textContent=quotes[Math.floor(Math.random()*quotes.length)];

        quote.style.opacity=1;

    },400);

},7000);
