var $ = jQuery;
$(document).ready(function(event) {

    let scroll_top = $('.scroll-top');

    // console.log(scroll_top);

    scroll_top.hide(300);

    $(window).scroll(function() {

        if( $(window).scrollTop() > 200 ) {
            scroll_top.show(300);
        } else {
            scroll_top.hide(300);
        }

    });

    scroll_top.click(function() {
        $('html').animate({scrollTop: 0}, 1000);
    });

});