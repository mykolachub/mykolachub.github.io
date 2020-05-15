"use strict";

document.addEventListener('DOMContentLoaded', () =>{
    console.log('welcome to my console');

    // independend vars
    let circle = document.getElementById('circle'),
        time = document.getElementById('time'),
        sectionNameWorks = document.getElementById('section__name_works'),
        wrapper = document.getElementById('wrapper');

    // start frame
    let dotsStart = document.getElementById('start__scroll'),
        bodyStart = document.getElementById('start'),
        text1Start = document.getElementById('start__text1'),
        text2Start = document.getElementById('start__text2'),
        photo1Start = document.getElementById('start__photo1'),
        photo2Start = document.getElementById('start__photo2');

    // second frame
    let bodySecond = document.getElementById('second'),
        photo1Second = document.getElementById('second__photo1'),
        photo2Second = document.getElementById('second__photo2');

    // third frame
    let bodyThird = document.getElementById('third'),
        photo1Third = document.getElementById('third__photo1'),
        photo2Third = document.getElementById('third__photo2');

    // fourth frame
    let bodyFourth = document.getElementById('fourth'),
        photo1Fourth = document.getElementById('fourth__photo1'),
        photo2Fourth = document.getElementById('fourth__photo2');

    // fifth frame
    let bodyFifth = document.getElementById('fifth');

    const interval = setInterval(() => {
        let CurrentTime = new Date();
        time.innerHTML = CurrentTime.getHours()+ ':'+CurrentTime.getMinutes()+':'+CurrentTime.getSeconds();
    }, 1000);
    
    window.addEventListener('scroll', e =>{
        console.log(window.scrollY);
        // start frame
        text1Start.setAttribute('style', `left: calc(50% + ${window.scrollY}px); opacity: calc(1 - ${window.scrollY / 1000});`);
        text2Start.setAttribute('style', `left: calc(50% - ${window.scrollY / 1.2}px); opacity: calc(1 - ${window.scrollY / 1000});`);
        photo1Start.setAttribute('style', `top: calc(25% + ${window.scrollY / 1.2}px); opacity: calc(1 - ${window.scrollY / 1000});`);
        photo2Start.setAttribute('style', `bottom: calc(25% + ${window.scrollY / 1.2}px); opacity: calc(1 - ${window.scrollY / 1000});`);
        dotsStart.setAttribute('style', `opacity: calc(1 - ${window.scrollY / 1000});`);
        //bodyStart.setAttribute('style', `opacity: calc(1.5 - ${window.scrollY / 1000});`);
        
        // second frame
        //bodySecond.setAttribute('style', `opacity: calc(-0.5 + ${window.scrollY / 1000});`);
        let photoLedge = photo2Second.clientWidth + (photo2Second.clientWidth * 0.3333333333333333) ;
        photo1Second.setAttribute('style', `left: calc(100% - 1600px + ${window.scrollY / 1.5}px);`);
        photo2Second.setAttribute('style', `left: calc(100% - (1600px + ${photoLedge}px) + ${window.scrollY / 1.5}px);`);
        circle.setAttribute('style', `transform: rotate(-${window.scrollY / 5}deg); opacity: calc(-0.5 + ${window.scrollY / 1000});`);
        
        // third frame
        if (window.scrollY >= 4400) {
            window.addEventListener('scroll', e =>{ 
                photo1Third.setAttribute('style', `left: calc(0% + 4400px - ${window.scrollY}px);`);
                photo2Third.setAttribute('style', `left: calc(0% - 4400px + ${window.scrollY}px);`);
            });
        }
        else{
            bodyThird.setAttribute('style', `top: calc(0% + 3750px - ${window.scrollY / 1.2}px);`);

            window.addEventListener('scroll', e =>{ 
                photo1Third.setAttribute('style', `left: 0% !important;`);
                photo2Third.setAttribute('style', `left: 0% !important;`);
            });
        };

        // fourth frame
        bodyFourth.setAttribute('style', `bottom: calc(0% + 5000px - ${window.scrollY / 1.2}px);`);

        // fifth frame
        bodyFifth.setAttribute('style', `top: calc(0% + 5000px - ${window.scrollY / 1.5}px);`);

        if (window.scrollY >= 6105) {
            //sectionNameWorks.setAttribute('style', `top: calc(100% - 5000px + ${window.scrollY}px);`);
            window.addEventListener('scroll', e =>{ 
                sectionNameWorks.setAttribute('style', `top: calc(0% + (5000px - ${window.scrollY / 1.5}px)); opacity: calc(-0.5 + ${window.scrollY / 1000});`);
            });
        }
        else{
            //sectionNameWorks.setAttribute('style', `top: calc(100% - 50px);`);
            window.addEventListener('scroll', e =>{ 
                sectionNameWorks.setAttribute('style', `top: calc(100% - 50px); opacity: calc(-0.5 + ${window.scrollY / 1000});`);
            });
        };
        
    })
});