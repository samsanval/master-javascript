$(document).ready(function(){

  reloadLinks();
  $('#add_button').click(function(){
   $('#menu').append('<li><a href="'+$('#add').val()+'">Enlace nuevo</a></li>');
   reloadLinks();
  });

});

function reloadLinks(){
  $('a').each(function(index){
    let that = $(this);
    const link = that.attr('href');
    that.text(link);
  });
}