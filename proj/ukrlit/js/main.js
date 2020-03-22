'use strict';

document.addEventListener('DOMContentLoaded', ()=>{
    console.log('welcome to my console');

    let btnToTop = document.getElementById('btn_to_top'),
        authorContentBtn = document.querySelector('.author__btn'),
        authorContentBtnCircle = document.getElementById('author-contentbtn-circle'),
        authorContentList = document.getElementById('author-contentlist');

    //func describes the way it moves down to necessary section(target)
    function scrollToSection(target) { 
        let targetPos = target.getBoundingClientRect().top;
        window.scrollTo({
        top: targetPos - 10,
        behavior: 'smooth'
        });
    };

    // func describes the way it moves up to top
    function moveToTop() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        }); 
    };

    // slider activator
    $('.blocks').slick({
        infinite: false,
        slidesToShow: 3,
        slidesToScroll: 3,
        autoplay: false,
        autoplaySpeed: 3000,
        dots: true,
        arrows: false,
        speed: 1500,
        easing: 'ease',
        pauseOnHover: true,
        pauseOnFocus: true,
        draggable: true,
        swipe: true,
        touchThreshold: 10,
        waitForAnimate: false,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: false,
                    dots: true,
                    autoplay: false
                }
            },
            {
                breakpoint: 500,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    infinite: false,
                    dots: true,
                    autoplay: false
                }
            }
          ]
    });

    if (window.matchMedia("(max-width: 768px)").matches) {
        $('.blocks').slick('unslick');

    } else {
    }

    authorContentBtn.addEventListener('click', ()=> {
        authorContentBtn.classList.toggle('author__btn-active');
        authorContentList.classList.toggle('author__list-active');
        authorContentBtnCircle.classList.toggle('author__circle-btn-active');
    });

    //btn to top
    btnToTop.addEventListener('click' , moveToTop);

    // search
    document.querySelector('#elastic').oninput = function() {

        let val = this.value.trim();
        val = val.toLowerCase();
        let elasticItems = document.querySelectorAll('.elastic span');
    
        if (val != '') {
            elasticItems.forEach(function (elem) {
                if (elem.innerText.toLowerCase().search(val) == -1) {
                    if (window.matchMedia("(max-width: 768px)").matches) {
                        elem.parentElement.parentElement.classList.add('hide');
                    } else {
                        elem.parentElement.parentElement.parentElement.parentElement.classList.add('hide');
                    }
                }
                else{
                    if (window.matchMedia("(max-width: 768px)").matches) {
                        elem.parentElement.parentElement.classList.remove('hide');
                    } else {
                        elem.parentElement.parentElement.parentElement.parentElement.classList.remove('hide');
                    }
                }
            });
        }
        else{
            elasticItems.forEach(function (elem) {
                if (window.matchMedia("(max-width: 768px)").matches) {
                    elem.parentElement.parentElement.classList.remove('hide');
                } else {
                    elem.parentElement.parentElement.parentElement.parentElement.classList.remove('hide');
                }
            });
        }
    };


    let clickedAuthors = [];
    

    // viewing the necessary article about the author
    function openArticle(article) {
        let authorBlock = document.getElementById('author'),
            authorSearchName = article.dataset.name,
            authorArticle = document.getElementById(`${authorSearchName}`);

        let authorDispChecker = authorBlock.classList.contains('author__active');

        // добавляю елемент в массив
        clickedAuthors.push(`${authorSearchName}`);


        // нажал на автора 
        if (clickedAuthors.length == 1) {
            authorBlock.classList.add('author__active'); 
            document.getElementById(`${clickedAuthors[0]}`).classList.add('author__content__active'); 
            scrollToSection(document.getElementById(`${clickedAuthors[0]}`));
            
            //console.log('НАЖАЛИ НА ', authorSearchName);
            //console.log('МАССИВ: ', clickedAuthors);

        } else{
            //console.log('НАЖАЛИ НА ', authorSearchName);

            //console.log('ПРОШЛЫЙ МАССИВ + АВТОР ТОЛЬКО ЧТО :', clickedAuthors);

            document.getElementById(`${clickedAuthors[0]}`).classList.remove('author__content__active'); 
            document.getElementById(`${clickedAuthors[1]}`).classList.add('author__content__active'); 
            scrollToSection(document.getElementById(`${clickedAuthors[1]}`));

            clickedAuthors.shift();
            //console.log('ПРОШЛЫ АВТОР В МАССИВЕ УДАЛЕН  ', clickedAuthors);
        }        
    };


    // author list
    const   skovoroda = document.getElementById('skovoroda_author'),
            shevchenko = document.getElementById('shevchenko_author'),
            simonenko = document.getElementById('simonenko_author');


    // author init
    skovoroda.addEventListener('click', ()=>{openArticle(skovoroda)});
    shevchenko.addEventListener('click', ()=>{openArticle(shevchenko)});
    simonenko.addEventListener('click', ()=> {openArticle(simonenko)});




});

