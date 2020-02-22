'use strict';

// cheking whether touch screen on devise
// however, i should say thanks for capability of using free touch screen detector was made by https://twitter.com/modernizr !   


/*let Wrapper = document.getElementById('wrapper');


function is_touch_device() {

    var prefixes = ' -webkit- -moz- -o- -ms- '.split(' ');
    
    var mq = function (query) {
        return window.matchMedia(query).matches;
    }

    if (('ontouchstart' in window) || window.DocumentTouch && document instanceof DocumentTouch) {
        return true;
    }

    var query = ['(', prefixes.join('touch-enabled),('), 'heartz', ')'].join('');
    return mq(query);
}

if (is_touch_device() === false) {
    console.log('FALSE! device does not have `touch screen`');
    Wrapper.classList.add('wrapper');
    Wrapper.setAttribute('data-0', 'transform: translateX(0%)');
    Wrapper.setAttribute('data-2000', 'transform: translateX(-100%)');
    

    
} else {
    document.querySelector('body').style.overflow = 'visible !important';
    document.querySelector('html').style.overflow = 'visible !important';
    Wrapper.classList.add('wrapper-new');

    console.log('TRUE! device has `touch screen`');    
    

}
*/
// when DOM`s finally loaded:

document.addEventListener('DOMContentLoaded', () =>{
    console.log('welcome to my console!');

    let HeaderMovingBtn = document.getElementById('header__button'),
        SectionSheet = document.getElementById('sheet__body'),
        ListOffBtn = document.getElementById('sheet-list-off'),
        ListOnBtn = document.getElementById('sheet-list-on'),
        SheetList = document.getElementById('sheet__list'),
        SheetBlock = document.getElementsByClassName('sheet__block'),
        SheetPicture = document.getElementsByClassName('sheet__picture'),
        SheetPictureImg = document.querySelector('.sheet__picture img'),
        SheetTitle = document.getElementsByClassName('sheet__title'),
        CloseModalBtn = document.querySelector('.close__modal');

    let targetPos;

    const   StylePictureName = document.getElementById('picture-typeofproj-name'),
            StylePictureName2 = document.getElementById('picture-typeofproj2-name'),
            StylePictureName3 = document.getElementById('picture-typeofproj3-name');;

    StylePictureName.addEventListener('click', ()=>{openModalProj(StylePictureName);});
    StylePictureName2.addEventListener('click', ()=>{openModalProj(StylePictureName2);});
    StylePictureName3.addEventListener('click', ()=>{openModalProj(StylePictureName3);});
    
    function openModalProj(el) {
        let modalWindow = el.dataset.projmodal;
        console.log('modalWindow: ', modalWindow);
        document.getElementById(`${modalWindow}`).classList.toggle('project__modal-open');
        
        window.addEventListener('keydown', (event)=>{
            if (event.key === 'Escape') {
                event.preventDefault();
                document.getElementById(`${modalWindow}`).classList.remove('project__modal-open');
            }

        });

        CloseModalBtn.addEventListener('click', ()=>{
            document.getElementById(`${modalWindow}`).classList.remove('project__modal-open');
        })
        
    }

    

    function scrollToSection(target) { //func describes the way it moves down to necessary section(target)
        targetPos = target.getBoundingClientRect().right;
        console.log('tragetPos:',  targetPos);
        window.scrollTo({
        top: targetPos,
        behavior: 'smooth'
        });
    };

    

    HeaderMovingBtn.addEventListener('click', () =>{
        scrollToSection(SectionSheet);
    });

    ListOffBtn.addEventListener('click', ()=>{
        ListOffBtn.classList.add('active__list');
        ListOnBtn.classList.remove('active__list');
        SheetList.classList.add('sheet__list-on-cells');
        SheetList.classList.remove('sheet__list');

        for (var i=0; i<SheetBlock.length; i++) {
            SheetBlock[i].classList.add('sheet__block-on-cells');
        }

        for (var i=0; i<SheetPicture.length; i++) {
            SheetPicture[i].classList.add('sheet__picture-on-cells');
            
        }
        for (var i=0; i<SheetPictureImg.length; i++) {
            SheetPictureImg[i].style.position = 'static';
            SheetPicture[i].style.left = 'none';
            SheetPicture[i].style.top = 'none';
        }

        for (var i=0; i<SheetTitle.length; i++) {
            SheetTitle[i].style.display = 'none';
        }
    });

    ListOnBtn.addEventListener('click', ()=>{
        ListOnBtn.classList.add('active__list');
        ListOffBtn.classList.remove('active__list');
        SheetList.classList.remove('sheet__list-on-cells');
        SheetList.classList.add('sheet__list');

        for (var i=0; i<SheetBlock.length; i++) {
            SheetBlock[i].classList.remove('sheet__block-on-cells');
        }

        for (var i=0; i<SheetPicture.length; i++) {
            SheetPicture[i].classList.remove('sheet__picture-on-cells');
        }

        for (var i=0; i<SheetPictureImg.length; i++) {
            SheetPictureImg[i].style.position = 'absolute';
            SheetPicture[i].style.left = '0';
            SheetPicture[i].style.top = '0';
        }

        for (var i=0; i<SheetTitle.length; i++) {
            SheetTitle[i].style.display = 'flex';

        }
    });
});
