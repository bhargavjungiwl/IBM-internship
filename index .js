// scripts.js

document.addEventListener('DOMContentLoaded', function() {
    console.log("Quality Education page loaded successfully!");

    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Form validation and feedback
    const form = document.getElementById('contactForm');
    const feedback = document.getElementById('formFeedback');

    form.addEventListener('submit', function(event) {
        event.preventDefault();
        
        // Simple form validation
        const name = document.getElementById('name').value.trim();
        const email = document.getElementById('email').value.trim();
        const message = document.getElementById('message').value.trim();

        if (name === "" || email === "" || message === "") {
            feedback.textContent = "All fields are required.";
            feedback.classList.add('text-danger');
        } else if (!validateEmail(email)) {
            feedback.textContent = "Please enter a valid email address.";
            feedback.classList.add('text-danger');
        } else {
            feedback.textContent = "Thank you for your message! We'll get back to you soon.";
            feedback.classList.remove('text-danger');
            feedback.classList.add('text-success');
            // Clear the form fields
            form.reset();
        }
    });

    function validateEmail(email) {
        // Simple email validation
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(String(email).toLowerCase());
    }

    // Scroll-to-top button functionality
    const scrollToTopBtn = document.createElement('button');
    scrollToTopBtn.textContent = '↑';
    scrollToTopBtn.classList.add('scroll-to-top');
    document.body.appendChild(scrollToTopBtn);

    scrollToTopBtn.addEventListener('click', function() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });

    // Show/hide scroll-to-top button based on scroll position
    window.addEventListener('scroll', function() {
        if (window.scrollY > 300) {
            scrollToTopBtn.style.opacity = 1;
        } else {
            scrollToTopBtn.style.opacity = 0;
        }
    });
});
