"use strict";

document.addEventListener('DOMContentLoaded', () =>{
    console.log('welcome to my console');

    let text1 = document.getElementById('text1'),
        text2 = document.getElementById('text2'),
        pht1 = document.getElementById('pht1'),
        pht2 = document.getElementById('pht2'),
        time = document.getElementById('time'),
        startScroll = document.getElementById('start__scroll'),
        wrapper = document.getElementById('wrapper'),
        body = document.getElementById('body');


    /*window.addEventListener('resize', e=>{
        console.log(body.getBoundingClientRect());
    });*/

    let interval = setInterval(() => {
        let CurrentTime = new Date();
        time.innerHTML = CurrentTime.getHours()+ ':'+CurrentTime.getMinutes()+':'+CurrentTime.getSeconds();
    }, 1000);

    window.addEventListener('scroll', e =>{
        //console.log(window.scrollY / 10);
        //console.log(text.getBoundingClientRect());
        text1.setAttribute('style', `left: calc(50% + ${window.scrollY}px); opacity: calc(1 - ${window.scrollY / 1000});`);
        text2.setAttribute('style', `left: calc(400px - ${window.scrollY * 1.5}px); opacity: calc(1 - ${window.scrollY / 1000});`);
        pht1.setAttribute('style', `top: calc(25% + ${window.scrollY}px); opacity: calc(1 - ${window.scrollY / 1000});`);
        pht2.setAttribute('style', `bottom: calc(25% + ${window.scrollY}px); opacity: calc(1 - ${window.scrollY / 1000});`);
        startScroll.setAttribute('style', `opacity: calc(1 - ${window.scrollY / 1000});`);
        document.getElementById('second').setAttribute('style', `opacity: calc(-0.5 + ${window.scrollY / 1000});`);
        document.getElementById('start').setAttribute('style', `opacity: calc(1.5 - ${window.scrollY / 1000});`);
    })
});