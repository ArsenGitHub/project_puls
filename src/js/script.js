$(document).ready(function(){
    $('.carousel__inner').slick({
        speed: 1200,
        autoplay: true,
        autoplaySpeed: 2000,
        prevArrow: '<button type="button" class="slick-prev"><img src="../icon/carousel_icons/left_arrow.png"></button>',
        nextArrow: '<button type="button" class="slick-next"><img src="../icon/carousel_icons/right_arrow.png"></button>'
    });

    // tabs

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

    // modal

    $('[data-modal=consultation]').on('click', function() {
        $('.overlay,#consultation').fadeIn('slow');
    });

    $('.modal__cross').on('click', function() {
        $('.overlay,#consultation,#order, #thanks').fadeOut('slow');
    });

    $('.catalog-item__button').each(function(i) {
        $(this).on('click', function() {
          $('#order .modal__descr').text($('.catalog-item__subtitle').eq(i).text()); 
          $('.overlay,#order').fadeIn('slow');
        });
    }); 

    // Form validation

    function validateForms(form) {
        $(form).validate({
            rules: {
                name:  {
                    required: true,
                    minlength: 2
                  },
                phone: "required",
                email: {
                  required: true,
                  email: true
                }
            },
            messages: {
                name: {
                    required: "Введите свое имя",
                    minlength: jQuery.validator.format("Минимальное допустимое кол-во символов {0}!")
                  },
                phone: "Введите свой номер телефона",
                email: {
                  required: "Введите свой почтовый адрес",
                  email: "Неправильный формат почты"
                }
              }
        });
    };

    validateForms('.consultation__form');
    validateForms('#consultation .modal__form');
    validateForms('#order .modal__form');

    // form submit

/*     $('form').submit(function(e)  {
      e.preventDefault();
      $.ajax({
        type: "POST",
        url: "mailer/smart.php",
        data: $(this).serialize()
      }).done(function() {
        $(this).find("input").val("");
        $('#consultation, #order').fadeOut('slow');
        $('.overlay, #thanks').fadeIn('slow');
        
        $('form').trigger('reset');
      });
      return false;
    }); */

    $('form').submit(function(e) {
      e.preventDefault();
      $.ajax({
          type: "POST",
          url: "mailer/smart.php",
          data: $(this).serialize()
      }).done(function() {
          $(this).find("input").val("");
          $('#consultation, #order').fadeOut();
          $('.overlay, #thanks').fadeIn('slow');

          $('form').trigger('reset');
      });
      return false;
  });

 });