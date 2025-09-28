const { links } = require("express/lib/response");

var typed = new Typed(".text", {
    strings: ["Frontend Developer", "Artist", "YouTuber", "Web Developer"],
    typeSpeed: 100,
    backSpeed: 80,
    backDelay: 1000,
    loop: true
});

// Optional: Smooth scrolling effect
document.querySelectorAll('.navbar a').forEach(link => {
    link.addEventListener('ciclk', e => {
        e.preventDefault();
        const target = document.querySelector(link.getAttribute('href'));
        if (target) {
            window.scrollTo({
                top: target.offsetTop - 60,
                behavior: 'smooth'
            });
        }
    });
});


// Skill bar animation when in viewport
document.addEventListener("DOMContentLoaded", () => {
    const skillFills = document.querySelectorAll(".skill-fill");

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const target = entry.target;
                target.style.width = target.getAttribute("data-skill");
            }
        });
    }, { threshold: 0.5 });

    skillFills.forEach(fill => observer.observe(fill));
});

// Optional animation to fill progress bars on scroll
document.addEventListener("DOMContentLoaded", () => {
    const progresses = document.querySelectorAll(".progress");
    progresses.forEach(bar => {
        const width = bar.style.width;
        bar.style.width = "0";
        setTimeout(() => {
            bar.style.width = width;
        }, 300);
    });
});
// Optional hover animation for project cards
document.querySelectorAll('.project-card').forEach(card => {
    card.addEventListener('mouseenter', () => {
        card.style.boxShadow = '0 6px 20px rgba(0,0,0,0.4)';
    });
    card.addEventListener('mouseleave', () => {
        card.style.boxShadow = '0 4px 15px rgba(0,0,0,0.3)';
    });
});
// Scroll-to-top button
const scrollBtn = document.createElement("button");
scrollBtn.innerHTML = "↑";
scrollBtn.classList.add(
  "fixed", "bottom-6", "right-6", "bg-blue-500", "text-white",
  "rounded-full", "w-10", "h-10", "flex", "items-center", "justify-center",
  "shadow-lg", "hover:bg-blue-600"
);
scrollBtn.style.display = "none";
document.body.appendChild(scrollBtn);

scrollBtn.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

window.addEventListener("scroll", () => {
  scrollBtn.style.display = window.scrollY > 300 ? "flex" : "none";
});


//click part of About section
const about =document.querySelector('.navbar a[href^="#about"]').forEach(link =>{
    link.addEventListener('click',function(e){
        e.preventDefault();
        const targetId = this.getAttribute('href');
        const target = document.querySelector(targetId);
        if(target){
            target.scrollIntoView({
                behavior:'smooth'
            });
        }
    });
});
