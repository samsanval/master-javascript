$(document).ready(function(){
  $('.element').draggable();

  $('.element').resizable();

 // $('.selectable').selectable();
  $('.selectable').sortable({
    update: function(event,ui){
      console.log("Ha cambiado la lista");
    }
  });
  $('#moved').draggable();
  $('#area').droppable();

  $('#show').click(function(){
    $(".box-effect").toggle('explode');
  });

  $(document).tooltip();

  $('.popup').dialog();
  $('#calendar').datepicker();

  $('#tabs').tabs();

});