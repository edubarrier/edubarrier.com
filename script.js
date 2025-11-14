// EduBarrier Website JavaScript

// Mobile Menu Toggle - Production Version
(function() {
    'use strict';
    
    window.addEventListener('load', function() {
        var toggle = document.querySelector('.mobile-menu-toggle');
        var menu = document.querySelector('.nav-links');
        
        if (!toggle || !menu) return;
        
        toggle.addEventListener('click', function(e) {
            e.preventDefault();
            e.stopPropagation();
            
            var isOpen = menu.classList.contains('active');
            if (isOpen) {
                menu.classList.remove('active');
                toggle.classList.remove('active');
            } else {
                menu.classList.add('active');
                toggle.classList.add('active');
            }
        });
        
        // Close menu when clicking a link
        var links = menu.querySelectorAll('a');
        links.forEach(function(link) {
            link.addEventListener('click', function() {
                menu.classList.remove('active');
                toggle.classList.remove('active');
            });
        });
    });
})();

// Contact Form Handling
var contactForm = document.getElementById('contactForm');
if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        var formMessage = document.getElementById('formMessage');
        var formData = new FormData(contactForm);
        
        var firstName = formData.get('firstName');
        var lastName = formData.get('lastName');
        var email = formData.get('email');
        var inquiryType = formData.get('inquiryType');
        var message = formData.get('message');
        
        if (!firstName || !lastName || !email || !inquiryType || !message) {
            formMessage.className = 'form-message error';
            formMessage.textContent = 'Please fill in all required fields.';
            return;
        }
        
        var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            formMessage.className = 'form-message error';
            formMessage.textContent = 'Please enter a valid email address.';
            return;
        }
        
        formMessage.className = 'form-message success';
        formMessage.textContent = 'Thank you for your message! We\'ll get back to you within 1-2 business days.';
        contactForm.reset();
        formMessage.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    });
}

// Newsletter Form Handling
var newsletterForm = document.getElementById('newsletterForm');
if (newsletterForm) {
    newsletterForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        var emailInput = this.querySelector('input[type="email"]');
        var email = emailInput.value;
        
        var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            alert('Please enter a valid email address.');
            return;
        }
        
        alert('Thank you for subscribing! You\'ll receive updates about our product launch and company news.');
        newsletterForm.reset();
    });
}

// Smooth Scrolling
document.querySelectorAll('a[href^="#"]').forEach(function(anchor) {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        var target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Navbar Scroll Effect
var lastScroll = 0;
var navbar = document.querySelector('.navbar');

window.addEventListener('scroll', function() {
    var currentScroll = window.pageYOffset;
    
    if (currentScroll > 100) {
        navbar.style.boxShadow = '0 4px 6px -1px rgba(0, 0, 0, 0.1)';
    } else {
        navbar.style.boxShadow = '0 1px 2px 0 rgba(0, 0, 0, 0.05)';
    }
    
    lastScroll = currentScroll;
});

// Intersection Observer for Animations
var observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

var observer = new IntersectionObserver(function(entries) {
    entries.forEach(function(entry) {
        if (entry.isIntersecting) {
            entry.target.classList.add('fade-in');
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

document.addEventListener('DOMContentLoaded', function() {
    var animateElements = document.querySelectorAll(
        '.stat-card, .feature-card, .market-card, .value-card, .highlight-card, .advantage-card, .milestone-card, .faq-item'
    );
    
    animateElements.forEach(function(element) {
        observer.observe(element);
    });
});

// Form Input Focus Effects
document.querySelectorAll('.form-group input, .form-group textarea, .form-group select').forEach(function(input) {
    input.addEventListener('focus', function() {
        this.parentElement.style.transform = 'translateY(-2px)';
    });
    
    input.addEventListener('blur', function() {
        this.parentElement.style.transform = 'translateY(0)';
    });
});
