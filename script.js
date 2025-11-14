// EduBarrier Website JavaScript

// Mobile Menu Toggle - With touch event support
(function() {
    'use strict';
    
    function initMobileMenu() {
        const toggle = document.querySelector('.mobile-menu-toggle');
        const menu = document.querySelector('.nav-links');
        
        if (!toggle || !menu) {
            console.log('Mobile menu elements not found');
            return;
        }
        
        console.log('Mobile menu initialized');
        
        // Function to toggle menu
        function toggleMenu(e) {
            e.preventDefault();
            e.stopPropagation();
            
            const isOpen = menu.classList.contains('active');
            
            if (isOpen) {
                menu.classList.remove('active');
                toggle.classList.remove('active');
                console.log('Menu closed');
            } else {
                menu.classList.add('active');
                toggle.classList.add('active');
                console.log('Menu opened');
            }
        }
        
        // Add both click and touch events for better mobile support
        toggle.addEventListener('click', toggleMenu);
        toggle.addEventListener('touchend', toggleMenu);
        
        // Close menu when clicking a link
        const links = menu.querySelectorAll('a');
        links.forEach(function(link) {
            link.addEventListener('click', function() {
                menu.classList.remove('active');
                toggle.classList.remove('active');
            });
            link.addEventListener('touchend', function() {
                menu.classList.remove('active');
                toggle.classList.remove('active');
            });
        });
        
        // Close menu when clicking/touching outside
        setTimeout(function() {
            document.addEventListener('click', closeIfOutside);
            document.addEventListener('touchend', closeIfOutside);
            
            function closeIfOutside(e) {
                if (!toggle.contains(e.target) && !menu.contains(e.target)) {
                    menu.classList.remove('active');
                    toggle.classList.remove('active');
                }
            }
        }, 100);
    }
    
    // Initialize when DOM is ready
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initMobileMenu);
    } else {
        initMobileMenu();
    }
})();

// Contact Form Handling
const contactForm = document.getElementById('contactForm');
if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const formMessage = document.getElementById('formMessage');
        const formData = new FormData(contactForm);
        
        // Basic validation
        const firstName = formData.get('firstName');
        const lastName = formData.get('lastName');
        const email = formData.get('email');
        const inquiryType = formData.get('inquiryType');
        const message = formData.get('message');
        
        if (!firstName || !lastName || !email || !inquiryType || !message) {
            formMessage.className = 'form-message error';
            formMessage.textContent = 'Please fill in all required fields.';
            return;
        }
        
        // Email validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            formMessage.className = 'form-message error';
            formMessage.textContent = 'Please enter a valid email address.';
            return;
        }
        
        // Simulate form submission (replace with actual form handling)
        // In production, you would send this data to your backend or email service
        
        // For demonstration, show success message
        formMessage.className = 'form-message success';
        formMessage.textContent = 'Thank you for your message! We\'ll get back to you within 1-2 business days.';
        
        // Reset form
        contactForm.reset();
        
        // Scroll to message
        formMessage.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    });
}

// Newsletter Form Handling
const newsletterForm = document.getElementById('newsletterForm');
if (newsletterForm) {
    newsletterForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const emailInput = this.querySelector('input[type="email"]');
        const email = emailInput.value;
        
        // Email validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            alert('Please enter a valid email address.');
            return;
        }
        
        // Simulate newsletter signup (replace with actual signup handling)
        alert('Thank you for subscribing! You\'ll receive updates about our product launch and company news.');
        newsletterForm.reset();
    });
}

// Smooth Scrolling for Internal Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Navbar Scroll Effect
let lastScroll = 0;
const navbar = document.querySelector('.navbar');

window.addEventListener('scroll', function() {
    const currentScroll = window.pageYOffset;
    
    if (currentScroll > 100) {
        navbar.style.boxShadow = '0 4px 6px -1px rgba(0, 0, 0, 0.1)';
    } else {
        navbar.style.boxShadow = '0 1px 2px 0 rgba(0, 0, 0, 0.05)';
    }
    
    lastScroll = currentScroll;
});

// Intersection Observer for Fade-in Animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('fade-in');
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Observe elements for animation
document.addEventListener('DOMContentLoaded', function() {
    const animateElements = document.querySelectorAll(
        '.stat-card, .feature-card, .market-card, .value-card, .highlight-card, .advantage-card, .milestone-card, .faq-item'
    );
    
    animateElements.forEach(element => {
        observer.observe(element);
    });
});

// Form Input Focus Effects
document.querySelectorAll('.form-group input, .form-group textarea, .form-group select').forEach(input => {
    input.addEventListener('focus', function() {
        this.parentElement.style.transform = 'translateY(-2px)';
    });
    
    input.addEventListener('blur', function() {
        this.parentElement.style.transform = 'translateY(0)';
    });
});

// Add hover effect to cards
document.addEventListener('DOMContentLoaded', function() {
    const cards = document.querySelectorAll(
        '.stat-card, .feature-card, .market-card, .value-card, .highlight-card, .advantage-card'
    );
    
    cards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transition = 'all 0.3s ease';
        });
    });
});

console.log('EduBarrier Website Loaded Successfully');
