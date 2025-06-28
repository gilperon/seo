$(document).ready(function() {
    /* Menu Flutuante */
    $(window).bind('scroll', function () {
        if ($(window).scrollTop() > 100) {
            $('#desktop-menu').addClass('fixed');
        } else {
            $('#desktop-menu').removeClass('fixed');
        }
    });
});
