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

// Slider animation
const wrapperSlider = document.querySelector('.wrapper--left');
const btnLeft = document.querySelector('.btn--left');
const btnRight = document.querySelector('.btn--right');
const slides = document.querySelectorAll('.slider--img');
const dotContainer = document.querySelector('.dot--container');
const dots = document.querySelectorAll('.dot');
console.log(dotContainer);


dotContainer.addEventListener('click', (e) => {
    dots.forEach((d, i) => {
        d.classList.remove('dot--active');
    });
    console.log(e.target);
    let targetSlide = e.target.dataset.index;
    console.log(targetSlide);
    gotToSlide(targetSlide);
    e.target.classList.add('dot--active');
    clearInterval(autoPlay);
});

// console.log(slides);
let currSlide = 0;
let maxSlide = slides.length - 1;
console.log(maxSlide);
slides.forEach((s, i) => {
    s.style.transform = `translateX(${100 * i}%)`;
});


function gotToSlide(slide) {
    slides.forEach((s, i) => {
        console.log(i, s);
        s.style.transform = `translateX(${100 * (i - slide)}%)`;
    });
}

const autoPlay = setInterval(() => {
    currSlide++;
    if (currSlide > maxSlide) currSlide = 0;
    gotToSlide(currSlide);
}, 4000);