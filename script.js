// script.js – Glassy SaaS Landing Page interactions

document.addEventListener('DOMContentLoaded', function () {
    // FAQ accordion behavior
    const faqItems = document.querySelectorAll('.faq-item');
    faqItems.forEach(item => {
        const question = item.querySelector('.faq-question');
        const answer = item.querySelector('.faq-answer');
        question.addEventListener('click', () => {
            // Toggle active class
            item.classList.toggle('active');
        });
    });
});
