$(document).ready(function(){
    //Mouse Over
    let caja = $('#box');
  /*  caja.mouseover(function(){
        $(this).css("background-color","red");
    });
    //Mouse Out
    caja.mouseout(function(){
        $(this).css("background-color","yellow");
    });
*/
    //Hover
    caja.hover(function(){
        $(this).css("background-color","red");
    },
    function(){
        $(this).css("background-color","yellow");
    });

    /*Click*/
    caja.click(function(){
        $(this).css("background-color","blue");
    });
    caja.dblclick(function(){
        $(this).css("background-color","green");
    });

    /*Focus*/
    $("#name").focus(function(){
        $(this).css("border","2px solid green");
    });
    /*Blur*/
    $("#name").blur(function(){
        $(this).css("border","2px solid #ccc");
        let data = $(this).val();
        $('#data').text(data).show();
    });
    let data = $('#data');
    //Mouse down
    data.mousedown(function(){
        $(this).css("border-color","gray");
    });
    //Mouse up
    data.mouseup(function(){
        $(this).css("border-color","black");
    });
    //Mouse move
    $(document).mousemove(function(){
        console.log(event.clientX);
        $('#follow').css("left",event.clientX).css("top",event.clientY);
    });
});