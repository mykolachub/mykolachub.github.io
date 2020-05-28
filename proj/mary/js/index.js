'use strict';
document.addEventListener('DOMContentLoaded', () =>{
    console.log('welcome to my console!');

    let starterTime = document.getElementById('starterTime'),
        firstDevider = document.getElementById('firstDevider'),
        wrapper = document.getElementById('wrapper'),
        letter = document.getElementById('letter'),
        marquee = document.getElementById('marquee'),
        workImg = document.querySelectorAll('.photo'),
        starterMainWrap = document.getElementById('starter__main_container'),
        starterImageWrap = document.getElementById('starter__photo_wrapper');

    // btn to top
    function moveToTop() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        }); 
    };

    // current time
    const interval = setInterval(() => {
        let CurrentTime = new Date();
        starterTime.innerHTML = CurrentTime.getHours()+ ':'+CurrentTime.getMinutes()+':'+CurrentTime.getSeconds();
    }, 1000);

    // scroll to section
    function scrollToSection(target) {
        currentPos = target.getBoundingClientRect().top;
        console.log('currentPos:',  currentPos);
            window.scrollTo({
            top: currentPos,
            behavior: 'smooth'
        }); 
    };

    // bg color changing on scroll
    window.addEventListener('scroll', ()=>{
        let scrolled = window.pageYOffset;
        let position1 = firstDevider.getBoundingClientRect().top * 2;
        //position2 = section2.getBoundingClientRect().top;
        
        if (scrolled <= position1) {
            wrapper.classList.remove('works-focus');
        }
        else{
            wrapper.classList.add('works-focus');
        }

    });

    // random mask index for img
    let randomIndex;
    workImg.forEach(element => {
        function getRandomArbitary(min, max) {
            randomIndex = Math.random() * (max - min) + min;
        }
        getRandomArbitary(1 , 4);
        element.setAttribute('style', `-webkit-mask-image: url(imgs/icons/blob${Math.round(randomIndex)}.svg) !important;`);
    });

    function resizePhoto(params) {
        console.log(starterMainWrap.offsetHeight);
        starterImageWrap.setAttribute('style', `width: ${starterMainWrap.offsetHeight}px !important; height: ${starterMainWrap.offsetHeight}px !important;`);
    }
    resizePhoto();

    window.addEventListener('resize', ()=>{
        resizePhoto();
    });

    /*function tickerWidth() {
        marquee.setAttribute('style', `width: ${letter.offsetWidth}px !important;`);
    }

    tickerWidth();

    window.addEventListener('resize', ()=>{
        tickerWidth();
    });*/

});