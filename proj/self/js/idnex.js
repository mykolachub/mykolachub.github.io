"use strict";

document.addEventListener('DOMContentLoaded', () =>{
    console.log('welcome to my console');

    let body =  document.getElementById('body'),
        html =  document.getElementById('html');

    // menu section
    let mainBtn = document.getElementById('main-btn'),
        projectsBtn = document.getElementById('projects-btn'),
        aboutBtn = document.getElementById('about-btn');

    // main page section
    let headerBtnMenu = document.getElementById('header-btn-menu'),
        page =  document.getElementById('page'),
        projectsSection = document.getElementById('projects');

    let scrolled,
        timer;
    
    
    //func describes the way it moves down to necessary section(target)
    function scrollToSection(target) { 
        window.scrollTo({
        top: target.getBoundingClientRect().bottom,
        behavior: 'smooth'
        }); 
    };


    // animation for menu appearing
    let OnOrOff = 0;
    function pageShowClose() {


        // changing styles for #page__wrapper
        let pageMoving = [
            {
            transform: "translateX(0%) perspective(0px) translateZ(0px) rotateY(0deg)"
            },
            { 
            transform: "translateX(33%) perspective(1000px) translateZ(-50px) rotateY(-5deg)"
            }
        ];
        
        // animation timing when opened for #page__wrapper
        let pageTimingOn = {
            duration: 1250,
            iterations: 1,
            fill: 'forwards',
            easing: 'cubic-bezier(.62,.28,.23,.99)'
        };
    
        // animation timing when closed for #page__wrapper
        let pageTimingOff = {
            duration: 1250,
            direction: 'alternate-reverse',
            iterations: 1,
            fill: 'forwards',
            easing: 'ease-in-out'

        };

        
        if (OnOrOff == 0) {

            body.classList.toggle('body-on');
            html.classList.toggle('body-on');    

            function addPageWrappClass() {
                page.classList.toggle('page__wrapper-on');
            }
            
            setTimeout(addPageWrappClass, 0);

            page.animate(
                pageMoving,
                pageTimingOn
            ).play();
            OnOrOff++;

        } else {
            body.classList.toggle('body-on');
            html.classList.toggle('body-on'); 
            page.animate(
                pageMoving,
                pageTimingOff
            ).play();
            function addPageWrappClass() {
                page.classList.toggle('page__wrapper-on');
            }
            
            setTimeout(addPageWrappClass, 1250);
            OnOrOff = 0;
        }
    };

    

    headerBtnMenu.addEventListener('click', ()=>{
        pageShowClose();
    });

    mainBtn.addEventListener('click', ()=>{
        pageShowClose();
    });

    aboutBtn.addEventListener('click', ()=>{
        pageShowClose();
    });

    projectsBtn.addEventListener('click', ()=>{
        pageShowClose();

        function TimingForScrolling() {
            scrollToSection(projects);
        };

        setTimeout(TimingForScrolling, 1250);

        
    });
    

});





