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
    // console.log(e.target);
    let targetSlide = e.target.dataset.index;
    gotToSlide(targetSlide);
    // acitivateDot(targetSlide);
    clearInterval(autoPlay);
});

btnLeft.addEventListener('click', nextSlide);
btnRight.addEventListener('click', previousSlide);


// console.log(slides);
let currSlide = 0;
let maxSlide = slides.length - 1;
slides.forEach((s, i) => {
    s.style.transform = `translateX(${100 * i}%)`;
});


function acitivateDot(index) {
    dots.forEach((d, i) => {
        d.classList.remove('dot--active');
        if (i == index) d.classList.add('dot--active');
    });
};

function gotToSlide(slide) {
    slides.forEach((s, i) => {
        s.style.transform = `translateX(${100 * (i - slide)}%)`;
    });
    acitivateDot(slide);
}

const autoPlay = setInterval(() => {
    currSlide++;
    if (currSlide > maxSlide) currSlide = 0;
    gotToSlide(currSlide);
}, 4000);

function nextSlide() {
    currSlide++;
    if (currSlide > maxSlide) currSlide = 0;
    gotToSlide(currSlide);
    clearInterval(autoPlay);
}

function previousSlide() {
    currSlide--;
    if (currSlide < 0) currSlide = maxSlide;
    gotToSlide(currSlide);
    clearInterval(autoPlay);
}

// Text changing
const h1All = document.querySelectorAll(".span__color--blue");
let currH1 = 0, h1Length = h1All.length;

h1All.forEach((h1, i) => {
    h1.style.transform = `translateY(${i * 100}%)`;
})

setInterval(function () {
    currH1 += 1;

    if (currH1 === h1Length) currH1 = 0;
    h1All.forEach((h1, i) => {
        h1.style.opacity = 1
        if (currH1 != i)
            h1.style.opacity = 0;
        h1.style.transform = `translateY(${100 * (i - currH1)}%)`;
    });
}, 2000);


// Hamburger Animation
const hamburger = document.querySelector(".hamburger");
const modalMenu = document.querySelector(".menu--modal");
console.log(hamburger);

hamburger.addEventListener("click", function () {
    hamburger.classList.toggle("is-active");
    modalMenu.classList.toggle('active--modal');
});

modalMenu.addEventListener('click', (e) => {
    modalMenu.classList.toggle('active--modal');
});



// Sticky Navigation

const heroPage = document.querySelector('.hero--section');
const navBar = document.querySelector('.nav');
console.log(heroPage);


let heroObserver = new IntersectionObserver(function (entries, observer) {
    const [data] = entries;
    if (!data.isIntersecting) {
        navBar.classList.add('is--sticky');
    } else {
        navBar.classList.remove('is--sticky');
    }
    console.log(data);
    console.log(entries);
    console.log(`hello`);
}, {
    root: null,
    threshold: 0.1,
    rootMargin: `-100px`,
});

heroObserver.observe(heroPage);