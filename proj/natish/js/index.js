"use strict";

document.addEventListener('DOMContentLoaded', () =>{
    console.log('welcome to my console');

    let body = document.getElementById('body');

    // main section
    let mainContent = document.getElementById('mainContent'),
        headerNavLast = document.getElementById('headerContactOpen'),
        headerAboutOpen = document.getElementById('headerAboutOpen'),
        headerWorkOpen = document.getElementById('headerWorkOpen');

    // about section
    let aboutQuiz = document.getElementById('aboutQuiz'),
        aboutQuizNo = document.getElementById('aboutQuizNo'),
        aboutQuizYes = document.getElementById('aboutQuizYes'),
        aboutQuizReply = document.getElementById('aboutQuizReply'),
        aboutQuizReplyText = document.getElementById('aboutQuizReplyText'),
        aboutQuizLoading = document.getElementById('aboutQuizLoading');
    
    // work section
    let workWrapper = document.getElementById('workWrapper'),
        workMask = document.getElementById('workMask'),
        workContent = document.getElementById('workContent'),
        headerCloseWork = document.getElementById('headerCloseWork');


    // quiz yes
    aboutQuizYes.addEventListener('click', ()=>{
        aboutQuizReplyText.innerHTML = `it's nice to have you (:`;
        aboutQuiz.classList.add('quiz__question-off');
        //aboutQuizLoading.innerHTML = 'wait';
        aboutQuizReply.classList.add('quiz__reply-on');
        aboutQuizLoading.classList.add('quiz__loading-on');
    });

    // quiz no
    aboutQuizNo.addEventListener('click', ()=>{
        aboutQuizReplyText.innerHTML = 'Then, let me show you other works to change your mind, tough guy';
        aboutQuiz.classList.add('quiz__question-off');
        aboutQuizLoading.innerHTML = 'wait';
        aboutQuizReply.classList.add('quiz__reply-on');
        aboutQuizLoading.classList.add('quiz__loading-on');
        
        workOpenQUIZ();
    });

    headerWorkOpen.addEventListener('click', ()=>{
        workOpenMAIN();
    });

    headerAboutOpen.addEventListener('click', ()=>{
        
        if (workContent.classList.contains('work__content-on-QUIZ') == true || workContent.classList.contains('work__content-on-MAIN') == true) {
            workClose();
        } else {
           event.preventDefault(); 
        }
    });

    function workOpenQUIZ() {
        workMask.classList.add('work__mask-on-QUIZ');
        workWrapper.classList.add('work__wrapper-on-QUIZ');
        body.classList.add('body-off-QUIZ');
        headerCloseWork.classList.add('header__work-close-on-QUIZ');
        headerNavLast.classList.add('header__nav-last');
        workContent.classList.add('work__content-on-QUIZ');

        headerWorkOpen.classList.add('active-page');
        headerAboutOpen.classList.remove('active-page');
    };

    function workOpenMAIN() {
        workMask.classList.add('work__mask-on-MAIN');
        workWrapper.classList.add('work__wrapper-on-MAIN');
        workContent.classList.add('work__content-on-MAIN');
        headerCloseWork.classList.add('header__work-close-on-MAIN');
        headerNavLast.classList.add('header__nav-last');
        body.classList.add('body-off-MAIN');

        headerWorkOpen.classList.add('active-page');
        headerAboutOpen.classList.remove('active-page');
    };

    function workClose() {
        if (workContent.classList.contains('work__content-on-QUIZ') == true) {
            headerCloseWork.classList.remove('header__work-close-on-QUIZ');
            workContent.classList.remove('work__content-on-QUIZ');
            workMask.classList.remove('work__mask-on-QUIZ');
            workWrapper.classList.remove('work__wrapper-on-QUIZ');
            headerNavLast.classList.remove('header__nav-last');
            body.classList.remove('body-off-QUIZ');

            aboutQuiz.classList.remove('quiz__question-off');
            aboutQuizLoading.innerHTML = '';
            aboutQuizReply.classList.remove('quiz__reply-on');
            aboutQuizLoading.classList.remove('quiz__loading-on');

        } else {

            headerCloseWork.classList.remove('header__work-close-on-MAIN');
            workContent.classList.remove('work__content-on-MAIN');
            workMask.classList.remove('work__mask-on-MAIN');
            workWrapper.classList.remove('work__wrapper-on-MAIN');
            headerNavLast.classList.remove('header__nav-last');
            body.classList.remove('body-off-MAIN');
        };

        headerWorkOpen.classList.remove('active-page');
        headerAboutOpen.classList.add('active-page');
    };

    headerCloseWork.addEventListener('click', ()=>{
        workClose();
    });

    

});