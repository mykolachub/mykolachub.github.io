'use strict';
document.addEventListener('DOMContentLoaded', () =>{
    console.log('welcome to my console!');
    let body = document.getElementById('body'),
        starterTime = document.getElementById('starterTime'),
        modalWork = document.getElementById('modal'),
        modalCloseBtn = document.getElementById('modalClose'),
        modalCloak = document.getElementById('modalCloak'),
        modalPicture = document.querySelector('#modalPicture .modal__picture-item'),
        modalArrowLeft = document.getElementById('modalArrowLeft'),
        modalArrowRight = document.getElementById('modalArrowRight'),
        workContainer = document.querySelectorAll('.work__container .work__picture img');

    // current time
    const interval = setInterval(() => {
        let CurrentTime = new Date();
        starterTime.innerHTML = CurrentTime.getHours()+ ':'+CurrentTime.getMinutes()+':'+CurrentTime.getSeconds();
    }, 1000);

    let pictures = {};
    let indx = 0;

    let randomIndex;
    workContainer.forEach(element => {
        indx = indx + 1;
        pictures[`${indx}`] = element.currentSrc;

        function getRandomArbitary(min, max) {
            randomIndex = Math.random() * (max - min) + min;
        }
        getRandomArbitary(1 , 4);
        element.setAttribute('style', `-webkit-mask-image: url(imgs/icons/blob${Math.round(randomIndex)}.svg) !important; mask-image: url(imgs/icons/blob${Math.round(randomIndex)}.svg) !important;`);
    });

    let currentIndex = 0;
    workContainer.forEach(element => {
        element.addEventListener('click', ()=>{
            for (let key in pictures) {
                if (element.currentSrc == pictures[key]) {
                    currentIndex = key;
                    console.log('currentIndex: ', currentIndex);
                    modalPicture.setAttribute('src', `${pictures[currentIndex]}`);

                    if (currentIndex == 1) {
                        modalArrowRight.classList.remove('modal__arrow-off');
                        modalArrowLeft.classList.add('modal__arrow-off');
                    } 
                    else if (currentIndex == workContainer.length) {
                        modalArrowLeft.classList.remove('modal__arrow-off');
                        modalArrowRight.classList.add('modal__arrow-off');
                    }
                    else if (currentIndex == workContainer.length || currentIndex == workContainer.length) {
                        modalArrowLeft.classList.remove('modal__arrow-off');
                        modalArrowRight.classList.remove('modal__arrow-off');
                    }
                    else {
                        modalArrowRight.classList.remove('modal__arrow-off');
                        modalArrowLeft.classList.remove('modal__arrow-off');
                    }
                    
                }
            };

            modalArrowLeft.addEventListener('click', ()=>{
                if (currentIndex == 1) {
                        modalPicture.setAttribute('src', `${pictures[currentIndex]}`);
                        console.log('currentIndex: ', currentIndex);
                        modalArrowRight.classList.remove('modal__arrow-off');
                        modalArrowLeft.classList.add('modal__arrow-off');
                    
                } else {
                    currentIndex--;
                    if (currentIndex == 1) {
                        modalPicture.setAttribute('src', `${pictures[currentIndex]}`);
                        console.log('currentIndex: ', currentIndex);
                        modalArrowRight.classList.remove('modal__arrow-off');
                        modalArrowLeft.classList.add('modal__arrow-off');
                    } else{
                        console.log('currentIndex: ', currentIndex);
                        modalArrowRight.classList.remove('modal__arrow-off');
                        modalArrowLeft.classList.remove('modal__arrow-off');
                        modalPicture.setAttribute('src', `${pictures[currentIndex]}`);
                    }
                }
            });

            modalArrowRight.addEventListener('click', ()=>{
                if (currentIndex == workContainer.length) {
                        modalPicture.setAttribute('src', `${pictures[currentIndex]}`);
                        console.log('currentIndex: ', currentIndex);
                        modalArrowLeft.classList.remove('modal__arrow-off');
                        modalArrowRight.classList.add('modal__arrow-off');
                } else {
                    currentIndex++;
                    if (currentIndex == workContainer.length) {
                        modalPicture.setAttribute('src', `${pictures[currentIndex]}`);
                        console.log('currentIndex: ', currentIndex);
                        modalArrowLeft.classList.remove('modal__arrow-off');
                        modalArrowRight.classList.add('modal__arrow-off');
                    } else{
                        console.log('currentIndex: ', currentIndex);
                        modalArrowLeft.classList.remove('modal__arrow-off');
                        modalArrowRight.classList.remove('modal__arrow-off');
                        modalPicture.setAttribute('src', `${pictures[currentIndex]}`);
                    }
                }
            });

            modalWork.classList.toggle('modal-on');
            body.classList.add('body-off');

            modalCloak.classList.toggle('modal__pic-cloak-off');
            modalCloseBtn.classList.toggle('modal__block-on');
            modalArrowLeft.classList.toggle('modal__block-on');
            modalArrowRight.classList.toggle('modal__block-on');
        });
    });

    modalCloseBtn.addEventListener('click', ()=>{
        modalWork.classList.toggle('modal-on');
        body.classList.remove('body-off');
        body.classList.add('body-on');


        modalCloak.classList.toggle('modal__pic-cloak-off');
        modalCloseBtn.classList.toggle('modal__block-on');
        modalArrowLeft.classList.toggle('modal__block-on');
        modalArrowRight.classList.toggle('modal__block-on');
    });

});