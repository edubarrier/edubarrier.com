// EduBarrier Website JavaScript

// Mobile Menu Toggle
document.addEventListener('DOMContentLoaded', function() {
    const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
    const navLinks = document.querySelector('.nav-links');
    
    if (mobileMenuToggle) {
        mobileMenuToggle.addEventListener('click', function() {
            navLinks.classList.toggle('active');
            this.classList.toggle('active');
        });
        
        // Close mobile menu when clicking on a link
        const navLinkItems = navLinks.querySelectorAll('a');
        navLinkItems.forEach(link => {
            link.addEventListener('click', function() {
                navLinks.classList.remove('active');
                mobileMenuToggle.classList.remove('active');
            });
        });
        
        // Close mobile menu when clicking outside
        document.addEventListener('click', function(event) {
            if (!event.target.closest('.nav-content')) {
                navLinks.classList.remove('active');
                mobileMenuToggle.classList.remove('active');
            }
        });
    }
});

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
        
        // In production, you would do something like:
        /*
        fetch('/api/contact', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                firstName: firstName,
                lastName: lastName,
                email: email,
                company: formData.get('company'),
                inquiryType: inquiryType,
                message: message,
                newsletter: formData.get('newsletter') === 'on'
            })
        })
        .then(response => response.json())
        .then(data => {
            formMessage.className = 'form-message success';
            formMessage.textContent = 'Thank you for your message! We\'ll get back to you within 1-2 business days.';
            contactForm.reset();
        })
        .catch(error => {
            formMessage.className = 'form-message error';
            formMessage.textContent = 'There was an error sending your message. Please try again or email us directly.';
        });
        */
        
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
        // In production, you would send this to your email service (Mailchimp, SendGrid, etc.)
        
        alert('Thank you for subscribing! You\'ll receive updates about our product launch and company news.');
        newsletterForm.reset();
        
        // In production, you would do something like:
        /*
        fetch('/api/newsletter', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ email: email })
        })
        .then(response => response.json())
        .then(data => {
            alert('Thank you for subscribing!');
            newsletterForm.reset();
        })
        .catch(error => {
            alert('There was an error. Please try again.');
        });
        */
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

// Print function for investor materials
function printPage() {
    window.print();
}

// Copy to clipboard functionality (for sharing)
function copyToClipboard(text) {
    if (navigator.clipboard) {
        navigator.clipboard.writeText(text).then(() => {
            console.log('Copied to clipboard');
        });
    }
}

// WordPress Export Helper Comments
/*
WORDPRESS MIGRATION NOTES:

1. PAGES TO CREATE:
   - Home (index.html)
   - About (about.html)
   - Investors (investors.html)
   - Contact (contact.html)

2. CONTACT FORM:
   Use Contact Form 7 or WPForms plugin
   Map form fields to match structure in contact.html

3. NEWSLETTER:
   Use Mailchimp for WordPress or Newsletter plugin
   Connect newsletter form to your email service

4. THEME CUSTOMIZATION:
   - Copy colors from CSS variables to WordPress customizer
   - Use custom CSS section for brand-specific styling
   - Consider using a page builder like Elementor for easier editing

5. CUSTOM CSS:
   Copy the entire styles.css into WordPress Customizer > Additional CSS
   Or enqueue as a separate stylesheet in functions.php

6. ASSETS:
   - Upload all SVG graphics as media files
   - Use inline SVG code for interactive elements
   - Optimize images before uploading

7. RECOMMENDED PLUGINS:
   - Contact Form 7 (forms)
   - Yoast SEO (SEO optimization)
   - WP Rocket (performance)
   - Wordfence (security)
   - MailChimp for WordPress (newsletter)

8. RESPONSIVE TESTING:
   Test on multiple devices and browsers after migration

9. ANALYTICS:
   Add Google Analytics code in header/footer
   Or use Google Site Kit plugin

10. SECURITY:
    - Ensure SSL certificate is active
    - Keep WordPress and plugins updated
    - Use strong passwords
    - Enable two-factor authentication
*/

console.log('EduBarrier Website Loaded Successfully');
