// slider
const swiper = new Swiper('.swiper-container', {
    spaceBetween: 30,
    loop: true,
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },

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