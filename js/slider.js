$(document).ready(function(){
    $('.slider').slick({
        slidesToShow: 2,
        slidesToScroll: 2,
        speed: 1000,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 5000,
        vertical: true,
        verticalSwiping: true,
    });
});

$('.center-slider').slick({
    centerMode: true,
    centerPadding: '0px',
    slidesToShow: 3,
    autoplay: false,
    autoplaySpeed: 3000,
    focusOnSelect: true,
    swipe: false,
    arrows: false,
});