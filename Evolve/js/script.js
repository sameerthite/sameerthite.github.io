/**
 *
 * Evolve SoftTech
 *
 */

/*=============================================
=            Fixed Navbar Function            =
=============================================*/

$(function() {

    var menu = $('.navbar');
    var origOffsetY = menu.offset().top;

    function scroll() {
        if ($(window).scrollTop() >= origOffsetY) {
            $('.navbar').addClass('navbar-fixed-top');
        } else {
            $('.navbar').removeClass('navbar-fixed-top');
        }
    }
    document.onscroll = scroll;
});

/*=====  End of Fixed Navbar Function  ======*/

/*====================================
=            AOS Function            =
====================================*/

AOS.init({
    easing: 'ease-out-back',
    duration: 1000
});

/*=====  End of AOS Function  ======*/

/*=====================================
=            Type Function            =
=====================================*/

$(function() {
    $(".element").typed({
        strings: ["Welcome to Evolve SoftTech", "We help you to make your career bright!", "Join us!"],
        typeSpeed: 50,
        backSpeed: 0,
        loop: true,
        startDelay: 100,
        loopCount: true,
        backDelay: 2000
    });
});

/*=====  End of Type Function  ======*/