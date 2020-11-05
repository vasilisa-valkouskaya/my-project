// swiper slider

const galleryTop = new Swiper('.gallery-top', {
    slidesPerView: 3,
    spaceBetween: 30,
    loop: true,

    navigation: {
        nextEl: '.swiper-button-right',
        prevEl: '.swiper-button-left',
    },
    breakpoints: {
        1250: {
            slidesPerView: 4,
            spaceBetween: 30
        }
    }

});

const galleryBottom = new Swiper('.gallery-bottom', {
    slidesPerView: 3,
    spaceBetween: 170,
    loop: true,
    speed: 1500,
    autoplay: {
        delay: 4000,
    },
    breakpoints: {
        980: {
            slidesPerView: 4

        },
        1175: {
            slidesPerView: 5

        }
    }
});

// fancybox gallery

$('[data-fancybox="gallery"]').fancybox({
    keyboard: true,
    buttons: [
        "download",
        "close"
    ],
    transitionEffect: "slide",
    transitionDuration: 600,
});