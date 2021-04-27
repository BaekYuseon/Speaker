$(function(){
    var trigger = $(".hamberger");
    var menu = $("#header_gnb ");

    $(trigger).on("click", function(e){
        e.preventDefault();
        menu.slideToggle();
    });

    $(window).resize(function(){
        var w = $(window).width();

        if(w > 320 && menu.is(":hidden")) {
            menu.removeAttr("style");
        }
    });
});