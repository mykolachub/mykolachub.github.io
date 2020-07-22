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

    nameWrapper.addEventListener('click', ()=>{
        if (nameWrapper.classList.contains('form__clue--clicked') == true) {
            return;
        } else {
            nameWrapper.classList.toggle('form__clue--clicked');
        }
    });

    inputName.addEventListener('focus', ()=>{
        if (nameWrapper.classList.contains('form__clue--clicked') == true) {
            return;
        } else {
            nameWrapper.classList.toggle('form__clue--clicked');
        }
    });

    inputName.addEventListener('blur', ()=>{
        if (nameWrapper.classList.contains('form__clue--clicked') == true) {
            nameWrapper.classList.toggle('form__clue--clicked');
            
        } else {
            return;
        }
    });

    surnameWrapper.addEventListener('click', ()=>{
        if (surnameWrapper.classList.contains('form__clue--clicked') == true) {
            return;
        } else {
            surnameWrapper.classList.toggle('form__clue--clicked');
        }
    });

    inputSurname.addEventListener('focus', ()=>{
        if (surnameWrapper.classList.contains('form__clue--clicked') == true) {
            return;
        } else {
            surnameWrapper.classList.toggle('form__clue--clicked');
        }
    });

    inputSurname.addEventListener('blur', ()=>{
        if (surnameWrapper.classList.contains('form__clue--clicked') == true) {
            surnameWrapper.classList.toggle('form__clue--clicked');
            
        } else {
            return;
        }
    });


    dateWrapper.addEventListener('click', ()=>{
        if (dateWrapper.classList.contains('form__clue--clicked') == true) {
            return;
        } else {
            dateWrapper.classList.toggle('form__clue--clicked');
        }
    });

    inputDate.addEventListener('focus', ()=>{
        if (dateWrapper.classList.contains('form__clue--clicked') == true) {
            return;
        } else {
            dateWrapper.classList.toggle('form__clue--clicked');
        }
    });

    inputDate.addEventListener('blur', ()=>{
        if (dateWrapper.classList.contains('form__clue--clicked') == true) {
            dateWrapper.classList.toggle('form__clue--clicked');
            
        } else {
            return;
        }
    });


    mailWrapper.addEventListener('click', ()=>{
        if (mailWrapper.classList.contains('form__clue--clicked') == true) {
            return;
        } else {
            mailWrapper.classList.toggle('form__clue--clicked');
        }
    });

    inputMail.addEventListener('focus', ()=>{
        if (mailWrapper.classList.contains('form__clue--clicked') == true) {
            return;
        } else {
            mailWrapper.classList.toggle('form__clue--clicked');
        }
    });

    inputMail.addEventListener('blur', ()=>{
        if (mailWrapper.classList.contains('form__clue--clicked') == true) {
            mailWrapper.classList.toggle('form__clue--clicked');
            
        } else {
            return;
        }
    });

    passwordWrapper.addEventListener('click', ()=>{
        if (passwordWrapper.classList.contains('form__clue--clicked') == true) {
            return;
        } else {
            passwordWrapper.classList.toggle('form__clue--clicked');
        }
    });

    inputPassword.addEventListener('focus', ()=>{
        if (passwordWrapper.classList.contains('form__clue--clicked') == true) {
            return;
        } else {
            passwordWrapper.classList.toggle('form__clue--clicked');
        }
    });

    inputPassword.addEventListener('blur', ()=>{
        if (passwordWrapper.classList.contains('form__clue--clicked') == true) {
            passwordWrapper.classList.toggle('form__clue--clicked');
            
        } else {
            return;
        }
    });

    passwordcheckWrapper.addEventListener('click', ()=>{
        if (passwordcheckWrapper.classList.contains('form__clue--clicked') == true) {
            return;
        } else {
            passwordcheckWrapper.classList.toggle('form__clue--clicked');
        }
    });

    inputPassworCheck.addEventListener('focus', ()=>{
        if (passwordcheckWrapper.classList.contains('form__clue--clicked') == true) {
            return;
        } else {
            passwordcheckWrapper.classList.toggle('form__clue--clicked');
        }
    });

    inputPassworCheck.addEventListener('blur', ()=>{
        if (passwordcheckWrapper.classList.contains('form__clue--clicked') == true) {
            passwordcheckWrapper.classList.toggle('form__clue--clicked');
            
        } else {
            return;
        }
    });

    document.addEventListener('click', e=>{
        if (inputName.value == '') { // если ничего не ввел в инпут
            if (event.clientX >= nameWrapper.getBoundingClientRect().left && event.clientX <= nameWrapper.getBoundingClientRect().right && event.clientY >= nameWrapper.getBoundingClientRect().top && event.clientY <= nameWrapper.getBoundingClientRect().bottom) {
                return;
            } else{ // клик все инпута отключает анимацию
                nameWrapper.classList.remove('form__clue--clicked');
            }
        } else {
            return;
        }

        if(inputSurname.value == ''){ // если ничего не ввел в инпут
            if (event.clientX >= surnameWrapper.getBoundingClientRect().left && event.clientX <= surnameWrapper.getBoundingClientRect().right && event.clientY >= surnameWrapper.getBoundingClientRect().top && event.clientY <= surnameWrapper.getBoundingClientRect().bottom) {
                return;
            } else{ // клик все инпута отключает анимацию
                surnameWrapper.classList.remove('form__clue--clicked');
            }
        } else{
            return;
        }

        if(inputMail.value == ''){ // если ничего не ввел в инпут
            if (event.clientX >= mailWrapper.getBoundingClientRect().left && event.clientX <= mailWrapper.getBoundingClientRect().right && event.clientY >= mailWrapper.getBoundingClientRect().top && event.clientY <= mailWrapper.getBoundingClientRect().bottom) {
                return;
            } else{ // клик все инпута отключает анимацию
                mailWrapper.classList.remove('form__clue--clicked');
            }
        } else{
            return;
        }

        

        if(inputDate.value == ''){ // если ничего не ввел в инпут
            if (event.clientX >= dateWrapper.getBoundingClientRect().left && event.clientX <= dateWrapper.getBoundingClientRect().right && event.clientY >= dateWrapper.getBoundingClientRect().top && event.clientY <= dateWrapper.getBoundingClientRect().bottom) {
                return;
            } else{ // клик все инпута отключает анимацию
                dateWrapper.classList.remove('form__clue--clicked');
            }
        } else{
            return;
        }

        if(inputPassword.value == ''){ // если ничего не ввел в инпут
            if (event.clientX >= passwordWrapper.getBoundingClientRect().left && event.clientX <= passwordWrapper.getBoundingClientRect().right && event.clientY >= passwordWrapper.getBoundingClientRect().top && event.clientY <= passwordWrapper.getBoundingClientRect().bottom) {
                return;
            } else{ // клик все инпута отключает анимацию
                passwordWrapper.classList.remove('form__clue--clicked');
            }
        } else{
            return;
        }

        if(inputPassworCheck.value == ''){ // если ничего не ввел в инпут
            if (event.clientX >= passwordcheckWrapper.getBoundingClientRect().left && event.clientX <= passwordcheckWrapper.getBoundingClientRect().right && event.clientY >= passwordcheckWrapper.getBoundingClientRect().top && event.clientY <= passwordcheckWrapper.getBoundingClientRect().bottom) {
                return;
            } else{ // клик все инпута отключает анимацию
                passwordcheckWrapper.classList.remove('form__clue--clicked');
            }
        } else{
            return;
        }
        
    });


});