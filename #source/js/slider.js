if ($('.slider__body').length>0){
    
    $('.slider__body').slick({
        autoplay: true,
        infinite: false,
        dots: false,
        // arrows: true,
        accesibility: false,
        slidesToShow: 1,
        autoplaySpeed: 3000,
        adaptiveHeight: false,
        nextArrow: '<button type="button" class="slick-next"></button>',
        prevArrow: '<button type="button" class="slick-prev"></button>',
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
        infinite: false,
        dots: false,
        arrows: false,
        accesibility: false,
        slidesToShow: 4,
        autoplaySpeed: 3000,
        adaptiveHeight: false,
        nextArrow: '<button type="button" class="slick-next"></button>',
        prevArrow: '<button type="button" class="slick-prev"></button>',
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


