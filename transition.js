$(document).ready(function() {
    $('.burger').click (function(){
        $(this).toggleClass('active');
        $('.fullpage-nav').toggleClass('show');
        $('.hide').toggleClass('active');
$



    });

$('.fullpage-nav-list li').mouseover(function(){
$('.images-container-hidden').addClass('boo');
});
$('.fullpage-nav-list li').mouseleave(function(){
    $('.images-container-hidden').removeClass('boo');
    });


   
});

$('.searchbar').on('click',function(){

$('.searchbar input[type=text]') .toggleClass('searchbar-show');
});




