$(document).ready(function() {

    /* Menu Flutuante */
    $(window).bind('scroll', function () {
        if ($(window).scrollTop() > 100) {
            $('#desktop-menu').addClass('fixed');
        } else {
            $('#desktop-menu').removeClass('fixed');
        }
    });

    /* Inicio das Animacoes para IMGS do site PH3A */
    iniciar_animacao(100,"animated");


    /* Menu Scroll to Zoho - Click over Contato */
    $(".scroll-contato").click(function() {
        $('html, body').animate({ scrollTop: $("#contato-ph3a").offset().top-50 }, 200); 
    });


    /* Products FlipCads on click */
    $(".flip-cards").click(function() {
        $(this).toggleClass('flipInX');
    });
    


});
