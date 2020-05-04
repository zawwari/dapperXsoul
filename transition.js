$(document).ready(function() {
    $('.burger').click (function(){
        $(this).toggleClass('active');
        $('.fullpage-nav').toggleClass('show');
        $('.hide').toggleClass('active');
$



    });
    $(window).scroll(function() {
        
        var $dots=$(".name-text");

        if ($(window).scrollTop() > 100){
$dots.addClass('same-text');
        }
        else {($dots.removeClass('same-text',100));
    }
       
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




