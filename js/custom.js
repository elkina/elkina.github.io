

(function menuFix(){
  var fixmeTop = $('#nav-menu').offset().top;
  var navMenu = document.getElementById('nav-menu');
  $(window).scroll(function() {   

      var currentScroll = $(window).scrollTop();

      if (currentScroll >= fixmeTop) {
              $(navMenu).addClass('topmenu-fixed');
          } else {
              $(navMenu).removeClass('topmenu-fixed');
      }

  });
})();



(function() {
  $(document).ready(function() {
    $("#slider").slider({
        range: true,
        min: 8,
        max: 260,
        step: 1,
        values: [8, 260],
        animate: 300,
        slide: function(event, ui) {
            for (var i = 0; i < ui.values.length; ++i) {
                $("input.sliderValue[data-index=" + i + "]").val(ui.values[i]);
            }
        }
    });
    $("input.sliderValue").change(function() {
        var $this = $(this);
        $("#slider").slider("values", $this.data("index"), $this.val());
    });
  });



  // $(document).ready(function() {
  //   $('.header-nav_item').hover(function() {
  //     $(this).find('.header-nav_dropdown').stop(true, true).delay(200).fadeIn(500);
  //   }, function() {
  //     $(this).find('.header-nav_dropdown').stop(true, true).delay(200).fadeOut(500);
  //   });
  // });




  $('.mobile-menu-button').on('click', function(e){
    e.preventDefault();
    var $mobileMenu = $(this).parents('.header-nav');
    var $widthDevice = $(window).width();
    if($widthDevice <= 992){
      $mobileMenu.addClass('active');
    } 
  });
  $('.mobile-menu-close').on('click', function(e){
    e.preventDefault();
    var $mobileMenu = $(this).parents('.header-nav');
    var $widthDevice = $(window).width();
    $mobileMenu.removeClass('active');
  });


  $('.filter-button-mobile').on('click', function(e){
    e.preventDefault();
    var $filter = $(this).parents('.filter');
    var $widthDevice = $(window).width();
    if($widthDevice <= 992){
    $filter.toggleClass('active');
    } 
  });
}());