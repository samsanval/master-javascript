$(document).ready(function(){
  $('#show').click(function(){
    $(this).fadeOut('slow');
    $('#box').show();
    $('#hide').fadeIn('smooth');
  });
  $('#hide').click(function(){
    $('#box').fadeOut('slow');
    $(this).hide();
    $('#show').fadeIn('normal');


  });

  $('#animation').click(function(){
    console.log('animar');
    $('#box').animate({marginLeft:'500px', fontSize: '40px', height: '200px'},'slow')
    .animate({borderRadius: '900px', marginTop: '50px'});
  });
});