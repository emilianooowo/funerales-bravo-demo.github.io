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

function initParallax() {
    const section = document.getElementById('instalaciones-bg');
    if (!section) return;

    const isMobile = window.innerWidth <= 768;

    if (section._parallaxHandler) {
        window.removeEventListener('scroll', section._parallaxHandler);
        section._parallaxHandler = null;
    }

    if (!isMobile) {
        let ticking = false;
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;
        const windowHeight = window.innerHeight;

        function updateParallax() {
            const scrolled = window.pageYOffset;
            const sectionInView = scrolled > (sectionTop - windowHeight * 0.8) &&
                scrolled < (sectionTop + sectionHeight);

            if (sectionInView) {
                const relativeScroll = scrolled - sectionTop + windowHeight;
                const parallaxOffset = relativeScroll * 0.3;
                section.style.backgroundPosition = `center ${-parallaxOffset}px`;
            }

            ticking = false;
        }

        function requestTick() {
            if (!ticking) {
                if (window.requestAnimationFrame) {
                    requestAnimationFrame(updateParallax);
                } else {
                    updateParallax();
                }
                ticking = true;
            }
        }

        section._parallaxHandler = requestTick;
        window.addEventListener('scroll', requestTick);

        updateParallax();
    } else {
        section.style.backgroundPosition = 'center center';
    }
}

document.addEventListener('DOMContentLoaded', initParallax);
window.addEventListener('resize', () => {
    initParallax();
});

(() => {
    const postsScroll = document.getElementById('postsScroll');
    const scrollLeftBtn = document.getElementById('scrollLeft');
    const scrollRightBtn = document.getElementById('scrollRight');
    const followBtn = document.getElementById('followBtn');

    if (!postsScroll || !scrollLeftBtn || !scrollRightBtn || !followBtn) return;

    // Scroll hacia la izquierda
    scrollLeftBtn.addEventListener('click', () => {
        postsScroll.scrollLeft -= 340;
    });

    // Scroll hacia la derecha
    scrollRightBtn.addEventListener('click', () => {
        postsScroll.scrollLeft += 340;
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