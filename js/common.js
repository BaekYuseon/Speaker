$(document).ready(function(){

	$('.menu_2 ul').hide();

	$('.menu_2').mouseover(function(){
		$('.menu_2 ul').slideDown();

	});
	$('.menu_2').mouseleave(function(){
		$('.menu_2 ul').hide();
	});

	$(function(){
        var trigger = $(".trigger");
        var menu = $("#header_gnb");
    
        $(trigger).on("click", function(e){
            e.preventDefault();
            menu.slideToggle();
        });
    
        $(window).resize(function(){
            var w = $(window).width();
    
            if(w > 920 && menu.is(":hidden")) {
                menu.removeAttr("style");
            }
        });
    });

    $(".trigger").on({
        "click" : function() {
            if ($(".hamburger").is(":visible")) {
                    $(".hamburger").hide();
                    $(".close").show();
                    $("#main_content").hide();
                    $("#footer_wrap").hide();
                    
            } else { 
                $(".hamburger").show();
                $(".close").hide();
                $("#main_content").show();
                $("#footer_wrap").show();
            }
        }
    });
});

