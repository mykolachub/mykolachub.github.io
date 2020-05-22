'use strict';
document.addEventListener('DOMContentLoaded', () =>{
    console.log('welcome to my console!');

    btnToTop.addEventListener('click' , moveToTop); // btn of moving to top

    function moveToTop() { // func describes the way it moves up to top
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        }); 
    };

    function scrollToSection(target) { //func describes the way it moves down to necessary section(target)
        currentPos = target.getBoundingClientRect().top;
        console.log('currentPos:',  currentPos);
            window.scrollTo({
            top: currentPos,
            behavior: 'smooth'
            }); 
    };
});