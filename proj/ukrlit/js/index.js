'use strict';

document.addEventListener('DOMContentLoaded', ()=>{
    console.log('welcome to my console!');

    // DOM variables
    let menuBtn = document.getElementById('menu-btn'),
        menuWindow = document.getElementById('menu-modal'),
        modalBtnToHome = document.getElementById('menu-a-home'),
        modalBtnToMore = document.getElementById('menu-a-more'),
        modalMenuItems = document.querySelectorAll('.menu__item'),
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

    // wow.js
    new WOW().init();


    //


    // func changes menu item name
    if(window.matchMedia('(max-width: 560px)').matches){
       for (let i = 0; i < modalMenuItems.length; i++) {
            modalMenuItems[i].childNodes[0].data = ''; 
            const modalMenuItemsLib = ['Головна', "Про проект", "Про команду", "Розпочати"];
            modalMenuItems[i].childNodes[1].innerHTML = `${modalMenuItemsLib[i]}`;
           console.log(modalMenuItems[i].childNodes[1]);
       }
    }

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

