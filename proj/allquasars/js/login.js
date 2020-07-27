"use strict";

document.addEventListener('DOMContentLoaded', () =>{
    console.log('welcome to my console');

    // mail
    let mailWrapper = document.getElementById('mailWrapper'),
        inputMail = document.getElementById('inputMail');

    // password & password check
    let passwordWrapper = document.getElementById('passwordWrapper'),
        inputPassword = document.getElementById('inputPassword');

    //
    inputMail.addEventListener('focus', ()=>{
        inputFocused(mailWrapper);
    });

    inputMail.addEventListener('blur', ()=>{
        inputBlured(mailWrapper);
    });

    //
    inputPassword.addEventListener('focus', ()=>{
        inputFocused(passwordWrapper);
    });

    inputPassword.addEventListener('blur', ()=>{
        inputBlured(passwordWrapper);
    });
    
    // main functions
    function inputFocused(e) {
        if (!e.classList.contains('form__clue--clicked')) {
            e.classList.add('form__clue--clicked');
            console.log('focused');
        }
    };

    function inputBlured(e) {
        if (e.classList.contains('form__clue--clicked') && e.firstElementChild.value == '') {
            e.classList.remove('form__clue--clicked'); 
            console.log('blured');
        }
        //console.log(e.firstElementChild.value);
    };
});