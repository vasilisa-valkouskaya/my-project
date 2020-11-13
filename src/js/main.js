// sticky-header


window.addEventListener('scroll', function() {
    if (window.innerWidth >= 769) {
        let header = document.querySelector('header');
        header.classList.toggle('sticky', window.scrollY > 320);
    }
});


// mobile menu

let btnBurger = document.querySelector('.burger-menu');
let body = document.querySelector('body');

btnBurger.addEventListener('click', function() {
    document.querySelector('.mobile-menu').classList.toggle('show');
    btnBurger.classList.toggle('active');
    body.classList.toggle('overflow');
});