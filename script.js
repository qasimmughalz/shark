function openNav() {
var headerNav = document.getElementById("headerNav");
  headerNav.classList.add("open");
}
function closeNav() {
  var headerNav = document.getElementById("headerNav");
  headerNav.classList.remove("open");
}

(function ($) {
    "use strict";
      // Portfolio isotope and filter
    var portfolioIsotope = $('.portfolio-container').isotope({
        itemSelector: '.portfolio-item',
        layoutMode: 'fitRows'
    });
    $('#portfolio-flters li').on('click', function () {
        $("#portfolio-flters li").removeClass('active');
        $(this).addClass('active');

        portfolioIsotope.isotope({filter: $(this).data('filter')});
    });
})(jQuery);

$(window).scroll(function(){
    if ($(this).scrollTop() > 50) {
       $('#dynamic').addClass('header-sticky');
    } else {
       $('#dynamic').removeClass('header-sticky');
    }
});





    
// SILDER


     


   




