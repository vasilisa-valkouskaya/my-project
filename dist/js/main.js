// // preloader

let preloader = document.querySelector('.preloader');

window.onload = function() {
    preloader.classList.add('loaded');

};

// sticky-header

window.addEventListener('scroll', function() {
    if (window.innerWidth >= 854) {
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

// modal window

let btnOpenModal = document.querySelectorAll('.promo-btn');

let modalCont = document.querySelector('.modal-container');


let closeModal = function() {

    modalCont.classList.remove('show-modal');
    body.classList.remove('overflow');
    body.style.paddingRight = 0;
};

for (let i = 0; i < btnOpenModal.length; i++) {
    btnOpenModal[i].addEventListener('click', function() {
        let html = document.documentElement.clientWidth;
        let bodyPadding = window.innerWidth - html;

        modalCont.classList.add('show-modal');
        body.classList.add('overflow');
        body.style.paddingRight = bodyPadding + 'px';

    });
};

let btnCloseModal = document.querySelectorAll('.close-modal');
btnCloseModal.forEach(function(btnCloseModal) {
    btnCloseModal.addEventListener('click', closeModal);

});



modalCont.addEventListener('click', function(e) {
    let target = e.target;
    if (target.classList.contains('modal-container')) {
        closeModal();
    }
});