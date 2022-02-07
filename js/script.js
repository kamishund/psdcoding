let swipeOption = {
  loop: true,
  effect: 'fade',
  autoplay: {
    delay: 4000,
    disableOnInteraction: false,
  },
  speed: 2000,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  }
}
new Swiper('.swiper-container', swipeOption);



$(function () {
  $(".openbtn1").click(function () {
    $(this).toggleClass('active');
    $('.nav-wrapper').toggleClass('fade');
    // $('.nav-wrapper').toggleClass('slide-in'); 
    $('body').toggleClass('active'); 
  });
});



$(function () {
  jQuery(window).on('scroll', function () {
    // トップがどこまで行ったらの指定
    if (jQuery('.mainvisual').height() < jQuery(this).scrollTop()) {
        jQuery('header').addClass('change-color');
    } else {
        jQuery('header').removeClass('change-color');
    }
  });
});


$(function() {
  $('.visible').on('inview', function(event, isInView) {
  //一度のみのinviewの際は　.oneにする
    if (isInView) {
		// .visibleがビューポートに入った場合
    	$(this).addClass('effect');
    } else {
		// .visibleがビューポートにから抜けた場合
    	// $(this).removeClass('effect');
    }
	//$('#footer').off('inview');
  });
});


$(function() {
  $('.under').on('inview', function(event, isInView) {
  //一度のみのinviewの際は　.oneにする
    if (isInView) {
		// .visibleがビューポートに入った場合
    	$(this).addClass('effect');
    } else {
		// .visibleがビューポートにから抜けた場合
    	// $(this).removeClass('effect');
    }
	//$('#footer').off('inview');
  });
});


$(function () {
  $('#loading').addClass('loaded');
});