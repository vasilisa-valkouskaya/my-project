// slider
const swiper = new Swiper('.swiper-container', {
    spaceBetween: 5,
    loop: true,
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

$('.counter').each(function() {
    let $this = $(this),
        countTo = $this.attr('data-count');

    $({ countNum: $this.text() }).animate({
            countNum: countTo
        },

        {
            duration: 6000,
            easing: 'linear',
            step: function() {
                $this.text(Math.floor(this.countNum));
            },
            complete: function() {
                $this.text(this.countNum);
            }

        });

});