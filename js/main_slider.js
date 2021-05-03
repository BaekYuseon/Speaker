$(function() {
    $(".bxslider").bxSlider({
    sliderWidth:600,
    captions:false,
    auto:true,
    speed:2000,
    autoControls:false,
    stopAutoOnclick:true,
    });

    $(function() {
        $('.owl-carousel').owlCarousel({
            items:3,
            margin:10,
            loop:true,
            nav:true,
            autoplay:true,
            autoplayTimeout:3000,
            autoplayHoverPause:true,
            animateOut:'slideOutDown',
            animateIn:'flipInX',
            stagePadding:30,
            smartSpeed:450
        });
    });
});