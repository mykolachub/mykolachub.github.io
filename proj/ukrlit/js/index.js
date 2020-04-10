'use strict';

document.addEventListener('DOMContentLoaded', ()=>{
    console.log('welcome to my console!');

    // DOM variables
    let section1 = document.getElementById('section-1'),
        wrapper = document.getElementById('wrapper');

    let scrolled,
        position;

    // internal variables
    let currentPos;

    position = section1.getBoundingClientRect().top;
    console.log('position: ', position);

    window.addEventListener('scroll', ()=>{
        scrolled = window.pageYOffset;
        position = section1.getBoundingClientRect().top;
        if (scrolled < position) {
            console.log('<');
            wrapper.classList.remove('change-color-pink');
        }
        else{
            console.log('=!');
            wrapper.classList.add('change-color-pink');
        }

    });

    // function describes the way it moves down to necessary section(target)
    function scrollToSection(target) { 
        currentPos = target.getBoundingClientRect().top;
        console.log('currentPos:',  currentPos);
            window.scrollTo({
            top: currentPos,
            behavior: 'smooth'
            }); 
    };

    // function describes the way it moves up to top
    function moveToTop() { 
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        }); 
    };

    // wow.js
    //new WOW().init();
});

