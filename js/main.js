// 穴埋め形式です。空いている箇所を埋めて実装してください

$(function () {
  /*=================================================
  ハンバーガ―メニュー
  ===================================================*/
  // ハンバーガーメニューをクリックした時
  $(".hamburger").on("click", function () {
    $("header").toggleClass("open");
  });

  // #maskのエリアをクリックした時にメニューを閉じる
  $("#mask").on("click", function () {
    $("header").removeClass("open");
  });

  // リンクをクリックした時にメニューを閉じる
  $("#navi a").on("click", function () {
    $("header").removeClass("open");
  });


  //.accordion_oneの中の.accordion_headerがクリックされたら
  $('.s_01 .accordion_one .accordion_header').click(function () {
    //クリックされた.accordion_oneの中の.accordion_headerに隣接する.accordion_innerが開いたり閉じたりする。
    $(this).next('.accordion_inner').slideToggle();
    $(this).toggleClass("open");
  });

 function checkBreakPoint() {
    w = $(window).width();    //今のブラウザの横幅を取ってる
    if (w >= 780) {
      // PC向け（767px以上のとき）
      $('.slick-area').not('.slick-initialized').slick({  //.not('.slick-initialized') の意味はまだslickが適用されてない要素だけ対象にする
        //スライドさせる
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: false,
        autoplay: true,
        autoplaySpeed: 2000
      });
    } else {
      // SP向け
      $('.slick-area.slick-initialized').slick('unslick');
    }
  }
  // ウインドウがリサイズする度にチェック
  $(window).resize(function () {
    checkBreakPoint();
  });
  // 初回チェック
  checkBreakPoint();



});