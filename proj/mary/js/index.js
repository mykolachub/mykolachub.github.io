'use strict';
document.addEventListener('DOMContentLoaded', () =>{
    console.log('welcome to my console!');

    //
    let starterTime = document.getElementById('starterTime'),
        letter = document.getElementById('letter'),
        marquee = document.getElementById('marquee'),
        workImg = document.querySelectorAll('.photo'),
        starterMainWrap = document.getElementById('starter__main_container'),
        starterImageWrap = document.getElementById('starter__photo_wrapper'),
        contactSection = document.getElementById('contactSection'),
        contactMail = document.getElementById('contact__mail'),
        contactPhoto = document.getElementById('contact__photo');

    let starterWorksBtn = document.getElementById('starterWorks'),
        starterAboutBtn = document.getElementById('starterAbout'),
        contactFacebookBtn = document.getElementById('contactFacebook'),
        contactInstagramBtn = document.getElementById('contactInstagram'),
        contactTelegramBtn = document.getElementById('contactTelegram'),
        contactScrollBtn = document.getElementById('contactScroll');

    //
    let firstDevider = document.getElementById('firstDevider'),
        secondDevider = document.getElementById('secondDevider'),
        wrapper = document.getElementById('wrapper'),
        starter = document.getElementById('starter'),
        work = document.getElementById('workSection'),
        contact = document.getElementById('contactSection'),
        about = document.getElementById('aboutSection');

    // bg color changing on scroll
    /*window.addEventListener('scroll', ()=>{
        let scrolled = window.pageYOffset;
        let position1 = firstDevider.getBoundingClientRect().top * 2;
        let position2 = contactSection.getBoundingClientRect().bottom * 4;
        //console.log(scrolled ,' ', position2);
        
        if (scrolled <= position1) {
            wrapper.classList.remove('block-focus');

            starter.classList.remove('block-focus-off');
            work.classList.add('block-focus-off');
            contact.classList.add('block-focus-off');
            about.classList.add('block-focus-off');
        }
        else if(scrolled > position1 && scrolled < position2){
            wrapper.classList.add('block-focus');
            
            starter.classList.add('block-focus-off');
            work.classList.remove('block-focus-off');
            contact.classList.add('block-focus-off');
            about.classList.remove('block-focus-off');
        }
        else{
            wrapper.classList.remove('block-focus');

            starter.classList.add('block-focus-off');
            work.classList.add('block-focus-off');
            contact.classList.remove('block-focus-off');
            about.classList.add('block-focus-off');
        }

    });*/


    // btn to top
    function moveToTop() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        }); 
    };

    // current time
    /*const interval = setInterval(() => {
        let CurrentTime = new Date();
        starterTime.innerHTML = CurrentTime.getHours()+ ':'+CurrentTime.getMinutes()+':'+CurrentTime.getSeconds();
    }, 1000);*/

    // scroll to section
    function scrollToSection(target) {
        let currentPos = target.getBoundingClientRect().top;
            window.scrollTo({
            top: currentPos,
            behavior: 'smooth'
        }); 
    };

    starterWorksBtn.addEventListener('click', ()=>{scrollToSection(firstDevider)});
    starterAboutBtn.addEventListener('click', ()=>{scrollToSection(secondDevider)});
    contactFacebookBtn.addEventListener('click', ()=>{window.open("https://www.facebook.com/profile.php?id=100013952324659");});
    contactInstagramBtn.addEventListener('click', ()=>{window.open("https://instagram.com/iisusllik?igshid=ot8o22x7hqi5");});
    contactTelegramBtn.addEventListener('click', ()=>{window.open("https://t.me/iisusllik");});
    contactScrollBtn.addEventListener('click', ()=>{
        moveToTop();
    });

    // random mask index for img
    let randomIndex;
    workImg.forEach(element => {
        function getRandomArbitary(min, max) {
            randomIndex = Math.random() * (max - min) + min;
        }
        getRandomArbitary(1 , 4);
        element.setAttribute('style', `-webkit-mask-image: url(imgs/icons/blob${Math.round(randomIndex)}.svg) !important; mask-image: url(imgs/icons/blob${Math.round(randomIndex)}.svg) !important;`);
    });

    function resizePhoto(params) {
        //console.log(starterMainWrap.offsetHeight);
        starterImageWrap.setAttribute('style', `width: ${starterMainWrap.offsetHeight}px !important; height: ${starterMainWrap.offsetHeight}px !important;`);
    }
    resizePhoto();

    window.addEventListener('resize', ()=>{
        resizePhoto();
    });

    contactMail.addEventListener('mouseover', e=>{
        contactPhoto.style.opacity = '1';
    });

    contactMail.addEventListener('mouseout', e=>{
        contactPhoto.style.opacity = '0';
    });

    /*function tickerWidth() {
        marquee.setAttribute('style', `width: ${letter.offsetWidth}px !important;`);
    }

    tickerWidth();

    window.addEventListener('resize', ()=>{
        tickerWidth();
    });*/

});