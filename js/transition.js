$(document).ready(function() {
    $('.burger').click(function() {
        $(this).toggleClass('active');
        $('.fullpage-nav').toggleClass('show');
        $('.hide').toggleClass('active');
    });
    $('.fullpage-nav-list li').mouseover(function() {
        $('.images-container-hidden').addClass('boo');
    });
    $('.fullpage-nav-list li').mouseleave(function() {
        $('.images-container-hidden').removeClass('boo');
    });
    $('.searchbar').on('click', function() {
        $('.searchbar input[type=text]').toggleClass('searchbar-show');
    });
    $(window).scroll(function() {
        if ($(window).scrollTop() > 50) {
            $('.scroll-icon').hide();
        } else {
            $('.scroll-icon').show();
        }
    });

    var typed = new Typed('.soul', {
        strings: ["soul", "you", "men", "looks"],
        typeSpeed: 100,
        loop: true,
        backSpeed: 100,
        fadeOut: false,
        fadeOutClass: 'typed-fade-out',
        fadeOutDelay: 500

    });
    $('header').vide({

        loop: true,
        resize: true





    })




}
});