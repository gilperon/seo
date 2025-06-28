/*!
* JavaScript Global para o site PH3A 
* @Global.js está sendo importado em todas as páginas
*/

$(document).ready(function() {

    /* Exibe Menu Flutuante */
    $(window).bind('scroll', function () {
        if ($(window).scrollTop() > 100) {
            $('#desktop-menu').addClass('fixed');
        }else{
            $('#desktop-menu').removeClass('fixed');
        }
    });

    /* Função para animar imagens usadas no site (referência animar-elementos-minify.js) */
    iniciar_animacao(100,"animated");

    /* Menu Mobile DropDown Status Active to Produtos*/
    $("#produtos-drop").click(function() { $(this).toggleClass('active'); });

    /* Efeito de Flip quando clicar sobre FlipCards usado em algumas páginas dos Produtos */
    $(".flip-cards").click(function() { $(this).toggleClass('flipInX'); });

    /* Scroll para Formulário de Contato da Zoho */
    $(".scroll-contato").click(function() { $('html, body').animate({ scrollTop: $("#contato-ph3a").offset().top-50 }, 200);  });

});
