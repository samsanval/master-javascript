$(document).ready(function(){
  //Load
  $.get('https://reqres.in/api/users',{page: 2}, function(response){
    response.data.forEach((element) => {
      $('#data').append(element.first_name+' '+element.last_name);
    });
  });
  $.post('https://reqres.in/api/users', {name: 'samuel', job: 'full stack'}, function(response){
    console.log(response);
  });

  $.ajax({
    type: 'POST',
    dataType: 'json',
    url: 'https://reqres.in/api/users',
    contentType: 'application/json',
    data:  {name: 'samuel', job: 'full stack'},
    beforeSend: function(){
      console.log('Enviando usuario');
    },
    success: function(){
      console.log('Exito');
    }
  });
});