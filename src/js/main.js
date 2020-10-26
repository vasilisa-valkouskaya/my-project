// swiper slider

var galleryTop = new Swiper('.gallery-top', {
    slidesPerView: 4,
    spaceBetween: 30,
    loop: true,

    navigation: {
        nextEl: '.swiper-button-right',
        prevEl: '.swiper-button-left',
    },

});

var galleryBottom = new Swiper('.gallery-bottom', {
    slidesPerView: 5,
    spaceBetween: 170,
    loop: true,
    speed: 1500,
    autoplay: {
        delay: 4000,

    },
});


// sticky-header

window.addEventListener("scroll", function() {
    var header = document.querySelector("header");
    header.classList.toggle("sticky", window.scrollY > 320);
})


// video

let video = document.getElementById('video');
let buttonPlayMain = document.querySelector('.play-btn-main');
let btnPlayPause = document.getElementById('playpause');
let soundBtn = document.getElementById('sound');
let progress = document.getElementById('progress');
let progressBar = document.getElementById('progress-bar');


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
}

if (buttonPlayMain) {
    buttonPlayMain.addEventListener('click', function() {
        if (video.paused) {
            video.play();
            buttonPlayMain.classList.add('button-main-hidden');
            btnPlayPause.classList.add('pause');
        }
    });
}

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
}


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
}

video.addEventListener('loadedmetadata', function() {
    progress.setAttribute('max', video.duration);
});

video.addEventListener('timeupdate', function() {
    if (!progress.getAttribute('max')) progress.setAttribute('max', video.duration);
    progress.value = video.currentTime;
    progressBar.style.width = Math.floor((video.currentTime / video.duration) * 100) + '%';
});


if (progress) {
    progress.onclick = videoRewind;
}

function videoRewind() {
    let w = this.offsetWidth;
    let o = event.offsetX;
    console.log(w);
    console.log(o);
    this.value = o / w * 100;
    video.pause();
    video.currentTime = video.duration * (o / w);
    video.play();
}