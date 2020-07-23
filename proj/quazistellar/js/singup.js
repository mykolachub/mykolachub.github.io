"use strict";

document.addEventListener('DOMContentLoaded', () =>{
    console.log('welcome to my console');
    
    // artist & employer
    let artistBtn = document.getElementById('artistBtn'),
        employerBtn = document.getElementById('employerBtn');

    // name & surname
    let nameWrapper = document.getElementById('nameWrapper'),
        inputName = document.getElementById('inputName'),
        surnameWrapper = document.getElementById('surnameWrapper'),
        inputSurname = document.getElementById('inputSurname');

    // date
    let dateWrapper = document.getElementById('dateWrapper'),
        inputDate = document.getElementById('inputDate');

    // mail
    let mailWrapper = document.getElementById('mailWrapper'),
        inputMail = document.getElementById('inputMail');

    // password & password check
    let passwordWrapper = document.getElementById('passwordWrapper'),
        inputPassword = document.getElementById('inputPassword'),
        passwordcheckWrapper = document.getElementById('passwordcheckWrapper'),
        inputPassworCheck = document.getElementById('inputPassworCheck');


    artistBtn.addEventListener('click', ()=>{
        if (artistBtn.classList.contains("form__type-btn--clicked") == true) {
            console.log('ignored');
        } else {
            artistBtn.classList.add('form__type-btn--clicked');
            employerBtn.classList.remove('form__type-btn--clicked');
        }

    });

    employerBtn.addEventListener('click', ()=>{
        if (employerBtn.classList.contains("form__type-btn--clicked") == true) {
            console.log('ignored');
        } else {
            artistBtn.classList.remove('form__type-btn--clicked');
            employerBtn.classList.add('form__type-btn--clicked');
        }
    });

    //
    inputName.addEventListener('focus', ()=>{
        inputFocused(nameWrapper);
    });

    inputName.addEventListener('blur', ()=>{
        inputBlured(nameWrapper);
    });

    //
    inputSurname.addEventListener('focus', ()=>{
        inputFocused(surnameWrapper);
    });

    inputSurname.addEventListener('blur', ()=>{
        inputBlured(surnameWrapper);
    });

    //
    inputDate.addEventListener('focus', ()=>{
        inputFocused(dateWrapper);
    });

    inputDate.addEventListener('blur', ()=>{
        inputBlured(dateWrapper);
    });

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

    //
    inputPassworCheck.addEventListener('focus', ()=>{
        inputFocused(passwordcheckWrapper);
    });

    inputPassworCheck.addEventListener('blur', ()=>{
        inputBlured(passwordcheckWrapper);
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