$(document).ready(function () {
    const slider = $(".gallery__slider")

    if (slider) {
        gallerySlider()
    }

    function gallerySlider() {
        slider.slick({
            infinite: true,
            slidesToShow: 3,
            slidesToScroll: 1,
            speed: 1000,
            arrows: false,
            dots: false,
            autoplay: true,
            autoplaySpeed: 2000,
            easing: 'ease',
        })
    }
});