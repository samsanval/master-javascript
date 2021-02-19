"use strict";

$(document).ready(function () {
  if(window.location.href.indexOf('index') > -1){
    $(".bxslider").bxSlider({
      mode: "fade",
      captions: true,
      slideWidth: 1200,
      responsive: true,
    });

  }
  if(window.location.href.indexOf('index') > -1){
    let posts = [
      {
        title: "pruebaTitulo1",
        date: "Publicado el dia " + moment().format("MMMM-Do-YYYY"),
        content: "parrafo con muuuuuuuuuuuuucho texto",
      },
      {
        title: "pruebaTitulo2",
        date: "Publicado el dia " + moment().format("MMMM-Do-YYYY"),
        content: "parrafo con muuuuuuuuuuuuucho texto",
      },
      {
        title: "pruebaTitulo3",
        date: "Publicado el dia " + moment().format("MMMM-Do-YYYY"),
        content: "parrafo con muuuuuuuuuuuuucho texto",
      },
      {
        title: "pruebaTitulo4",
        date: "Publicado el dia " + moment().format("MMMM-Do-YYYY"),
        content: "parrafo con muuuuuuuuuuuuucho texto",
      },
    ];
    posts.forEach((element) => {
      console.log(element);
      let post = ` <article class="post">
      <h2>${element.title}</h2>
      <span class="date">${element.date}</span>
      <p>${element.content}</p>
      <a href="#" class="button-more">Leer más</a>
    </article>`;
    $('#posts').append(post);
    });
  }
  let theme = $('#theme');
  $('#to-green').click(function(){
    theme.attr("href","css/green.css");
  });
  $('#to-red').click(function(){
    theme.attr("href","css/red.css");
  });
  $('#to-blue').click(function(){
    theme.attr("href","css/blue.css");
  });

  $('.up').click(function(e){
    e.preventDefault();
    $('html, body').animate({
      scrollTop: 0
    }, 500)
  });

  $('#login form').submit(function(){
    let form_name = $('#form-name').val();
    localStorage.setItem("form_name",form_name);
  });
  let form_name = localStorage.getItem("form_name");
  if(form_name != null && form_name != 'undefined'){
    $('#about p').html("<br/><strong>Bienvenido "+form_name+'</strong>');
    $('#about p').append('<a href="#" id=logout>Cerrar Sesion</a>');
    $('#login').hide();
  }
  $('#logout').click(function(){
    localStorage.clear();
   location.reload();
  });

  if(window.location.href.indexOf('about') > -1){
    $('#accordion').accordion();
  }
  if(window.location.href.indexOf('clock') > -1){
    setInterval(() => {
      let clock = moment().format('hh:mm:ss');
      $('#clock').html(clock);
    })
  }
  if(window.location.href.indexOf('contact') > -1) {
    $.validate({
      lang: 'es'
    })
  }

});
