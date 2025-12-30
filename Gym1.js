
    
        // Mobile Menu Toggle
         const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
         const nav = document.querySelector('nav');
         
         mobileMenuBtn.addEventListener('click', () => {
             nav.classList.toggle('active');
         });
 
         // Close mobile menu when clicking on a link
         const navLinks = document.querySelectorAll('nav a');
         navLinks.forEach(link => {
             link.addEventListener('click', () => {
                 nav.classList.remove('active');
             });
         });
 
 
 // Testimonial Slider
         const testimonials = document.querySelectorAll('.testimonial');
         const dots = document.querySelectorAll('.slider-dot');
         let currentTestimonial = 0;
 
         function showTestimonial(index) {
             testimonials.forEach(testimonial => {
                 testimonial.classList.remove('active');
             });
             dots.forEach(dot => {
                 dot.classList.remove('active');
             });
             
             testimonials[index].classList.add('active');
             dots[index].classList.add('active');
             currentTestimonial = index;
         }
 
         dots.forEach(dot => {
             dot.addEventListener('click', () => {
                 const index = parseInt(dot.getAttribute('data-index'));
                 showTestimonial(index);
             });
         });
 
 
         // Auto-rotate testimonials
 
         setInterval(() => {
             currentTestimonial = (currentTestimonial + 1) % testimonials.length;
             showTestimonial(currentTestimonial);
         }, 5000);
 
         // Form Submission
         const contactForm = document.getElementById('contactForm');
         contactForm.addEventListener('submit', (e) => {
             e.preventDefault();
             alert('Thank you for your message! GizeGym Silemetu Enamesgnalen.');
             contactForm.reset();
         });
 
         // Smooth Scrolling for Anchor Links
         document.querySelectorAll('a[href^="#"]').forEach(anchor => {
             anchor.addEventListener('click', function (e) {
                 e.preventDefault();
                 
                 const targetId = this.getAttribute('href');
                 if(targetId === '#') return;
                 
                 const targetElement = document.querySelector(targetId);
                 if(targetElement) {
                     window.scrollTo({
                         top: targetElement.offsetTop - 80,
                         behavior: 'smooth'
                     });
                 }
             });
         });
     