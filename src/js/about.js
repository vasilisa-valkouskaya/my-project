// slider
const swiper = new Swiper('.swiper-container', {
    spaceBetween: 5,
    loop: true,
    speed: 1500,
    autoplay: {
        delay: 6000,
    },
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    breakpoints: {
        625: {
            spaceBetween: 30
        }
    }
});



// counter

$(window).scroll(startCounter);

function startCounter() {
    if ($(window).scrollTop() > 1890) {
        $(window).off('scroll', startCounter);
        $('.counter').each(function() {
            let $this = $(this);
            countTo = $this.attr('data-count');
            $({ countNum: $this.text() }).animate({
                countNum: countTo
            }, {
                duration: 4000,
                easing: 'linear',
                step: function() {
                    $this.text(Math.floor(this.countNum));
                }
            });
        });
    }
}