$('.wrapper').addClass('loader');

$('.icon-menu').click(function(event){
    $(this).toggleClass('active');
    $('.menu__body').toggleClass('active');
    $('body').toggleClass('lock');
});

function ibg(){
    $.each($('.ibg'), function(){
        if($(this).find('img').length > 0) {
            $(this).css('background-image', 'url("' + $(this).find('img').attr('src')+ '")');
        }
    });
}

function hideFooterMenuList($listElement, $hiddenClass) {

    if ($('body').width() < 500) {
        $listElement.find("li:first-child").click(function() {
            if ( $(this).parent().hasClass($hiddenClass) ) {
                $(this).parent().removeClass($hiddenClass);
            } else {
                $(this).parent().addClass($hiddenClass);
            }
        });
    } else {}

    let isWiderThan500 = true;
    $( window ).resize(function () {
        var bodyWidth = $('body').width();
        if (bodyWidth < 500 && isWiderThan500) {
            isWiderThan500 = false;
            $listElement.find("li:not(:first-child)").addClass($hiddenClass);
        } else if (bodyWidth >= 500 && !isWiderThan500) {
            isWiderThan500 = true;
            $listElement.find("li:not(:first-child)").removeClass($hiddenClass);
        }
    });
    
}

ibg();
hideFooterMenuList($('.footer__list'), 'footer__list_hidden');