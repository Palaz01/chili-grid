$(function(){
   $('.menu-button').on('click', function(){
      $('#main-nav').toggleClass('open');
   });

   $('.closenav').on('click', function(){
      $('#main-nav').removeClass('open');
   });

   $(window).on('scroll', function(){
      $('#main-nav').removeClass('open');
   });
});