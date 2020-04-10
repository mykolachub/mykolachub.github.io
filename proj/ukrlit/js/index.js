'use strict';

document.addEventListener('DOMContentLoaded', ()=>{
    console.log('welcome to my console!');

    // DOM variables
    let section1 = document.getElementById('section-1'),
        section2 = document.getElementById('section-2'),
        wrapper = document.getElementById('wrapper'),
        sectionNightPic = document.getElementById('section-night-pic'),
        sectionNightBtn = document.getElementById('section__btn-darkmd');

    let scrolled,
        position1,position2,position3;

    // internal variables
    let currentPos;


    window.addEventListener('scroll', ()=>{
        scrolled = window.pageYOffset;
        position1 = section1.getBoundingClientRect().top;
        //position2 = section2.getBoundingClientRect().top;
        
        /*if (scrolled < position1) {
            wrapper.classList.remove('change-color-pink');
            section1.classList.remove('section-color-change');

        }
        else{
            wrapper.classList.add('change-color-pink');
            section1.classList.add('section-color-change');
        }*/

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


    let checker = 0
    sectionNightBtn.addEventListener('click', ()=>{
        sectionNightBtn.classList.toggle('section__btn-darkmd-on');
        if (checker == 1) {
            sectionNightPic.src = 'imgs/index/screenshots/screenshot4.jpg';
            checker = 0;
        } else {
            sectionNightPic.src = 'imgs/index/screenshots/screenshot5.jpg';
            checker++;
        }
        
    });

    // wow.js
    //new WOW().init();
});

