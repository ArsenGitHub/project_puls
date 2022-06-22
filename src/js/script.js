$(document).ready(function(){
    $('.carousel__inner').slick({
        speed: 1200,
        autoplay: true,
        autoplaySpeed: 2000,
        prevArrow: '<button type="button" class="slick-prev"><img src="../icon/carousel_icons/left_arrow.png"></button>',
        nextArrow: '<button type="button" class="slick-next"><img src="../icon/carousel_icons/right_arrow.png"></button>'
    });

    $('ul.catalog__tabs').on('click', 'li:not(.catalog__tabs-item--active)', function() {
        $(this)
          .addClass('catalog__tabs-item--active').siblings().removeClass('catalog__tabs-item--active')
          .closest('div.container').find('div.catalog__content').removeClass('catalog__content--active').eq($(this).index()).addClass('catalog__content--active');
    });

    function toggleSlide(item) {
        $(item).each(function(i) {
            $(this).on('click', function(e) {
                e.preventDefault();
                $('.catalog-item__front').eq(i).toggleClass('catalog-item__front--active');
                $('.catalog-item__back').eq(i).toggleClass('catalog-item__back--active');
            })
        });
    };

    toggleSlide('.catalog-item__link-about');
    toggleSlide('.catalog-item__link-back');
 });