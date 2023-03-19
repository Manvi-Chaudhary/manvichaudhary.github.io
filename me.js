$(document).ready(function(){
  $(window).scroll(function(){
  	var scroll = $(window).scrollTop();
	  if (scroll > 300) {
	    $("ul").css("background" , "aliceblue");
	  }

	  else{
		  $("ul").css("background" , "#333");  	
	  }
  })
})