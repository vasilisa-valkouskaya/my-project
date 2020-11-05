// swiper slider

const galleryTop = new Swiper('.gallery-top', {
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,

    navigation: {
        nextEl: '.swiper-button-right',
        prevEl: '.swiper-button-left',
    },
    breakpoints: {
        520: {
            slidesPerView: 2
        },
        890: {
            slidesPerView: 3
        },
        1250: {
            slidesPerView: 4
        }
    }

});

const galleryBottom = new Swiper('.gallery-bottom', {
    slidesPerView: 2,
    spaceBetween: 50,
    loop: true,
    speed: 1500,
    autoplay: {
        delay: 4000,
    },
    breakpoints: {
        500: {
            slidesPerView: 3,
            spaceBetween: 80

        },

        980: {
            slidesPerView: 4,
            spaceBetween: 150

        },
        1175: {
            slidesPerView: 5,
            spaceBetween: 170

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