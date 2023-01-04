(function($){
    "use strict";
    jQuery(document).ready(function($){
        
        $(".embed-responsive iframe").addClass("embed-responsive-item");
        $(".carousel-inner .item:first-child").addClass("active");

        $('[data-toggle="tooltip"]').tooltip();

        $(".stuff-list").owlCarousel({
            items: 4,
            autoplay: false
        });

    });

    jQuery(window).load(function(){

    });

}(jQuery));