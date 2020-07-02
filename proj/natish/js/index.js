"use strict";

document.addEventListener('DOMContentLoaded', () =>{
    console.log('welcome to my console');

    let aboutQuiz = document.getElementById('aboutQuiz'),
        aboutQuizNo = document.getElementById('aboutQuizNo'),
        aboutQuizYes = document.getElementById('aboutQuizYes'),
        aboutQuizReply = document.getElementById('aboutQuizReply');
        aboutQuizReplyText = document.getElementById('aboutQuizReplyText');
    

    aboutQuizYes.addEventListener('click', ()=>{
        aboutQuiz.classList.add('quiz__question-off');
        aboutQuizReplyText.innerHTML = `it's nice to have you. Let me show you other works, then`;
        aboutQuizReply.classList.add('quiz__reply-on');
    });

    aboutQuizNo.addEventListener('click', ()=>{
        aboutQuiz.classList.add('quiz__question-off');
        aboutQuizReplyText.innerHTML = 'Then, let me show you other works to change your mind, tough guy';
        aboutQuizReply.classList.add('quiz__reply-on');
    });

});