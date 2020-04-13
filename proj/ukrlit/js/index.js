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

    let btnStartHead = document.getElementById('start-header'),
        btnStartprimary = document.getElementById('primary-btn-start');

    btnStartprimary.addEventListener('click', ()=>{
          window.open("./main.html");
      });
        
    btnStartHead.addEventListener('click', ()=>{
        window.open("./main.html");
    });

    if (window.matchMedia("(max-width: 1440px)").matches) {
        /* the viewport is less than 1440px wide */
        document.getElementById('header__svg-shape').setAttribute("viewBox", "0 0 570 570");
        console.log('max-width: 1440px');
        document.getElementById('header__svg-pos').setAttribute("transform", "translate(260,250)");
      }
      else {
        /* the viewport is at least 1440px wide */  
        document.getElementById('header__svg-shape').setAttribute("viewBox", "0 0 600 600");
        document.getElementById('header__svg-pos').setAttribute("transform", "translate(300,300)");
      }

      if (window.matchMedia("(max-width: 1024px)").matches) {
        document.getElementById('header__svg-shape').setAttribute("viewBox", "0 0 520 520");
        document.getElementById('header__svg-pos').setAttribute("transform", "translate(260,255)");
        console.log('max-width: 1024px');
      }

      if (window.matchMedia("(max-width: 768px)").matches) {
        document.getElementById('header__svg-shape').setAttribute("viewBox", "0 0 450 450");
        document.getElementById('header__svg-pos').setAttribute("transform", "translate(250,220)");
        console.log('max-width: 1024px');
      }

      if (window.matchMedia("(max-width: 767px)").matches) {
        document.getElementById('header__svg-shape').setAttribute("viewBox", "0 0 430 430");
        document.getElementById('header__svg-pos').setAttribute("transform", "translate(250,210)");
        console.log('max-width: 1024px');
      }

      if (window.matchMedia("(max-width: 678px)").matches) {
        document.getElementById('header__svg-shape').setAttribute("viewBox", "0 0 470 470");
        document.getElementById('header__svg-pos').setAttribute("transform", "translate(250,220)");
        console.log('max-width: 1024px');
      }

      if (window.matchMedia("(max-width: 600px)").matches) {
        document.getElementById('header__svg-shape').setAttribute("viewBox", "0 0 500 500");
        document.getElementById('header__svg-pos').setAttribute("transform", "translate(270,230)");
        console.log('max-width: 1024px');
      }

      if (window.matchMedia("(max-width: 490px)").matches) {
        document.getElementById('header__svg-shape').setAttribute("viewBox", "0 0 550 550");
        document.getElementById('header__svg-pos').setAttribute("transform", "translate(290,250)");
        console.log('max-width: 1024px');
      }

      if (window.matchMedia("(max-width: 444px)").matches) {
        document.getElementById('header__svg-shape').setAttribute("viewBox", "0 0 520 520");
        document.getElementById('header__svg-pos').setAttribute("transform", "translate(290,250)");
        console.log('max-width: 1024px');
      }

      if (window.matchMedia("(max-width: 375px)").matches) {
        document.getElementById('header__svg-shape').setAttribute("viewBox", "0 0 540 540");
        document.getElementById('header__svg-pos').setAttribute("transform", "translate(280,250)");
        console.log('max-width: 1024px');
      }

      if (window.matchMedia("(max-width: 320px)").matches) {
        document.getElementById('header__svg-shape').setAttribute("viewBox", "0 0 520 520");
        document.getElementById('header__svg-pos').setAttribute("transform", "translate(280,210)");
        console.log('max-width: 1024px');
      }


    // wow.js
    //new WOW().init();
});

