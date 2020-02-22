$(document).ready(function (){
    $('.menu').on('click', function(e){
        $('.label__modal_menu').toggleClass('label__modal_menu-open');
    });

    $('#menu-btn-close').on('click', function(e){
        $('.label__modal_menu').toggleClass('label__modal_menu-open');
    });
    
    $('#btn__scroll-about').on('click', function(e){
        $('.label__modal_menu').removeClass('label__modal_menu-open');
    });
    
    $('#btn__scroll-projects').on('click', function(e){
        $('.label__modal_menu').removeClass('label__modal_menu-open');
    });
    
});