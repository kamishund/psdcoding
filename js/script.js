$(".openbtn6").click(function () {
    $(this).toggleClass('active');
    $(".p_sp_nav").toggleClass('active');
});


$(function() {
    $('.slider').slick({
        accessibility: false,
        fade: true,
        autoplay: true,
        infinite: true,
        dots: false,
        arrows: false,
        autoplaySpeed: 3000,
        speed: 3000,
    });

    //////////// 一番目以外のコンテンツは非表示
  $(".style .menu-box:not(:first-of-type)").css("display", "none");
  //////////// タブの制御
  $('.style .tab').click(function () { // タブメニューをhoverしたら
    var index = $('.style .tab').index(this); // hoverしたタブ番号を取得
    $('.style .tab').removeClass('current'); // タブ現在地クラスを削除し、
    $(this).addClass('current'); // hoverしたタブにタブ現在地クラスを付与
    //////////// コンテンツの制御
    $('.style .menu-box').hide().eq(index).show(); // hoverしてないコンテンツは非表示、hoverした番号は表示
  });

  $('.js-menu__item__link').each(function(){
    $(this).on('click',function(){
        $(".submenu").slideToggle();
        return false;
    });
});


});



$(window).on('load resize', function(){
  var winW = $(window).width();
  var devW =  759;
  // $('.menu').on('mouseover', function () {
  //   $(this).children('.card-text').stop().fadeIn();
  // });
  if (winW <= devW) {
    
  } else {
    $('.menu').on('mouseover', function () {
      $(this).children('.card-text').stop().fadeIn();
    });
    $('.menu').on('mouseout', function () {
      $(this).children('.card-text').stop().fadeOut();
    });
  }
});