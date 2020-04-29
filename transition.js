$(document).ready(function() {
    $('.burger').click (function(){
        $(this).toggleClass('active');
        $('.fullpage-nav').toggleClass('show');
        $('.hide').toggleClass('active');
$



    });
    $(window).scroll(function() {
        
        var $dots=$(".fixed-right-dots span");

        if ($(window).scrollTop() > 518){
$dots.addClass('dotchange');
        }
        else {($dots.removeClass('dotchange',500));
    }
       
    });
$('.fullpage-nav-list li').mouseover(function(){
$('.images-container-hidden').addClass('boo');
});
$('.fullpage-nav-list li').mouseleave(function(){
    $('.images-container-hidden').removeClass('boo');
    });


$(window).on('load',function(){
    $("#video-repeat").play();
});
    $("#video-repeat").on('ended', function(){
        this.play();
   });

$('.emailed').on('focus',function(){
    $(this).parent().addClass('bring-down');
    $('.newletter-btn').css("margin-top","30px");

    $('.emailed').focusout(function(){
        $(this).parent().removeClass('bring-down',200);
        $('.newletter-btn').css("margin-top","0px");
});
   
});

$('.searchbar').on('click',function(){

$('.searchbar input[type=text]') .toggleClass('searchbar-show');
});
});




