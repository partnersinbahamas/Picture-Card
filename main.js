'use strict';

const slides = document.querySelectorAll('.slide');

slides.forEach((slide) => {
    slide.addEventListener('click', (event) => {
      clearActive();
      slide.classList.add('active');
    })
})

function clearActive() {
    slides.forEach((slide) => {
        if(slide.classList.contains('active')) {
            slide.classList.remove('active');
        }
    })
}
