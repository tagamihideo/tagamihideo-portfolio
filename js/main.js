
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

