$(document).ready(function(){
    $('.carousel__inner').slick({
        speed: 1200,
        autoplay: true,
        autoplaySpeed: 2000,
        prevArrow: '<button type="button" class="slick-prev"><img src="../icon/carousel_icons/left_arrow.png"></button>',
        nextArrow: '<button type="button" class="slick-next"><img src="../icon/carousel_icons/right_arrow.png"></button>'
    });
 });