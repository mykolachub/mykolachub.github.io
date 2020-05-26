'use strict';
document.addEventListener('DOMContentLoaded', () =>{
    console.log('welcome to my console!');

    let starterTime = document.getElementById('starterTime'),
        firstDevider = document.getElementById('firstDevider'),
        wrapper = document.getElementById('wrapper'),
        letter = document.getElementById('letter'),
        marquee = document.getElementById('marquee');

    function moveToTop() { // func describes the way it moves up to top
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        }); 
    };

    console.log(wrapper.getBoundingClientRect());

    const interval = setInterval(() => {
        let CurrentTime = new Date();
        starterTime.innerHTML = CurrentTime.getHours()+ ':'+CurrentTime.getMinutes()+':'+CurrentTime.getSeconds();
    }, 1000);

    function scrollToSection(target) { //func describes the way it moves down to necessary section(target)
        currentPos = target.getBoundingClientRect().top;
        console.log('currentPos:',  currentPos);
            window.scrollTo({
            top: currentPos,
            behavior: 'smooth'
        }); 
    };

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

    let workImg = document.querySelectorAll('.photo-container .photo');

    let randomIndex;
    workImg.forEach(element => {
        function getRandomArbitary(min, max) {
            randomIndex = Math.random() * (max - min) + min;
        }
        getRandomArbitary(1 , 4);
        element.setAttribute('style', `mask-image: url(./imgs/icons/blob${Math.round(randomIndex)}.svg);`);
        console.log(element);
    });


    /*function tickerWidth() {
        marquee.setAttribute('style', `width: ${letter.offsetWidth}px !important;`);
    }

    tickerWidth();

    window.addEventListener('resize', ()=>{
        tickerWidth();
    });*/

});