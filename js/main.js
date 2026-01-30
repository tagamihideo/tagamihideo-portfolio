
// Slickスライダーの初期化
$(document).ready(function(){
    $('.slider').slick({
        autoplay: true,
        autoplaySpeed: 3000,
        dots: true,
        arrows: true,
        infinite: true,
        speed: 100,
        slidesToShow: 1,
        slidesToScroll: 1
    });
});

// Lightboxの設定 (オプション: クリックで拡大)
lightbox.option({
    'resizeDuration': 200,
    'wrapAround': true
});

$(document).ready(function(){
    // すべての動画要素を取得
    $('video').each(function() {
        var video = this;
        // PC（768px以上）でループオン、モバイルでオフ
        if ($(window).width() >= 768) {
            video.loop = true;
        } else {
            video.loop = false;
        }
    });
    
    // ウィンドウリサイズ時にも適用（オプション）
    $(window).resize(function() {
        $('video').each(function() {
            var video = this;
            if ($(window).width() >= 768) {
                video.loop = true;
            } else {
                video.loop = false;
            }
        });
    });
});