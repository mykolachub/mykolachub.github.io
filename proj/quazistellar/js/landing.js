"use strict";

document.addEventListener('DOMContentLoaded', () =>{
    console.log('welcome to my console');

    let fisrtMoreBtn = document.getElementById('fisrtMoreBtn'),
        footerUpBtn = document.getElementById('footerUpBtn'),
        mainSection = document.getElementById('main');

    let scrolled, timer, targetPosition;

    fisrtMoreBtn.addEventListener('click', ()=>{
        mainSection.classList.remove('main-off');
        targetPosition = mainSection.getBoundingClientRect().y;
        scrolled = window.pageYOffset;
        scrollToSection();
    });

    footerUpBtn.addEventListener('click', ()=>{
        scrolled = window.pageYOffset;
    	scrollToTop();
    });
    
    function scrollToTop() {
        if (scrolled > 0) {
            window.scrollTo(0, scrolled);
            scrolled = scrolled - 10;
            timer = setTimeout(scrollToTop, 1);
        }
        else{
            clearTimeout(timer);
            window.scrollTo(0,0);
        }
    };

    function scrollToSection() {
        if (scrolled < targetPosition) {
            window.scrollTo(0, scrolled);
            scrolled = scrolled + 5;
            timer = setTimeout(scrollToSection, 1);
        }
        else{
            window.scrollTo(0, targetPosition);
            clearTimeout(timer);
        }

    }

});