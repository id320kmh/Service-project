if ($('.slider__body').length>0){
    
    $('.slider__body').slick({
        autoplay: true,
        infinite: true,
        dots: false,
        arrows: true,
        accesibility: false,
        slidesToShow: 1,
        autoplaySpeed: 3000,
        adaptiveHeight: false,
        appendArrows: '.slider__control',
        nextArrow: '<span class="slider__arrow slider__arrow_l"><button type="button" class="slick-next"></button></span>',
        prevArrow: '<span class="slider__arrow slider__arrow_r"><button type="button" class="slick-prev"></button></span>',
        responsive:[{
            breakpoint:768,
            settings: {
            }
        }]
    });
}

if ($('.service__carousel').length>0){
    
    $('.service__carousel').slick({
        autoplay: true,
        infinite: true,
        dots: false,
        arrows: true,
        accesibility: false,
        slidesToShow: 4,
        autoplaySpeed: 3000,
        adaptiveHeight: false,
        appendArrows: '.service__control-arrows',
        prevArrow: '<span class="ibg"><button type="button" class="service__arrow-left"></button></span>',
        nextArrow: '<span class="ibg"><button type="button" class="service__arrow-right"></button></span>',
        responsive:[            
            {
                breakpoint:1300,
                settings: {
                    slidesToShow: 3,
                }
            },
            {
                breakpoint:965,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint:675,
                settings: {
                    slidesToShow: 1,
                }
            }
        ]

    });
  
    $('.service__carousel').on('afterChange', function(event, slick, currentSlide){
        $('.service__current-slide').html(currentSlide+1);
    });

}


if ($('.service__item-row').length>0){

    $('.service__item-row').slick({
        autoplay: true,
        infinite: false,
        dots: false,
        arrows: true,
        accesibility: false,
        slidesToShow: 3,
        autoplaySpeed: 3000,
        adaptiveHeight: false,
        appendArrows: '.service__control-arrow',
        prevArrow: '<span class="ibg"><button type="button" class="service__btn service__btn_left"></button></span>',
        nextArrow: '<span class="ibg"><button type="button" class="service__btn service__btn_right"></button></span>',
        // Cами кнопки не нужно дублировать в html. Просто создаем для них контейнер, и указываем в <appendArrows> этот контейнер. Когда мы указываем <prevArrow> и <nextArrow>, тем самым мы создаем и вставляем эти кнопки в данный контейнер!
        responsive:[            
            {
                breakpoint:1300,
                settings: {
                    slidesToShow: 3,
                }
            },
            {
                breakpoint:965,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint:660,
                settings: {
                    slidesToShow: 1,
                }
            }
        ]
    });
}


