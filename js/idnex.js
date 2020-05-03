"use strict";

document.addEventListener('DOMContentLoaded', () =>{
    console.log('welcome to my console');

    let body =  document.getElementById('body'),
        html =  document.getElementById('html');

    // menu section
    let mainBtn = document.getElementById('main-btn'),
        projectsBtn = document.getElementById('projects-btn'),
        aboutBtn = document.getElementById('about-btn'),
        Mail = document.getElementById('menu__item_mail');

    // main page section
    let headerBtnMenu = document.getElementById('header-btn-menu'),
        page =  document.getElementById('page'),
        projectsSection = document.getElementById('projects'),
        headerMailBtn = document.getElementById('header__mail');


    //func describes the way it moves down to necessary section(target)
    function scrollToSection(target) { 
        window.scrollTo({
        top: target.getBoundingClientRect().bottom,
        behavior: 'smooth'
        }); 
    };

    if (window.matchMedia("(max-width: 525px)").matches) {
        headerMailBtn.innerText = '🌼 mail';
        headerMailBtn.addEventListener('click', ()=>{
            pageShowClose();

        });
        Mail.classList.toggle('menu__item_mail-on');

    };


    // animation for menu appearing
    let OnOrOff = 0;
    function pageShowClose() {

        let pageMoving;
        

        if (window.matchMedia("(max-width: 768px)").matches) {
            /* the viewport is less than 768px wide */
            // changing styles for #page__wrapper
            pageMoving = [
                {
                transform: "translateX(0%) perspective(0px) translateZ(0px) rotateY(0deg)"
                },
                { 
                transform: "translateX(50%) perspective(1000px) translateZ(-50px) rotateY(-5deg)"
                }
                ];
          }
          else {
            /* the viewport is at least 768px wide */  
            // changing styles for #page__wrapper
            pageMoving = [
                {
                transform: "translateX(0%) perspective(0px) translateZ(0px) rotateY(0deg)"
                },
                { 
                transform: "translateX(33%) perspective(1000px) translateZ(-50px) rotateY(-5deg)"
                }
                ];
            
          }

          if (window.matchMedia("(max-width: 525px)").matches) {
            /* the viewport is less than 525px wide */
            // changing styles for #page__wrapper
            pageMoving = [
                {
                transform: "translateX(0%) perspective(0px) translateZ(0px) rotateY(0deg)"
                },
                { 
                transform: "translateX(66%) perspective(1000px) translateZ(-50px) rotateY(-5deg)"
                }
                ];
          }

          if (window.matchMedia("(max-width: 425px)").matches) {
            /* the viewport is less than 525px wide */
            // changing styles for #page__wrapper
            pageMoving = [
                {
                transform: "translateX(0%) perspective(0px) translateZ(0px) rotateY(0deg)"
                },
                { 
                transform: "translateX(70%) perspective(1000px) translateZ(-50px) rotateY(-5deg)"
                }
                ];
          }

        
        
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
            };
            
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

        /*if (window.matchMedia("(max-width: 525px)").matches) {
            headerMailBtn.innerText = '🌼 mail';
            headerMailBtn.addEventListener('click', ()=>{
                pageShowClose();
    
            });
            Mail.classList.toggle('menu__item_mail-on');

        } else {
            return;
        } */


       
    

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
            scrollToSection(projectsSection);
        };

        setTimeout(TimingForScrolling, 1250);

        
    });
    

});





