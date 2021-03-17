$(document).ready(function(){

  // navbar hide and show
  $(".menu i").click(function(){
    $(".nav-ul").toggle().addClass("animate__slideInRight");
    // animate__slideOutRight
  });

  // click navlink and go to section
    $('.nav-link,.imp-link').on('click', function() {
        var scrollAnchor = $(this).attr('href'),
            scrollPoint  = $('section[id="'+scrollAnchor+'"]').offset().top -100;
                          
       $('body,html').animate({
           scrollTop: scrollPoint
       }, 500);
       return false;
    });
          
  // header class fix 
	$(window).scroll(function() {
    if ($(window).scrollTop() >= 550) {
        $('header').addClass('fixed');
    } else {
        $('header').removeClass('fixed');
    }
    });

  // this is active class on scroll
  $(window).scroll(function() {
        var scrollDistance = $(window).scrollTop();
        // Assign active class to nav links while scolling
        $('.scroll').each(function(i) {
                if ($(this).position().top <= scrollDistance ) {
                        $(".nav-link.active").removeClass('active');
                        $(".nav-link").eq(i).addClass('active');
                }
        });
  }).scroll();

  
});






 
   

    
    