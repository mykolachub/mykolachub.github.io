'use strict';

console.log("если ты меня видишь значит я подключен и работаю!");



let btn_list_content = document.getElementById('btn_list_content');
let btn_list = document.getElementById('btn_list');
let btn_type_content = document.getElementById('btn_type_content');
let btn_size_content = document.getElementById('btn_size_content');
let btn_brand_content = document.getElementById('btn_brand_content');
let btn_color_content = document.getElementById('btn_color_content');
let btn_to_top = document.getElementById('to_top');
let scrolled;
let timer;
let timer1;
let MainWrapper = document.getElementById('main_wrapper');
let HeaderBtnToMain = document.getElementById('header_btn_to_main-man');
let CurrentPositionMainWrapper;
let CurrentPositionHeaderBtnToMain = 0;


//кнопка gifts for men -> shop

document.getElementById('header_btn_to_main-man').onclick = function(){
	MainWrapper.style.display = 'block';

	CurrentPositionMainWrapper = MainWrapper.getBoundingClientRect().top - 10;
	CurrentPositionHeaderBtnToMain = HeaderBtnToMain.getBoundingClientRect().top - 772;

	console.log('y position of HeaderBtnToMain is ' + CurrentPositionHeaderBtnToMain);
	//console.log('y position of MainWrapper is ' + CurrentPositionMainWrapper);
	
	scrolledToMain();
	
	//window.scrollTo(0 ,  MainWrapper.getBoundingClientRect().top );


}

//кнопка gifts for women -> shop

document.getElementById('header_btn_to_main-woman').onclick = function(){
	MainWrapper.style.display = 'block';

	CurrentPositionMainWrapper = MainWrapper.getBoundingClientRect().top - 10;
	CurrentPositionHeaderBtnToMain = HeaderBtnToMain.getBoundingClientRect().top - 772;

	console.log('y position of HeaderBtnToMain is ' + CurrentPositionHeaderBtnToMain);
	//console.log('y position of MainWrapper is ' + CurrentPositionMainWrapper);
	
	scrolledToMain();
	
	//window.scrollTo(0 ,  MainWrapper.getBoundingClientRect().top );


}



function scrolledToMain() {
	if (CurrentPositionHeaderBtnToMain < CurrentPositionMainWrapper) {
		window.scrollTo(0 ,  CurrentPositionHeaderBtnToMain );
		CurrentPositionHeaderBtnToMain = CurrentPositionHeaderBtnToMain + 5;
		timer1 = setTimeout(scrolledToMain, 1);
	}
	else{
		clearTimeout(timer1);
		window.scrollTo(0, CurrentPositionMainWrapper);
	}
}

//кнопка вверх


document.getElementById('to_top').onclick = function(){
	scrolled = window.pageYOffset;
	console.log(window.pageYOffset);
	scrolledToTop();
}

function scrolledToTop() {
	if (scrolled > 0) {
		window.scrollTo(0, scrolled);
		scrolled = scrolled - 10;
		timer = setTimeout(scrolledToTop, 1);
	}
	else{
		clearTimeout(timer);
		window.scrollTo(0,0);
	}
}

// modal window 'menu' for mobile 

document.getElementById('btn_header_menu').onclick = function(){
	document.getElementById('modal_menu-wrap').style.display = 'block';
	document.getElementById('close_modal_menu').onclick = function(){
		document.getElementById('modal_menu-wrap').style.display = 'none';
	}
}

document.getElementById('mobile_header_btn_menu').onclick = function(){
	document.getElementById('modal_menu-wrap').style.display = 'block';
	document.getElementById('close_modal_menu').onclick = function(){
		document.getElementById('modal_menu-wrap').style.display = 'none';
	}
}

document.getElementById('header_btn_to_main_man-mobile').onclick = function(){
	document.getElementById('modal_menu-wrap').style.display = 'none';
	MainWrapper.style.display = 'block';

	CurrentPositionMainWrapper = MainWrapper.getBoundingClientRect().top - 10;
	CurrentPositionHeaderBtnToMain = HeaderBtnToMain.getBoundingClientRect().top - 772;

	console.log('y position of HeaderBtnToMain is ' + CurrentPositionHeaderBtnToMain);
	//console.log('y position of MainWrapper is ' + CurrentPositionMainWrapper);
	
	scrolledToMain();
	
	//window.scrollTo(0 ,  MainWrapper.getBoundingClientRect().top );
}
function scrolledToMain() {
	if (CurrentPositionHeaderBtnToMain < CurrentPositionMainWrapper) {
		window.scrollTo(0 ,  CurrentPositionHeaderBtnToMain );
		CurrentPositionHeaderBtnToMain = CurrentPositionHeaderBtnToMain + 5;
		timer1 = setTimeout(scrolledToMain, 1);
	}
	else{
		clearTimeout(timer1);
		window.scrollTo(0, CurrentPositionMainWrapper);
	}
}
document.getElementById('header_btn_to_main_woman-mobile').onclick = function(){
	document.getElementById('modal_menu-wrap').style.display = 'none';
	MainWrapper.style.display = 'block';

	CurrentPositionMainWrapper = MainWrapper.getBoundingClientRect().top - 10;
	CurrentPositionHeaderBtnToMain = HeaderBtnToMain.getBoundingClientRect().top - 772;

	console.log('y position of HeaderBtnToMain is ' + CurrentPositionHeaderBtnToMain);
	//console.log('y position of MainWrapper is ' + CurrentPositionMainWrapper);
	
	scrolledToMain();
	
	//window.scrollTo(0 ,  MainWrapper.getBoundingClientRect().top );
}
function scrolledToMain() {
	if (CurrentPositionHeaderBtnToMain < CurrentPositionMainWrapper) {
		window.scrollTo(0 ,  CurrentPositionHeaderBtnToMain );
		CurrentPositionHeaderBtnToMain = CurrentPositionHeaderBtnToMain + 5;
		timer1 = setTimeout(scrolledToMain, 1);
	}
	else{
		clearTimeout(timer1);
		window.scrollTo(0, CurrentPositionMainWrapper);
	}
}



// modal window opens when 'privacy policy' is clicked (модальное окно на хедере)


document.getElementById('btn_privat_policy').onclick = function(){
	document.querySelector('#modal_faq-wrap').style.display = 'flex';
	document.querySelector('body').style.background = 'rgba(0,0,0, 0.2)';
	document.getElementById('btn_modal_faq_close').onclick = function(){
		document.querySelector('#modal_faq-wrap').style.display = 'none';
		document.querySelector('body').style.background = 'rgba(0,0,0, 0)';
	}
}

//  показать\скрыть блок (обертка - секция слева) 

function btn_list_f(){

	if (btn_list_content.style.display == "none") {
		btn_list_content.style.display = "block";
		btn_list.innerHTML="hide list";
		console.log('block');
	} else {
		console.log('none');
		btn_list_content.style.display = "none";
		btn_list.innerHTML="open list";
	}
}

//   показать\скрыть блок (обертка - секция слева - елемент(тип) )


function btn_type_f(){

	if (btn_type_content.style.display == "flex") {
		btn_type_content.style.display = "none";
		list_btn.innerHTML="hide list";
		console.log('block');
	} else {
		console.log('none');
		btn_type_content.style.display = "flex";
		btn_list.innerHTML="open list";
	}
}

// показать\скрыть блок (обертка - секция слева - елемент(размер) )

function btn_size_f(){

	if (btn_size_content.style.display == "flex") {
		btn_size_content.style.display = "none";
		list_btn.innerHTML="hide list";
		console.log('block');
	} else {
		console.log('none');
		btn_size_content.style.display = "flex";
	}
}
// показать\скрыть блок (обертка - секция слева - елемент(брєнд) )

function btn_brand_f(){

	if (btn_brand_content.style.display == "flex") {
		btn_brand_content.style.display = "none";
		list_btn.innerHTML="hide list";
		console.log('block');
	} else {
		console.log('none');
		btn_brand_content.style.display = "flex";
	}
}

// показать\скрыть блок (обертка - секция слева - елемент(color) )

function btn_color_f(){

	if (btn_color_content.style.display == "flex") {
		btn_color_content.style.display = "none";
		list_btn.innerHTML="hide list";
		console.log('block');
	} else {
		console.log('none');
		btn_color_content.style.display = "flex";
	}
}



//slider is here

let images = document.querySelectorAll('.section_slider img');
let current = 0;

function slider() {
	for (var i = 0; i < images.length; i++) {
			images[i].classList.add('opacity0');
	}
	images[current].classList.remove('opacity0');
}
slider();

//document.querySelector('.section_slider').onclick = slider;
document.querySelector('.section_slider_previous').onclick = function() {

	if (current - 1 == -1 ) {
		current = images.length - 1;
	}

	else {
		current--;
	}
	slider();
};

document.querySelector('.section_slider_next').onclick = function () {
	if (current + 1 == images.length ) {
		current = 0;
	}

	else {
		current++;
	}
	slider();
};