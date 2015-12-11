/*$(".nav-text").hover(function(){
	$(".nav-text").css("border" , "solid 3px white")
},function(){
	$(".nav-text").css("border-width" ,0 ) ;
});

$("#nav-li2").hover(function(){
	$("#nav-li2").css("border" , "solid 3px white")
},function(){
	$("#nav-li2").css("border-width" ,0 ) ;
});

$("#nav-li3").hover(function(){
	$("#nav-li3").css("border" , "solid 3px white")
},function(){
	$("#nav-li3").css("border-width" ,0 ) ;
});

$("#nav-li4").hover(function(){
	$("#nav-li4").css("border" , "solid 3px white")
},function(){
	$("#nav-li4").css("border-width" ,0 ) ;
});

$("#nav-li5").hover(function(){
	$("#nav-li5").css("border" , "solid 3px white")
},function(){
	$("#nav-li5").css("border-width" ,0 ) ;
});

*/


$("#word").load(function(){
	fadeIn() ;
});

var hash ;

$(".nav li a[href^='#']").on('click', function(e) {
   // prevent default anchor click behavior
   e.preventDefault();
   // store hash
   hash = this.hash;
   // animate
   $('html, body').animate({ scrollTop: $(hash).offset().top },
    700, 'easeInBack', function(){
    // when done, add hash to url
    // (default click behaviour)
    window.location.hash = hash;
    });

});
$(".smoothscroll a[href^='#']").on('click', function(e) {
   // prevent default anchor click behavior
   e.preventDefault();
   // store hash
   hash = this.hash;
   // animate
   $('html, body').animate({ scrollTop: $(hash).offset().top },
    500, 'easeInBack', function(){

    window.location.hash = hash;
    });

});
$("#word a[href^='#']").on('click', function(e) {
   // prevent default anchor click behavior
   e.preventDefault();
   // store hash
   hash = this.hash;
   $('html, body').animate({ scrollTop: $(hash).offset().top },
    500, 'easeInBack', function(){

    window.location.hash = hash;
    });

});