// animations.js
document.addEventListener('DOMContentLoaded', function () {
    // Initialize GSAP animations
    gsap.registerPlugin(ScrollTrigger);

    // Page Entry Animation
    function pageEntryAnimation() {
        const tl = gsap.timeline({ defaults: { ease: "power2.out" } });

        // Header animation
        tl.from(".header", {
            y: -100,
            opacity: 0,
            duration: 0.8,
            delay: 0.2
        });

        // Hero section animation (index.html)
        if (document.querySelector('.hero')) {
            tl.from(".hero h1", {
                y: 50,
                opacity: 0,
                duration: 0.8,
                stagger: 0.2
            }, "-=0.4");
        }

        // Search container animation (index.html)
        if (document.querySelector('.search-container')) {
            tl.from(".search-container", {
                scale: 0.8,
                opacity: 0,
                duration: 0.6
            }, "-=0.3");
        }

        // Model cards animation (index.html)
        gsap.from(".model-card", {
            y: 50,
            opacity: 0,
            duration: 0.6,
            stagger: 0.1,
            scrollTrigger: {
                trigger: ".models",
                start: "top 80%",
                toggleActions: "play none none none"
            }
        });

        // Pricing cards animation (tarification.html)
        if (document.querySelector('.pricing-plans')) {
            gsap.from(".pricing-card", {
                y: 50,
                opacity: 0,
                duration: 0.6,
                stagger: 0.2,
                scrollTrigger: {
                    trigger: ".pricing-plans",
                    start: "top 80%",
                    toggleActions: "play none none none"
                }
            });
        }

        // FAQ items animation (documentation.html)
        if (document.querySelector('.faq-container')) {
            gsap.from(".faq-item", {
                x: -50,
                opacity: 0,
                duration: 0.6,
                stagger: 0.1,
                scrollTrigger: {
                    trigger: ".faq-container",
                    start: "top 80%",
                    toggleActions: "play none none none"
                }
            });
        }

        // Contact section animation (contact.html)
        if (document.querySelector('.contact-wrapper')) {
            gsap.from(".contact-info, .contact-form", {
                y: 50,
                opacity: 0,
                duration: 0.8,
                stagger: 0.2,
                scrollTrigger: {
                    trigger: ".contact-wrapper",
                    start: "top 80%",
                    toggleActions: "play none none none"
                }
            });
        }

        // Model detail animation (model-detail.html)
        if (document.querySelector('.model-detail-section')) {
            tl.from(".model-detail-text > *", {
                y: 30,
                opacity: 0,
                duration: 0.6,
                stagger: 0.2
            }, "-=0.4");
        }
    }

    // Navigation Menu Animation
    function navAnimation() {
        const mobileToggle = document.getElementById('mobileToggle');
        const mobileMenu = document.getElementById('mobileMenu');

        if (mobileToggle && mobileMenu) {
            mobileToggle.addEventListener('click', () => {
                if (mobileMenu.classList.contains('active')) {
                    gsap.to(mobileMenu, {
                        x: "100%",
                        opacity: 0,
                        duration: 0.5,
                        ease: "power2.in",
                        onComplete: () => {
                            mobileMenu.classList.remove('active');
                        }
                    });
                } else {
                    mobileMenu.classList.add('active');
                    gsap.fromTo(mobileMenu,
                        { x: "100%", opacity: 0 },
                        { x: "0%", opacity: 1, duration: 0.5, ease: "power2.out" }
                    );
                }
            });
        }

        // Nav links hover effect
        document.querySelectorAll('.nav__main-menu a, .nav__mobile-menu a').forEach(link => {
            link.addEventListener('mouseenter', () => {
                gsap.to(link, {
                    scale: 1.1,
                    color: "#007bff",
                    duration: 0.3
                });
            });
            link.addEventListener('mouseleave', () => {
                gsap.to(link, {
                    scale: 1,
                    color: "inherit",
                    duration: 0.3
                });
            });
        });
    }

    // Button Hover Animation
    function buttonAnimation() {
        document.querySelectorAll('.btn').forEach(btn => {
            btn.addEventListener('mouseenter', () => {
                gsap.to(btn, {
                    scale: 1.05,
                    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
                    duration: 0.3
                });
            });
            btn.addEventListener('mouseleave', () => {
                gsap.to(btn, {
                    scale: 1,
                    boxShadow: "none",
                    duration: 0.3
                });
            });
        });
    }

    // Footer Animation
    function footerAnimation() {
        gsap.from(".footer-content > *", {
            y: 30,
            opacity: 0,
            duration: 0.6,
            stagger: 0.2,
            scrollTrigger: {
                trigger: ".footer",
                start: "top 90%",
                toggleActions: "play none none none"
            }
        });
    }

    // FAQ Toggle Animation (documentation.html)
    function faqAnimation() {
        const faqQuestions = document.querySelectorAll('.faq-question');
        faqQuestions.forEach(question => {
            question.addEventListener('click', () => {
                const faqItem = question.parentElement;
                const faqAnswer = faqItem.querySelector('.faq-answer');
                if (faqItem.classList.contains('active')) {
                    gsap.to(faqAnswer, {
                        height: 0,
                        opacity: 0,
                        duration: 0.3,
                        ease: "power2.in"
                    });
                } else {
                    gsap.to(faqAnswer, {
                        height: "auto",
                        opacity: 1,
                        duration: 0.3,
                        ease: "power2.out"
                    });
                }
            });
        });
    }

    // Initialize all animations
    pageEntryAnimation();
    navAnimation();
    buttonAnimation();
    footerAnimation();
    faqAnimation();

    // Handle page transitions
    document.querySelectorAll('a[href]').forEach(link => {
        link.addEventListener('click', (e) => {
            if (link.getAttribute('href').includes('.html') && !link.getAttribute('href').startsWith('#')) {
                e.preventDefault();
                const href = link.getAttribute('href');
                gsap.to('body', {
                    opacity: 0,
                    duration: 0.5,
                    onComplete: () => {
                        window.location.href = href;
                    }
                });
            }
        });
    });
});