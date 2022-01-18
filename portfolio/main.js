import 'normalize.css'
import './style.css'

const allSections = document.querySelectorAll('.section');

// Buttery Smooth 💫 Reveal Animation

const revealSection = function (entries, observer) {
    const [entry] = entries;

    if (!entry.isIntersecting) return;

    entry.target.classList.remove('section--hidden');
    observer.unobserve(entry.target);
};

const sectionObserver = new IntersectionObserver(revealSection, {
    root: null,
    threshold: 0.15,
});
allSections.forEach(function (section) {
    sectionObserver.observe(section);
    section.classList.add('section--hidden');
});

// Lazy loading images
const imgTargets = document.querySelectorAll('img[data-src]');

const loadImg = function (entries, observer) {
    const [entry] = entries;

    if (!entry.isIntersecting) return;

    // Replace src with data-src
    entry.target.src = entry.target.dataset.src;

    entry.target.addEventListener('load', function () {
        entry.target.classList.remove('lazy-img');
    });

    observer.unobserve(entry.target);
};

const imgObserver = new IntersectionObserver(loadImg, {
    root: null,
    threshold: 0,
    rootMargin: '200px',
});

imgTargets.forEach(img => imgObserver.observe(img));


// Lazy loading for Backgrounds
(() => {
    const imgTargets = document.querySelectorAll('img[data-background]');

    const loadImg = function (entries, observer) {
        const [entry] = entries;

        if (!entry.isIntersecting) return;

        // Replace src with data-src
        entry.target.src = entry.target.dataset.background;
        entry.target.addEventListener('load', function () {
            entry.target.classList.remove('lazy-img');
        });
        observer.unobserve(entry.target);
    };

    const imgObserver = new IntersectionObserver(loadImg, {
        root: null,
        threshold: 0,
        rootMargin: '200px',
    });
    imgTargets.forEach(img => imgObserver.observe(img));
})();