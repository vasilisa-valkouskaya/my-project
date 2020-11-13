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

// video

let video = document.querySelector('#video');
let buttonPlayMain = document.querySelector('.play-btn-main');
let btnPlayPause = document.querySelector('#playpause');
let soundBtn = document.querySelector('#sound');
let progress = document.querySelector('#progress');
let progressBar = document.querySelector('#progress-bar');


if (video) {
    video.addEventListener('click', function() {
        if (video.paused) {
            video.play();
            buttonPlayMain.classList.add('button-main-hidden');
            btnPlayPause.classList.add('pause');
        } else {
            video.pause();
            buttonPlayMain.classList.remove('button-main-hidden');
            btnPlayPause.classList.remove('pause');
        }
    });
};

if (buttonPlayMain) {
    buttonPlayMain.addEventListener('click', function() {
        if (video.paused) {
            video.play();
            buttonPlayMain.classList.add('button-main-hidden');
            btnPlayPause.classList.add('pause');
        }
    });
};

if (btnPlayPause) {
    btnPlayPause.addEventListener('click', function() {
        if (video.paused) {
            btnPlayPause.classList.remove('play');
            btnPlayPause.classList.add('pause');
            buttonPlayMain.classList.add('button-main-hidden');
            video.play();
        } else {
            btnPlayPause.classList.remove('pause');
            btnPlayPause.classList.add('play');
            buttonPlayMain.classList.remove('button-main-hidden');
            video.pause();
        }
    });
};


if (soundBtn) {
    soundBtn.addEventListener('click', function() {
        if (video.muted == false) {
            soundBtn.classList.remove('sound-on');
            soundBtn.classList.add('sound-off');
            video.muted = true;
        } else {
            soundBtn.classList.remove('sound-off');
            soundBtn.classList.add('sound-on');
            video.muted = false;
        }
    });
};

// video progress bar

video.addEventListener('loadedmetadata', function() {
    progress.setAttribute('max', video.duration);
});

video.addEventListener('timeupdate', function() {
    if (!progress.getAttribute('max')) progress.setAttribute('max', video.duration);
    progress.value = video.currentTime;
    progressBar.style.width = Math.floor((video.currentTime / video.duration) * 100) + '%';
});


progress.addEventListener('click', function(e) {
    let pos = e.offsetX / this.offsetWidth;
    video.currentTime = pos * video.duration;
});