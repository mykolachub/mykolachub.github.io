"use strict";

document.addEventListener('DOMContentLoaded', () =>{
    console.log('welcome to my console');

    let body = document.getElementById('body');

    // main section
    let mainContent = document.getElementById('mainContent'),
        headerNavLast = document.getElementById('headerNavLast');

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
        workContent = document.getElementById('workContent');



    aboutQuizYes.addEventListener('click', ()=>{
        aboutQuizReplyText.innerHTML = `it's nice to have you. Let me show you other works, then`;
        workOpenQUIZ();
    });

    aboutQuizNo.addEventListener('click', ()=>{
        aboutQuizReplyText.innerHTML = 'Then, let me show you other works to change your mind, tough guy';
        workOpenQUIZ();
    });

    function workOpenQUIZ() {
        aboutQuiz.classList.add('quiz__question-off');
        aboutQuizLoading.innerHTML = 'wait';
        aboutQuizReply.classList.add('quiz__reply-on');
        aboutQuizLoading.classList.add('quiz__loading-on');
        workMask.classList.add('work__mask-on');
        workWrapper.classList.add('work__wrapper-on');
        body.classList.add('body-off');
        headerNavLast.classList.add('header__nav-last');
        workContent.classList.add('work__content-on');
    }

});