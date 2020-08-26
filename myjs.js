$(document).ready(function(){
    var scrollLink=$('.scroll');
  
  // Smooth Scrolling
  
  scrollLink.click(function(e){
    e.preventDefault();
    $('body,html').animate({
       scrollTop:$(this.hash).offset().top
    },900 );
  })
  
  // Active Link
  $(window).scroll(function(){
    var scrollBarLocation=$(this).scrollTop();
     scrollLink.each(function(){
       var sectionOffset=$(this.hash).offset().top;
      if(sectionOffset<=scrollBarLocation){
        $(this).parent().addClass('active');
        $(this).parent().siblings().removeClass('active');
      }
  
     })
  
  })
  })