// テスト用
// $(".en-copy").css("color","red");

jQuery(function ($) {
    //変数宣言
    var win = $(window),
        // first viewの高さ取得
        fvHeight = $(".fv").height(),
        scr = 0;

    //スクロール時
    win.on("scroll load resize", function () {
        scr = win.scrollTop();
        //値のテスト用
        console.log(fvHeight);
        //fv通過時
        if (scr > fvHeight) {
            $(".header").addClass("header--bg-change");
        } else {
            $(".header").removeClass("header--bg-change");
        }
    })

    //ハンバーガーボタン押下
    $(".hamburger-btn").on("click", function () {
        $("body").toggleClass("noscroll");
        $(".bg-cover").toggleClass("bg-cover--open");
        $(".header-nav").toggleClass("header-nav--open");
        $(".header__btn").toggleClass("header__btn--open");
        $(".hamburger-btn").toggleClass("hamburger-btn--open");
    })

    // アコーディオン
    $(".accordion__title").on("click", function () {
        $(this).toggleClass("accordion__title--open");
        $(this).next(".accordion__text").slideToggle();
    })

});
