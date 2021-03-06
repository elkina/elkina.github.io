//MenuFixed
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

//Slider
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

//Popover
  $(".pop").popover({ trigger: "manual" , html: true, animation:false})
  .on("mouseenter", function () {
      var _this = this;
      $(this).popover("show");
      $(".popover").on("mouseleave", function () {
          $(_this).popover('hide');
      });
  }).on("mouseleave", function () {
      var _this = this;
      setTimeout(function () {
          if (!$(".popover:hover").length) {
              $(_this).popover("hide");
          }
      }, 300);
  });

//Tooltip
  $('[data-toggle="tooltip"]').tooltip();

//Dropdown
  $('[data-toggle="dropdown"]').dropdown();

  $('.order').hover(function() {
    $(this).find('.mini-basket-wrapper').stop(true, true).delay(200).fadeIn(500);
  }, function() {
    $(this).find('.mini-basket-wrapper').stop(true, true).delay(200).fadeOut(500);
  });

  // $('.info-tooltip').hover(function() {
  //   $(this).find('.info-tooltip_popup').stop(true, true).delay(200).fadeIn(500);
  // }, function() {
  //   $(this).find('.info-tooltip_popup').stop(true, true).delay(200).fadeOut(500);
  // });
  $('.info-tooltip').hover( function(e) {
    e.preventDefault();
    $(this).find('.info-tooltip_popup').addClass('active');
  }, function() {
    $(this).find('.info-tooltip_popup').removeClass('active');
  });
  $('.info-tooltip').on('click', function(e) {
    e.preventDefault();
    if ($(this).find('.info-tooltip_popup').hasClass('active')){
      $(this).find('.info-tooltip_popup').removeClass('active');
    } else {
      $(this).find('.info-tooltip_popup').addClass('active');
    }
 
  });

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

$('.owl-carousel').owlCarousel({
  loop:true,
  margin:10,
  nav:true,
  itemsDesktop : true,
  itemsDesktopSmall : true,
  itemsTablet: true,
  itemsMobile : true,
  responsive:{
      0:{
          items:1
      },
      480:{
        items:2
      },
      768:{
          items:3
      },
      980:{
          items:4
      },
      1200:{
          items:5
      },
      1400:{
          items:6
      }
  }
});

$(function() {

  (function quantityProducts() {
    var $quantityArrowMinus = $(".quantity-arrow-minus");
    var $quantityArrowPlus = $(".quantity-arrow-plus");
    var $quantityNum = $(".quantity-num");

    $quantityArrowMinus.click(quantityMinus);
    $quantityArrowPlus.click(quantityPlus);

    function quantityMinus(e) {
      e.preventDefault();
      if ($quantityNum.val() > 1) {
        $quantityNum.val(+$quantityNum.val() - 1);
      }
    }

    function quantityPlus(e) {
      e.preventDefault();
      $quantityNum.val(+$quantityNum.val() + 1);
    }
  })();

});


$(document).ready(function () {
  $('#thumbnails img.thumbnails-img').on('mouseenter', function(){
      var src = $(this).attr('src');
      $('#thumbnails .item').removeClass('active');
      var activPreview = $(this).parent('.item');
      $(activPreview).addClass('active');
      $('#largeImage').attr('src', src);
  });
});


$(function() {
  $(document).on("change keyup input click", "input.number", function() {
      if(this.value.match(/[^0-9]/g)){
          this.value = this.value.replace(/[^0-9]/g, "");
      };
  });
});

$(function() {
  $('#proposalForm').submit(function(e) {
    e.preventDefault();
    var first_name = $('#proposalName').val();
    var email = $('#proposalEmail').val();
    var phone = $('#proposalPhone').val();
 
    $(".error").remove();
 
    if (first_name.length< 1) {
      $('#proposalName').after('<span class="error">Это поле обязательно</span>');
    }
    if (last_name.length< 1) {
      $('#proposalPhone').after('<span class="error">Это поле обязательно</span>');
     } else {
        var regEx = /[+]7\s[\(]\d{3}[\)]\s\d{3}[\-]\d{2}[\-]\d{2}/;
        var validPhone = regEx.test(phone);
        if (!validPhone) {
          $('#proposalPhone').after('<span class="error">Введите номер формата +7 (777) 777-77-77</span>');
        }
    }
    if (email.length< 1) {
      $('#proposalEmail').after('<span class="error">Это поле обязательно</span>');
    } else {
      var regEx = /^[A-Z0-9][A-Z0-9._%+-]{0,63}@(?:[A-Z0-9-]{1,63}.){1,125}[A-Z]{2,63}$/;
      var validEmail = regEx.test(email);
      if (!validEmail) {
        $('#proposalEmail').after('<span class="error">Введите правильный email</span>');
      }
    }
  });

  $('#subscribe').submit(function(e) {
    e.preventDefault();
    var first_name = $('#subscribeName').val();
    var email = $('#subscribeEmail').val();
 
    $(".error").remove();
 
    if (first_name.length< 1) {
      $('#subscribeName').after('<span class="error">Это поле обязательно</span>');
    }
    if (email.length< 1) {
      $('#subscribeEmail').after('<span class="error">Это поле обязательно</span>');
    } else {
      var regEx = /^[A-Z0-9][A-Z0-9._%+-]{0,63}@(?:[A-Z0-9-]{1,63}.){1,125}[A-Z]{2,63}$/;
      var validEmail = regEx.test(email);
      if (!validEmail) {
        $('#subscribeEmail').after('<span class="error">Введите правильный email</span>');
      }
    }
  });
});

//Add order notice
$(document).ready(function () {
  $('.add-to-basket-button button').on('click', function () {
    $('.notice-success').addClass('active');
    setTimeout(function () {
      $('.notice-success').removeClass('active');
  }, 3000)
  })
});


$(document).ready(function() {
	$('.owl-carousel-2').owlCarousel({
		loop:true, 
		nav:true,
		autoplay:true,
		autoplayHoverPause:true,
		smartSpeed:1000,
		autoplayTimeout:4000, 
		responsive:{ 
			0:{
				items:1
			},
			600:{
				items:1
			},
			1000:{
				items:1
			}
		}
	});
});



(function carouselStart(){
  var widthView = $(window).width();
  if (widthView > 768) {
    carouselVert(); 
  } else {
    galleryLargeImg();
  }
  $(window).resize(function() {   
      var widthView = $(window).width();
      if (widthView > 768) {
        carouselVert(); 
      } else {
        galleryLargeImg();
      }
  });
})();

function galleryLargeImg(){
  $('.gallery .item img.thumbnails-img').on('click', function(e){
      e.preventDefault();
      var src = $(this).attr('src');
      console.log(src);
      var newDiv = document.createElement("div");
          newDiv.className = 'largeImg';
          newDiv.innerHTML += '<span class="mobile-menu-close"><img src="images/ic_close.svg"></span><img class="modal-largeImg">';  
          $('body').addClass('modal-open')
          document.body.appendChild(newDiv);
          $('img.modal-largeImg').attr('src', src);
  });
  $(document).on('click', '.largeImg', function(){
    $('.largeImg').remove();
    console.log("hfhfh");
    $('body').removeClass('modal-open');
  });
};



function carouselVert(){
  let width = 120; // ширина картинки
  let height = 120;
  let count = 4; // видимое количество изображений
  
  let list = carousel.querySelector('ul');
  let listElems = carousel.querySelectorAll('li');
  
  let position = 0; // положение ленты прокрутки
  
  carousel.querySelector('.prev').onclick = function() {
    // сдвиг влево
    position += height * count;
    // последнее передвижение влево может быть не на 3, а на 2 или 1 элемент
    position = Math.min(position, 0)
    list.style.marginTop = position + 'px';
  };
  
  carousel.querySelector('.next').onclick = function() {
    // сдвиг вправо
    position -= height * count;
    // последнее передвижение вправо может быть не на 3, а на 2 или 1 элемент
    position = Math.max(position, -height * (listElems.length - count));
    list.style.marginTop = position + 'px';
  };
};



/* конфигурация */



// /* конфигурация */
// let width = 120; // ширина картинки
// let count = 4; // видимое количество изображений

// let list = carousel.querySelector('ul');
// let listElems = carousel.querySelectorAll('li');

// let position = 0; // положение ленты прокрутки

// carousel.querySelector('.prev').onclick = function() {
//   // сдвиг влево
//   position += width * count;
//   // последнее передвижение влево может быть не на 3, а на 2 или 1 элемент
//   position = Math.min(position, 0)
//   list.style.marginLeft = position + 'px';
// };

// carousel.querySelector('.next').onclick = function() {
//   // сдвиг вправо
//   position -= width * count;
//   // последнее передвижение вправо может быть не на 3, а на 2 или 1 элемент
//   position = Math.max(position, -width * (listElems.length - count));
//   list.style.marginLeft = position + 'px';
// };

