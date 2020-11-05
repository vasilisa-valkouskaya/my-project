// sticky-header


window.addEventListener('scroll', function() {
    if (window.innerWidth >= 768) {
        let header = document.querySelector('header');
        header.classList.toggle('sticky', window.scrollY > 320);
    }
});


// mobile menu

let btnBurger = document.querySelector('.burger-menu');

btnBurger.addEventListener('click', function() {
    document.querySelector('.mobile-menu').classList.toggle('show');
    btnBurger.classList.toggle('active');
});