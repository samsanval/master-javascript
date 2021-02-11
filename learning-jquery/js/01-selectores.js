'use strict'

$(document).ready(() => {

    //SELECTORES DE ID
    console.log("We are ready");
    let one = $('#one');
    one.css("background","red").css("color","white");

    let two = $('#two');
    two.css("background","yellow").css("color","green");

    $('#three').css("background","green").css("color","white");

    //SELECTORES DE CLASE
    $('.dashed').click(function() {
        console.log("Click");
        console.log($(this));
        $(this).addClass("zebra");
    });

    //SELECTORES DE ETIQUETA
    let parrafos = $('p').css("cursor","pointer");
    parrafos.click(function(){
        let thisJQUERY = $(this);
        if(thisJQUERY.hasClass("zebra")){
            thisJQUERY.removeClass("zebra");
            if(!thisJQUERY.hasClass("big"))
            {
                thisJQUERY.addClass("big");
            }
            else{
                console.log("lo tiene");
                thisJQUERY.removeClass("big");

            }
        }
    });
    $("a[title='PHP']").css('background-color', '#ccc');

    //Find y parent
    $('p','a').addClass('margen-superior');

    let busqueda = $('#box').find('.resaltado');
    console.log(busqueda);
    let parent = $('#box, .resaltado').eq(0).parent().parent().parent().find("a[title='PHP']");
    console.log(parent);

});