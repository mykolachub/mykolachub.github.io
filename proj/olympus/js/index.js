'use strict';

console.log('im working!');
var currentTime = document.getElementById('current_time');
var img_gal = document.getElementById('img_');
var img_count = 0; // Счетчик. Текущий елемент
var imgs = [
	'images/1.jpg',
	'images/2.jpg',
	'images/3.jpg',
];

console.log('Картинок загружено: '+imgs.length);

function sliderUp() {
	if (img_count<imgs.length-1) {
		img_count++;
		console.log('Текущая картинка: '+img_count);
		console.log('src: '+imgs[img_count]);
		img_gal.src=imgs[img_count];
	}else{
		img_count=0;
		console.log('Текущая картинка: '+img_count);
		console.log('src: '+imgs[img_count]);
		img_gal.src=imgs[img_count];
	}
	
}

function sliderDown() {
	if (img_count == 0) {
		img_count = imgs.length-1;
		console.log('Текущая картинка: '+img_count);
		console.log('src: '+imgs[img_count]);
		img_gal.src=imgs[img_count];
	}else{
		img_count --;
		console.log('Текущая картинка: '+img_count);
		console.log('src: '+imgs[img_count]);
		img_gal.src=imgs[img_count];
	}
}



setInterval(sliderUp,7000);//Выполняет функцию(Слeд Слайд) каждые 7Сек

//show/hide information on article

function showMore(){
	if (document.querySelector('.cottage').style.overflow == 'hidden') {
		document.querySelector('.cottage').style.overflow = 'visible';
		document.querySelector('.cottage').style.height = 'auto';
		document.getElementById('btn_moreinfo').style.opacity = '0.5';
		console.log('overflow = "visible"');
	}else{
		console.log('overflow = "hidden"');
		document.querySelector('.cottage').style.overflow = 'hidden';
		document.querySelector('.cottage').style.height = '200px';
		document.getElementById('btn_moreinfo').style.opacity = '1';
	}
}


// btn move to top
let scrolled, timer;

document.getElementById('btn_move_to_top').onclick = function(){
	
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
};


//текущее время 



function Time(){
	let now = new Date();
	currentTime.innerHTML = now.getHours()+":"+now.getMinutes()+":"+now.getSeconds(); 
	
};

setInterval(Time, 1);