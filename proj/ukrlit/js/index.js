'use strict';

document.addEventListener('DOMContentLoaded', ()=>{
    console.log('welcome to my console!');

    // DOM variables
    let menuBtn = document.getElementById('menu-btn'),
        menuWindow = document.getElementById('menu-modal'),
        modalBtnToHome = document.getElementById('menu-a-home'),
        modalBtnToMore = document.getElementById('menu-a-more'),
        windowBtnToMore = document.getElementById('btn-more'),
        sectionMore = document.getElementById('fisrt'),
        modalBtnToAbout = document.getElementById('menu-a-about'),
        sectionAbout = document.getElementById('about');


    // internal variables
    let currentPos;

    // function describes closing modal `menu` window;
    function closeModalMenu(params) {
        menuBtn.classList.toggle('header__menu-active');
        menuWindow.classList.toggle('menu-active');
    }

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

    // typed.js
    let typed = new Typed('#typed-text', {
        strings: ['Хто ми?', 'Чому цей проект безкоштовний?', 'Навіщо взагалі цей проект?'],
        loop: true,
        typeSpeed: 80,
        backSpeed: 40
    });

    // wow.js
    new WOW().init();

    menuBtn.addEventListener('click', ()=>{
        closeModalMenu();
    });

    modalBtnToHome.addEventListener('click', () =>{
        closeModalMenu();
        moveToTop();
    });

    modalBtnToMore.addEventListener('click', () =>{
        closeModalMenu();
        scrollToSection(sectionMore);
    });

    windowBtnToMore.addEventListener('click', () =>{
        scrollToSection(sectionMore);
    });


    modalBtnToAbout.addEventListener('click', () =>{
        closeModalMenu();
        scrollToSection(sectionAbout);
    });
});

