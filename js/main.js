$(function(){

   // Navigation

   $('.menu-button').on('click', function(){
      $('#main-nav').toggleClass('open');
   });

   $('.closenav').on('click', function(){
      $('#main-nav').removeClass('open');
   });

   $(window).on('scroll', function(){
      $('#main-nav').removeClass('open');
   });

   // Species page

   $('#light').change(function(evt){
      updateView('light', evt.target.checked);
   });

   $('#medium').change(function(evt){
      updateView('medium', evt.target.checked);
   });

   $('#killer').change(function(evt){
      updateView('killer', evt.target.checked);
   }); 

   $('#chili-species').find('.chili-item:visible:first').addClass('chili-item-highlighted');

});

function updateView(categoryName, bVisible) {
   var dataSelectorVal = "";
   switch (categoryName) {
      case "light":
         dataSelectorVal = "img[data-type='light']";
         break;
      case "medium":
         dataSelectorVal = "img[data-type='medium']";
         break;
      case "killer":
         dataSelectorVal = "img[data-type='killer']";
         break;
   }

   $('.chili-item').has(dataSelectorVal).css('display', bVisible ? "" : "none");
}

   


   



  

   