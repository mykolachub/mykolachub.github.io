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
        page = document.getElementById('page'),
        projectsSection = document.getElementById('projects'),
        headerMailBtn = document.getElementById('header__mail'),
        offerSection = document.getElementById('offer'),
        offerBest = document.getElementById('offer__best'),
        offerOther = document.getElementById('offer__other'),
        offerSkill = document.getElementById('offer__skill'),
        offerQuestion = document.getElementById('offer__question'),
        OtherWorks =  document.getElementById('works'),
        OtherWorksWrapper = document.getElementById('works__wrapper'),
        CloseWorks = document.getElementById('works__close'),
        AttentionWorks = document.getElementById('works__attention'),
        AttentionBtnWorks = document.getElementById('works__attention-btn');

    const worksArticleData = {
        0: `<div class="works__text">
                <div class="works__headering">
                    01: Grammar
                </div>
                <div class="works__subhead">
                    as the first projects
                </div>
                <div class="works__features">
                    <span class="bold">Features:</span> there is nothing special. It is just a simple site made by using HTML5 and CSS3. First time using Media Queries.
                </div>
                <a href="./proj/grammar/index.html" class="works__btn">
                    Learn More
                </a>
            </div>
            <div class="works__picture">
                <img src="img/projects/grammar.jpg" alt="">
            </div>`,
        1: `<div class="works__text">
                <div class="works__headering">
                    02: Old Portfolio
                </div>
                <div class="works__subhead">
                    as previous version of this site
                </div>
                <div class="works__features">
                    <span class="bold">Features:</span> projects selection via JavaScript. There is not an adaptation to mobile phones at all. 
                </div>
                <a href="./proj/oldportf/index.html" class="works__btn">
                    Learn More
                </a>
            </div>
            <div class="works__picture">
                <img src="img/projects/oldportf.jpg" alt="">
            </div>`,
        2: `<div class="works__text">
                <div class="works__headering">
                    03: Shop loyaut
                </div>
                <div class="works__subhead">
                    as practice of CSS Grid 
                </div>
                <div class="works__features">
                    <span class="bold">Features:</span> using CSS Grid layout. 
                </div>
                <a href="./proj/shop/index.html" class="works__btn">
                    Learn More
                </a>
            </div>
            <div class="works__picture">
                <img src="img/projects/shop.jpg" alt="">
            </div>`,
        3: `<div class="works__text">
                <div class="works__headering">
                    04: Portfolio for friend
                </div>
                <div class="works__subhead">
                    as the first attempt to create portfolio
                </div>
                <div class="works__features">
                    <span class="bold">Features:</span> definitely needs to be improved or even redo. 
                </div>
                <a href="./proj/mary/index.html" class="works__btn">
                    Learn More
                </a>
            </div>
            <div class="works__picture">
                <img src="img/projects/marry.jpg" alt="">
            </div>`,
        4: `<div class="works__text">
                <div class="works__headering">
                    05: UkrLit
                </div>
                <div class="works__subhead">
                    as the first serious project
                </div>
                <div class="works__features">
                    <span class="bold">Features:</span> dark theme supporting, extended mobile adaptation, trying to be in compliance with UI/UX design demands. 
                </div>
                <a href="./proj/ukrlit/index.html" class="works__btn">
                    Learn More
                </a>
            </div>
            <div class="works__picture">
                <img src="img/projects/ukrlit.jpg" alt="">
            </div>`
    }

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



    function worksArticlesRender() {
        let workArticle = OtherWorks.querySelectorAll('.works__article');

        workArticle.forEach(element => {
            element.innerHTML = worksArticleData[element.dataset.worksarticle];
        });
    }

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

    offerBest.addEventListener('click', ()=>{
        scrollToSection(projectsSection);
    });

    offerOther.addEventListener('click', ()=>{
        scrollToSection(OtherWorks);
        OtherWorks.classList.toggle('works-on');

        offerSection.classList.toggle("offer-off");
        projectsSection.classList.toggle('projects-off');

        worksArticlesRender();
    });

    CloseWorks.addEventListener('click', ()=>{
        OtherWorks.classList.toggle('works-on');

        offerSection.classList.toggle("offer-off");
        projectsSection.classList.toggle('projects-off');
    });

    AttentionBtnWorks.addEventListener('click', ()=>{
        AttentionWorks.classList.toggle('works__attention-off');
    });
    

});





