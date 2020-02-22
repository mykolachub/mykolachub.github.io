'use strict';
document.addEventListener('DOMContentLoaded', () =>{
    console.log('welcome to my console!');

    let CertificatesBtn = document.getElementById('btn__showblock-certificates'),
        CertificatesBlock = document.getElementById('block__certificates'),
        CertificatesBlockItems = document.getElementsByClassName('certificates__item'),
        AboutBtn = document.getElementById('btn__scroll-about'),
        AboutBtn2 = document.getElementById('btn__scroll-about2'),
        AboutBlock = document.getElementById('block__about'),
        ProjectsBtn = document.getElementById('btn__scroll-projects'),
        ProjectsBlock = document.getElementById('block__projects'),
        btnToTop = document.getElementById('btn__to-top');

    let currentPos,
        scrolled;

    window.addEventListener('scroll', () =>{ // shows or hides button to top depends on its position
        scrolled = window.scrollY;
        currentPos = ProjectsBlock.getBoundingClientRect().top;
        if (scrolled >= currentPos) {
            btnToTop.style.display = 'block';
        } else {
            btnToTop.style.display = 'none';
        }
    });

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

    /*MobileMenuBtn.addEventListener('click' , () =>{
        if (MobileMenuBtn.classList.add('label__menu-mob-active')) {
            MobileMenuBtn.classList.remove('label__menu-mob-active');       
        } else {
            MobileMenuBtn.classList.add('label__menu-mob-active');
            
        }
        
        
    });*/


    AboutBtn.addEventListener('click', () =>{
        scrollToSection(AboutBlock);
    });

    AboutBtn2.addEventListener('click', () =>{
        scrollToSection(AboutBlock);
    });

    ProjectsBtn.addEventListener('click', () =>{
        scrollToSection(ProjectsBlock);
    });

    CertificatesBtn.addEventListener('click', () =>{
        if (CertificatesBlock.style.display == 'block') {
            CertificatesBlock.style.display = 'none';                    
            console.log('Its none');
            CertificatesBtn.innerHTML = 'Show certificates'               
        } else {
            CertificatesBtn.innerHTML = 'Hide certificates'
            CertificatesBlock.style.display = 'block';
            console.log('Its block');
            for (var i=0; i<CertificatesBlockItems.length; i++) {
                CertificatesBlockItems[i].classList.add('block_appearing');
            }
        }
    });

    
});