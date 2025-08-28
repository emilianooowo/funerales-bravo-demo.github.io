 function scrollCarousel(direction) {
            const grid = document.getElementById('servicios-grid');
            const cardWidth = 350;
            const scrollAmount = cardWidth * direction;
            
            grid.scrollBy({
                left: scrollAmount,
                behavior: 'smooth'
            });
        }

        document.addEventListener('keydown', function(e) {
            if (e.key === 'ArrowLeft') {
                scrollCarousel(-1);
            } else if (e.key === 'ArrowRight') {
                scrollCarousel(1);
            }
        });

        const grid = document.getElementById('servicios-grid');
        const prevArrow = document.querySelector('.carousel-arrow.prev');
        const nextArrow = document.querySelector('.carousel-arrow.next');

        function updateArrows() {
            const isAtStart = grid.scrollLeft <= 0;
            const isAtEnd = grid.scrollLeft >= grid.scrollWidth - grid.clientWidth;
            
            prevArrow.style.opacity = isAtStart ? '0.3' : '1';
            nextArrow.style.opacity = isAtEnd ? '0.3' : '1';
            
            prevArrow.style.pointerEvents = isAtStart ? 'none' : 'auto';
            nextArrow.style.pointerEvents = isAtEnd ? 'none' : 'auto';
        }

        grid.addEventListener('scroll', updateArrows);
        window.addEventListener('resize', updateArrows);
        updateArrows();

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

(function () {
    'use strict';

    const faqItems = document.querySelectorAll('.faq-item');

    faqItems.forEach(item => {
        const question = item.querySelector('.faq-question');

        question.addEventListener('click', () => {
            const isActive = item.classList.contains('active');

            faqItems.forEach(otherItem => {
                otherItem.classList.remove('active');
            });

            if (!isActive) {
                item.classList.add('active');
            }
        });
    });
})();


let popupTimeout;
let isPopupClosed = false;

function autoShowPopup() {
    popupTimeout = setTimeout(() => {
        if (!isPopupClosed) {
            showPopup();
        }
    }, 3000);
}

function showPopup() {
    const popup = document.getElementById('previsionPopup');
    popup.classList.add('show');
    popup.classList.remove('hide');

    if (typeof gtag !== 'undefined') {
        gtag('event', 'popup_shown', {
            'event_category': 'engagement',
            'event_label': 'prevision_funeraria'
        });
    }
}

function hidePopup() {
    const popup = document.getElementById('previsionPopup');
    popup.classList.add('hide');
    popup.classList.remove('show');
    isPopupClosed = true;

    if (popupTimeout) {
        clearTimeout(popupTimeout);
    }

    if (typeof gtag !== 'undefined') {
        gtag('event', 'popup_closed', {
            'event_category': 'engagement',
            'event_label': 'prevision_funeraria'
        });
    }
}

document.addEventListener('DOMContentLoaded', function () {
    autoShowPopup();
});

document.getElementById('previsionPopup').addEventListener('click', function (e) {
    e.stopPropagation();
});