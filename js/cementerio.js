document.addEventListener('DOMContentLoaded', function () {
    const menuItems = document.querySelectorAll('.menu-item');
    const serviceContents = document.querySelectorAll('.service-content');
    const defaultContent = document.querySelector('.default-content');

    menuItems.forEach(item => {
        item.addEventListener('click', function (e) {
            e.preventDefault();

            menuItems.forEach(menuItem => menuItem.classList.remove('active'));
            this.classList.add('active');

            serviceContents.forEach(content => content.classList.remove('active'));
            if (defaultContent) defaultContent.style.display = 'none';

            const serviceType = this.getAttribute('data-service');

            if (serviceType === "bienvenida" && defaultContent) {
                defaultContent.style.display = 'block';
            } else {
                const targetContent = document.querySelector(
                    `[data-service="${serviceType}"].service-content`
                );
                if (targetContent) targetContent.classList.add('active');
            }
        });
    });
});

document.addEventListener("DOMContentLoaded", () => {
    const elements = document.querySelectorAll(".block2");

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("animate");
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.2 });

    elements.forEach(el => observer.observe(el));
});

const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');

            if (entry.target.classList.contains('process-section')) {
                animateTimeline();
            }
        }
    });
}, observerOptions);

document.querySelectorAll('.fade-in').forEach(el => {
    observer.observe(el);
});

function animateTimeline() {
    const timelineLine = document.getElementById('timelineLine');
    const steps = document.querySelectorAll('.step');

    setTimeout(() => {
        timelineLine.classList.add('animate');
    }, 500);

    steps.forEach((step, index) => {
        setTimeout(() => {
            step.classList.add('animate');
        }, 800 + (index * 400));
    });
}