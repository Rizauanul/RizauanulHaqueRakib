const TECHNICAL_SKILLS = [
    { name: "C / C++", icon: "fa-solid fa-code", level: "90%" },
    { name: "JavaScript", icon: "fa-brands fa-js", level: "85%" },
    { name: "Python", icon: "fa-brands fa-python", level: "75%" },
    { name: "React", icon: "fa-brands fa-react", level: "82%" },
    { name: "Node.js", icon: "fa-brands fa-node", level: "78%" },
    { name: "PHP | Laravel", icon: "fa-brands fa-php", level: "80%" },
    { name: "Flutter", icon: "fa-solid fa-mobile-screen-button", level: "80%" },
    { name: "MySQL", icon: "fa-solid fa-database", level: "75%" },
    { name: "HTML5 / CSS3", icon: "fa-brands fa-html5", level: "95%" }
];

const SOFT_SKILLS = [
    { name: "Communication", icon: "fa-solid fa-comments", level: "92%" },
    { name: "Team Collaboration", icon: "fa-solid fa-people-group", level: "88%" },
    { name: "Problem Solving", icon: "fa-solid fa-puzzle-piece", level: "90%" },
    { name: "Time Management", icon: "fa-solid fa-clock", level: "85%" },
    { name: "Leadership", icon: "fa-solid fa-crown", level: "80%" },
    { name: "Adaptability", icon: "fa-solid fa-arrows-rotate", level: "87%" }
];

const PROJECTS_DATA = [
    {
        title: "Cuisine",
        description: "A modern and responsive restaurant website that showcases menu offerings, restaurant information, and enables customers to conveniently book tables online through a seamless reservation system.",
        tags: ["HTML/CSS", "JavaScript", "PHP", "MySQL",],
        img: "images/cuisine.png",
        github: "https://github.com/Rizauanul/Cusine-Restaurent_Management_System", live: "https://rizauanul.github.io/Cusine-Restaurent_Management_System/"
    },
    {
        title: "inveNow",
        description: "InveNow is a modern inventory management system designed for small businesses to efficiently track products, monitor stock levels, manage inventory transactions, and generate business insights through a user-friendly interface.",
        tags: ["PHP", "MySQL"],
        img: "images/invenow.png",
        github: "https://github.com/Rizauanul/inveNow-Inventory_Management_System", live: "#"
    },
    {
        title: "Calcify",
        description: "Calcify is an all-in-one calculator app designed for students and everyday users. Calculate GPA, CGPA, SGPA, BMI, age, and perform unit conversions with speed and accuracy.",
        tags: ["Flutter", "Dart"],
        img: "images/calcify.png",
        github: "https://github.com/Rizauanul/Calcify-Smart_Calculations_Simplified", live: "#"
    },
];

const TESTIMONIALS_DATA = [
    { quote: "Rakib delivered Cuisine ahead of schedule. The system completely changed how we handle customer tables and daily check-outs.", author: "- Restaurant Owner" },
    { quote: "The system streamlined our inventory operations and provided accurate real-time stock updates. It has saved us time and improved overall business productivity.", author: "- Shop Owner" }
];

// Run Engine
document.addEventListener("DOMContentLoaded", () => {
    renderTechnicalSkills();
    renderSoftSkills();
    renderProjects();
    renderTestimonials();
    initScrollReveal();
    initParticles();
    setTimeout(typeEffect, 1000);
});

function renderTechnicalSkills() {
    const container = document.getElementById("dynamic-technical-skills");
    if (!container) return;
    container.innerHTML = TECHNICAL_SKILLS.map((skill) => `
        <div class="skill-tile">
            <div class="tile-glow"></div>
            <div class="tile-icon">
                <i class="${skill.icon}"></i>
            </div>
            <div class="tile-content">
                <div class="tile-header">
                    <span class="tile-name">${skill.name}</span>
                    <span class="tile-level">${skill.level}</span>
                </div>
                <div class="tile-bar">
                    <div class="tile-progress" style="width: ${skill.level};"></div>
                </div>
            </div>
            <div class="tile-corner"></div>
        </div>
    `).join('');
}

function renderSoftSkills() {
    const container = document.getElementById("dynamic-soft-skills");
    if (!container) return;
    container.innerHTML = SOFT_SKILLS.map((skill) => `
        <div class="skill-tile soft-tile">
            <div class="tile-glow"></div>
            <div class="tile-icon">
                <i class="${skill.icon}"></i>
            </div>
            <div class="tile-content">
                <div class="tile-header">
                    <span class="tile-name">${skill.name}</span>
                    <span class="tile-level">${skill.level}</span>
                </div>
                <div class="tile-bar">
                    <div class="tile-progress" style="width: ${skill.level};"></div>
                </div>
            </div>
            <div class="tile-corner"></div>
        </div>
    `).join('');
}

function renderProjects() {
    const container = document.getElementById("dynamic-projects-container");
    if (!container) return;
    container.innerHTML = PROJECTS_DATA.map((proj, idx) => `
        <div class="project-card reveal reveal-delay-${idx % 3}">
            <img src="${proj.img}" alt="${proj.title}" class="project-img">
            <div class="project-content">
                <h3>${proj.title}</h3>
                <p>${proj.description}</p>
                <div class="project-tags">
                    ${proj.tags.map(t => `<span>${t}</span>`).join('')}
                </div>
                <div class="project-links">
                    <a href="${proj.github}" class="btn-link"><i class="fab fa-github"></i> GitHub</a>
                    <a href="${proj.live}" class="btn-link"><i class="fas fa-external-link-alt"></i> Live Demo</a>
                </div>
            </div>
        </div>
    `).join('');
}

function renderTestimonials() {
    const track = document.getElementById("dynamic-testimonial-track");
    const dotsContainer = document.getElementById("dynamic-slider-dots");
    if (!track || !dotsContainer) return;
    
    track.innerHTML = TESTIMONIALS_DATA.map(t => `
        <div class="testimonial-slide">
            <p>"${t.quote}"</p>
            <h4>${t.author}</h4>
        </div>
    `).join('');

    dotsContainer.innerHTML = TESTIMONIALS_DATA.map((_, i) => `
        <span class="dot ${i === 0 ? 'active' : ''}" onclick="moveToSlide(${i})"></span>
    `).join('');
}

let canvas, ctx, particlesArray;
function initParticles() {
    canvas = document.getElementById("particleCanvas");
    if (!canvas) return;
    ctx = canvas.getContext("2d");
    resizeCanvas();

    particlesArray = [];
    const numberOfParticles = Math.min(40, window.innerWidth / 30);
    for (let i = 0; i < numberOfParticles; i++) {
        particlesArray.push(new Particle());
    }
    animateParticles();
}

function resizeCanvas() {
    if (canvas) {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    }
}
window.addEventListener('resize', () => { if (canvas) resizeCanvas(); });

class Particle {
    constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.size = Math.random() * 2 + 1;
        this.speedX = (Math.random() - 0.5) * 0.6;
        this.speedY = (Math.random() - 0.5) * 0.6;
    }
    update() {
        this.x += this.speedX;
        this.y += this.speedY;
        if (this.x > canvas.width || this.x < 0) this.speedX *= -1;
        if (this.y > canvas.height || this.y < 0) this.speedY *= -1;
    }
    draw() {
        ctx.fillStyle = getComputedStyle(document.documentElement).getPropertyValue('--accent').trim();
        ctx.globalAlpha = 0.12;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
        ctx.globalAlpha = 1.0;
    }
}

function animateParticles() {
    if (!canvas) return;
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    particlesArray.forEach(p => {
        p.update();
        p.draw();
    });
    requestAnimationFrame(animateParticles);
}

const words = ["Software Engineer", "Full Stack Dev"];
let wordIdx = 0, charIdx = 0, isDeleting = false;

function typeEffect() {
    const currentWord = words[wordIdx];
    const span = document.querySelector(".typing-text");
    if (!span) return;

    if (isDeleting) {
        span.textContent = currentWord.substring(0, charIdx - 1);
        charIdx--;
    } else {
        span.textContent = currentWord.substring(0, charIdx + 1);
        charIdx++;
    }

    if (!isDeleting && charIdx === currentWord.length) {
        isDeleting = true;
        setTimeout(typeEffect, 2000);
    } else if (isDeleting && charIdx === 0) {
        isDeleting = false;
        wordIdx = (wordIdx + 1) % words.length;
        setTimeout(typeEffect, 400);
    } else {
        setTimeout(typeEffect, isDeleting ? 60 : 120);
    }
}

function initScrollReveal() {
    const observerOptions = { threshold: 0.05, rootMargin: "0px 0px -20px 0px" };
    const revealObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("active");
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    document.querySelectorAll(".reveal, .project-card, .service-card, .timeline-item, .skill-tile").forEach(el => {
        revealObserver.observe(el);
    });
}

const themeToggleBtn = document.getElementById("theme-toggle");
if (themeToggleBtn) {
    themeToggleBtn.addEventListener("click", () => {
        let currentTheme = document.documentElement.getAttribute("data-theme");
        let newTheme = currentTheme === "dark" ? "light" : "dark";
        document.documentElement.setAttribute("data-theme", newTheme);
        themeToggleBtn.querySelector("i").className = newTheme === "dark" ? "fas fa-sun" : "fas fa-moon";
    });
}

// Download CV functionality for Hero button
const downloadCVHeroBtn = document.getElementById("download-cv-hero");
if (downloadCVHeroBtn) {
    downloadCVHeroBtn.addEventListener("click", () => {
        const cvPdfPath = "cv/CV of Md. Rizauanul Haque Rakib.pdf";
        const link = document.createElement('a');
        link.href = cvPdfPath;
        link.download = "CV of Md. Rizauanul Haque Rakib.pdf";
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    });
}

const mobileMenu = document.getElementById("mobile-menu");
const navLinks = document.querySelector(".nav-links");
if (mobileMenu && navLinks) {
    mobileMenu.addEventListener("click", () => {
        mobileMenu.classList.toggle("open");
        navLinks.classList.toggle("active");
    });
}

// --- CLEAN URL NAV ENGINE (REMOVES HASHTAGS) ---
document.querySelectorAll('.nav-links a, .footer-links a, .hero-cta a, .logo').forEach(link => {
    link.addEventListener('click', function(e) {
        const targetId = this.getAttribute('data-target');
        if (targetId) {
            e.preventDefault();
            
            if (mobileMenu && navLinks) {
                mobileMenu.classList.remove("open");
                navLinks.classList.remove("active");
            }

            const targetSection = document.getElementById(targetId);
            if (targetSection) {
                const headerOffset = 75; 
                const elementPosition = targetSection.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
                
                window.scrollTo({
                    top: offsetPosition,
                    behavior: "smooth"
                });

                window.history.pushState(null, null, window.location.pathname);
            }
        }
    });
});

const backToTopBtn = document.getElementById("backToTop");
window.addEventListener("scroll", () => {
    if (backToTopBtn) {
        if (window.scrollY > 400) backToTopBtn.classList.add("show");
        else backToTopBtn.classList.remove("show");
    }

    let fromTop = window.scrollY + 150;
    document.querySelectorAll("section").forEach(sec => {
        if (sec.offsetTop <= fromTop && sec.offsetTop + sec.offsetHeight > fromTop) {
            document.querySelectorAll(".nav-links a").forEach(a => {
                a.classList.remove("active");
                const target = a.getAttribute("data-target");
                if (target === sec.id) a.classList.add("active");
            });
        }
    });
});

if (backToTopBtn) {
    backToTopBtn.addEventListener("click", (e) => {
        e.preventDefault();
        window.scrollTo({ top: 0, behavior: 'smooth' });
        window.history.pushState(null, null, window.location.pathname);
    });
}

let activeSlide = 0;
function moveToSlide(idx) {
    activeSlide = idx;
    const track = document.getElementById("dynamic-testimonial-track");
    if (!track) return;
    track.style.transform = `translateX(-${idx * 100}%)`;
    const dots = document.querySelectorAll("#dynamic-slider-dots .dot");
    dots.forEach((d, i) => d.classList.toggle("active", i === idx));
}

setInterval(() => {
    if (TESTIMONIALS_DATA.length > 0) {
        activeSlide = (activeSlide + 1) % TESTIMONIALS_DATA.length;
        moveToSlide(activeSlide);
    }
}, 7000);

const contactForm = document.getElementById("portfolio-contact-form");
if (contactForm) {
    contactForm.addEventListener("submit", function(e) {
        e.preventDefault();
        const btn = document.getElementById("submit-btn");
        if (!btn) return;
        const txt = btn.querySelector(".btn-text");
        const spinner = btn.querySelector(".spinner");

        txt.textContent = "Sending...";
        if (spinner) spinner.classList.remove("hidden");
        btn.style.pointerEvents = "none";

        setTimeout(() => {
            txt.textContent = "Message Sent ✓";
            if (spinner) spinner.classList.add("hidden");
            this.reset();
            setTimeout(() => {
                txt.textContent = "Send Message";
                btn.style.pointerEvents = "all";
            }, 3000);
        }, 1500);
    });
}