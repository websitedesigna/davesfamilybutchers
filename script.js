// DOM Elements
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');
const navLinks = document.querySelectorAll('.nav-link');
const header = document.querySelector('.header');

// Mobile Navigation Toggle with enhanced animations
hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
    
    // Prevent body scroll when menu is open
    document.body.style.overflow = navMenu.classList.contains('active') ? 'hidden' : '';
    
    // Add stagger animation to nav items
    if (navMenu.classList.contains('active')) {
        navLinks.forEach((link, index) => {
            link.style.animationDelay = `${0.1 + index * 0.1}s`;
        });
    }
});

// Close mobile menu when nav link is clicked
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
        document.body.style.overflow = '';
    });
});

// Close mobile menu when clicking outside
document.addEventListener('click', (e) => {
    if (!hamburger.contains(e.target) && !navMenu.contains(e.target)) {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
        document.body.style.overflow = '';
    }
});

// Enhanced header scroll effect with smooth transitions
let lastScrollTop = 0;
const headerHeight = header.offsetHeight;

const handleScroll = () => {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    
    // Add/remove shadow based on scroll position with smooth transition
    if (scrollTop > 10) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
    
    // Hide/show header on scroll with smooth animation
    if (scrollTop > lastScrollTop && scrollTop > headerHeight) {
        header.style.transform = 'translateY(-100%)';
        header.style.transition = 'transform 0.3s cubic-bezier(0.4, 0, 0.2, 1)';
    } else {
        header.style.transform = 'translateY(0)';
        header.style.transition = 'transform 0.3s cubic-bezier(0.4, 0, 0.2, 1)';
    }
    
    lastScrollTop = scrollTop;
};

// Throttle scroll events for better performance
let ticking = false;
window.addEventListener('scroll', () => {
    if (!ticking) {
        requestAnimationFrame(() => {
            handleScroll();
            ticking = false;
        });
        ticking = true;
    }
});

// Enhanced smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        const targetSection = document.querySelector(targetId);
        
        if (targetSection) {
            const headerOffset = 80;
            const elementPosition = targetSection.offsetTop;
            const offsetPosition = elementPosition - headerOffset;
            
            // Add smooth scroll with easing
            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            });
            
            // Add visual feedback
            this.style.transform = 'scale(0.95)';
            setTimeout(() => {
                this.style.transform = 'scale(1)';
            }, 150);
        }
    });
});

// Enhanced Intersection Observer for animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const animationObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animate-in');
            
            // Add stagger effect for grouped elements
            if (entry.target.classList.contains('product-card')) {
                const cards = document.querySelectorAll('.product-card');
                cards.forEach((card, index) => {
                    if (card === entry.target) {
                        card.style.animationDelay = `${index * 0.1}s`;
                    }
                });
            }
        }
    });
}, observerOptions);

// Observe elements for animation
const animateElements = document.querySelectorAll('.product-card, .feature, .contact-item, .about-image, .section-header');
animateElements.forEach(el => animationObserver.observe(el));

// Enhanced image lazy loading with fade-in effect
const images = document.querySelectorAll('img[loading="lazy"]');
const imageObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const img = entry.target;
            
            // Add loading animation
            img.style.transition = 'all 0.6s cubic-bezier(0.4, 0, 0.2, 1)';
            
            img.addEventListener('load', () => {
                img.classList.add('loaded');
                img.style.opacity = '1';
                img.style.transform = 'scale(1)';
            });
            
            img.addEventListener('error', () => {
                img.style.display = 'none';
                console.log(`Failed to load image: ${img.src}`);
            });
            
            imageObserver.unobserve(img);
        }
    });
});

images.forEach(img => imageObserver.observe(img));

// Enhanced active navigation highlighting with smooth transitions
const sections = document.querySelectorAll('section[id]');
const navItems = document.querySelectorAll('.nav-link');

const updateActiveNav = () => {
    let current = '';
    const scrollPosition = window.pageYOffset + 100;
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;
        
        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
            current = section.getAttribute('id');
        }
    });
    
    navItems.forEach(item => {
        item.classList.remove('active');
        if (item.getAttribute('href') === `#${current}`) {
            item.classList.add('active');
            // Add pulse effect
            item.style.animation = 'pulse 0.3s ease-out';
            setTimeout(() => {
                item.style.animation = '';
            }, 300);
        }
    });
};

window.addEventListener('scroll', updateActiveNav);

// Enhanced product card interactions with 3D effects
const productCards = document.querySelectorAll('.product-card');

productCards.forEach(card => {
    card.addEventListener('mouseenter', (e) => {
        card.style.transition = 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)';
        card.style.transform = 'translateY(-15px) scale(1.03)';
        
        // Add subtle rotation based on mouse position
        const rect = card.getBoundingClientRect();
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;
        const mouseX = e.clientX;
        const mouseY = e.clientY;
        
        const rotateX = (mouseY - centerY) / 20;
        const rotateY = (centerX - mouseX) / 20;
        
        card.style.transform += ` rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
    });
    
    card.addEventListener('mousemove', (e) => {
        const rect = card.getBoundingClientRect();
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;
        const mouseX = e.clientX;
        const mouseY = e.clientY;
        
        const rotateX = (mouseY - centerY) / 30;
        const rotateY = (centerX - mouseX) / 30;
        
        card.style.transform = `translateY(-15px) scale(1.03) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
    });
    
    card.addEventListener('mouseleave', () => {
        card.style.transition = 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)';
        card.style.transform = 'translateY(0) scale(1) rotateX(0deg) rotateY(0deg)';
    });
});

// Enhanced phone number click tracking with visual feedback
const phoneLinks = document.querySelectorAll('a[href^="tel:"]');
phoneLinks.forEach(phoneLink => {
    phoneLink.addEventListener('click', (e) => {
        console.log('Phone number clicked');
        
        // Add visual feedback
        phoneLink.style.transform = 'scale(0.95)';
        phoneLink.style.transition = 'transform 0.1s ease';
        
        setTimeout(() => {
            phoneLink.style.transform = 'scale(1)';
        }, 100);
        
        // Create ripple effect
        const ripple = document.createElement('span');
        ripple.style.cssText = `
            position: absolute;
            border-radius: 50%;
            background: rgba(139, 0, 0, 0.3);
            transform: scale(0);
            animation: ripple 0.6s linear;
            pointer-events: none;
        `;
        
        const rect = phoneLink.getBoundingClientRect();
        const size = Math.max(rect.width, rect.height);
        ripple.style.width = ripple.style.height = size + 'px';
        ripple.style.left = (e.clientX - rect.left - size / 2) + 'px';
        ripple.style.top = (e.clientY - rect.top - size / 2) + 'px';
        
        phoneLink.style.position = 'relative';
        phoneLink.appendChild(ripple);
        
        setTimeout(() => {
            ripple.remove();
        }, 600);
    });
});

// Enhanced current day highlighting with animation
const today = new Date().getDay();
const daysMapping = {
    1: 'Monday',
    2: 'Tuesday',
    3: 'Wednesday',
    4: 'Thursday',
    5: 'Friday',
    6: 'Saturday',
    0: 'Sunday'
};

const currentDay = daysMapping[today];
const tableRows = document.querySelectorAll('.hours-table tbody tr');

tableRows.forEach(row => {
    const dayCell = row.querySelector('td:first-child');
    if (dayCell && dayCell.textContent.trim() === currentDay) {
        row.classList.add('current-day');
        
        // Add entrance animation
        setTimeout(() => {
            row.style.animation = 'pulse 2s ease-in-out infinite';
        }, 500);
    }
});

// Enhanced scroll to top functionality
const scrollToTopBtn = document.createElement('button');
scrollToTopBtn.innerHTML = '↑';
scrollToTopBtn.className = 'scroll-to-top';
scrollToTopBtn.setAttribute('aria-label', 'Scroll to top');

document.body.appendChild(scrollToTopBtn);

const toggleScrollButton = () => {
    if (window.pageYOffset > 300) {
        scrollToTopBtn.style.opacity = '1';
        scrollToTopBtn.style.visibility = 'visible';
        scrollToTopBtn.style.transform = 'translateY(0) scale(1)';
    } else {
        scrollToTopBtn.style.opacity = '0';
        scrollToTopBtn.style.visibility = 'hidden';
        scrollToTopBtn.style.transform = 'translateY(10px) scale(0.8)';
    }
};

window.addEventListener('scroll', toggleScrollButton);

scrollToTopBtn.addEventListener('click', () => {
    // Add click animation
    scrollToTopBtn.style.transform = 'translateY(-5px) scale(1.1)';
    
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
    
    setTimeout(() => {
        scrollToTopBtn.style.transform = 'translateY(0) scale(1)';
    }, 200);
});

// Enhanced keyboard navigation support
document.addEventListener('keydown', (e) => {
    // Close mobile menu with Escape key
    if (e.key === 'Escape' && navMenu.classList.contains('active')) {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
        document.body.style.overflow = '';
    }
    
    // Scroll to top with Home key
    if (e.key === 'Home' && e.ctrlKey) {
        e.preventDefault();
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    }
    
    // Scroll to bottom with End key
    if (e.key === 'End' && e.ctrlKey) {
        e.preventDefault();
        window.scrollTo({
            top: document.body.scrollHeight,
            behavior: 'smooth'
        });
    }
});

// Enhanced loading states and entrance animations
window.addEventListener('load', () => {
    document.body.classList.add('loaded');
    
    // Stagger entrance animations
    const heroContent = document.querySelector('.hero-content');
    if (heroContent) {
        heroContent.style.opacity = '0';
        heroContent.style.transform = 'translateY(50px)';
        
        setTimeout(() => {
            heroContent.style.transition = 'all 1.2s cubic-bezier(0.4, 0, 0.2, 1)';
            heroContent.style.opacity = '1';
            heroContent.style.transform = 'translateY(0)';
        }, 300);
    }
    
    // Animate sections on load
    const sections = document.querySelectorAll('section');
    sections.forEach((section, index) => {
        section.style.opacity = '0';
        section.style.transform = 'translateY(30px)';
        
        setTimeout(() => {
            section.style.transition = 'all 0.8s cubic-bezier(0.4, 0, 0.2, 1)';
            section.style.opacity = '1';
            section.style.transform = 'translateY(0)';
        }, 100 + index * 100);
    });
});

// Parallax effect for hero background
const hero = document.querySelector('.hero');
if (hero) {
    window.addEventListener('scroll', () => {
        const scrolled = window.pageYOffset;
        const parallax = scrolled * 0.5;
        hero.style.transform = `translateY(${parallax}px)`;
    });
}

// Enhanced button interactions
const buttons = document.querySelectorAll('.btn');
buttons.forEach(button => {
    button.addEventListener('mouseenter', () => {
        button.style.transform = 'translateY(-2px) scale(1.05)';
    });
    
    button.addEventListener('mouseleave', () => {
        button.style.transform = 'translateY(0) scale(1)';
    });
    
    button.addEventListener('mousedown', () => {
        button.style.transform = 'translateY(0) scale(0.98)';
    });
    
    button.addEventListener('mouseup', () => {
        button.style.transform = 'translateY(-2px) scale(1.05)';
    });
});

// Add ripple effect to buttons
buttons.forEach(button => {
    button.addEventListener('click', function(e) {
        const ripple = document.createElement('span');
        const rect = this.getBoundingClientRect();
        const size = Math.max(rect.width, rect.height);
        const x = e.clientX - rect.left - size / 2;
        const y = e.clientY - rect.top - size / 2;
        
        ripple.style.cssText = `
            position: absolute;
            width: ${size}px;
            height: ${size}px;
            left: ${x}px;
            top: ${y}px;
            background: rgba(255, 255, 255, 0.5);
            border-radius: 50%;
            transform: scale(0);
            animation: ripple 0.6s linear;
            pointer-events: none;
        `;
        
        this.style.position = 'relative';
        this.style.overflow = 'hidden';
        this.appendChild(ripple);
        
        setTimeout(() => {
            ripple.remove();
        }, 600);
    });
});

// Add CSS for ripple animation
const style = document.createElement('style');
style.textContent = `
    @keyframes ripple {
        to {
            transform: scale(4);
            opacity: 0;
        }
    }
`;
document.head.appendChild(style);

// Initialize features when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
    console.log('Dave\'s Family Butchers website loaded with enhanced animations');
    
    // Update copyright year
    const currentYear = new Date().getFullYear();
    const copyrightText = document.querySelector('.footer-bottom p');
    if (copyrightText) {
        copyrightText.textContent = `© ${currentYear} Dave's Family Butchers. All rights reserved.`;
    }
    
    // Add loading animation to page
    document.body.style.opacity = '0';
    setTimeout(() => {
        document.body.style.transition = 'opacity 0.5s ease-in-out';
        document.body.style.opacity = '1';
    }, 100);
});

// Performance optimization: Use passive listeners where appropriate
const passiveSupported = (() => {
    let passiveSupported = false;
    try {
        const options = {
            get passive() {
                passiveSupported = true;
                return false;
            }
        };
        window.addEventListener('test', null, options);
        window.removeEventListener('test', null, options);
    } catch (err) {
        passiveSupported = false;
    }
    return passiveSupported;
})();

// Add smooth reveal animations for elements coming into view
const revealElements = document.querySelectorAll('.product-card, .feature, .contact-item');
const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
            revealObserver.unobserve(entry.target);
        }
    });
}, {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
});

revealElements.forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(30px)';
    el.style.transition = 'all 0.6s cubic-bezier(0.4, 0, 0.2, 1)';
    revealObserver.observe(el);
});

// Add hover effects to footer links
const footerLinks = document.querySelectorAll('.footer-section a');
footerLinks.forEach(link => {
    link.addEventListener('mouseenter', () => {
        link.style.transform = 'translateX(5px)';
        link.style.transition = 'transform 0.3s ease';
    });
    
    link.addEventListener('mouseleave', () => {
        link.style.transform = 'translateX(0)';
    });
});
