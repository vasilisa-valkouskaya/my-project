let btnSubmit = document.querySelector('.btn-submit');
let form = document.querySelector('.contact-us-form');
let container = document.querySelector('.wr-input');

btnSubmit.addEventListener('click', function() {
    let nameContainer = document.querySelector('.input-name');
    let emailContainer = document.querySelector('.input-email');
    let phoneContainer = document.querySelector('.input-phone');
    let subjectContainer = document.querySelector('.input-subject');
    let messageContainer = document.querySelector('.message-box');
    let name = document.querySelector('.name');
    let email = document.querySelector('.email');
    let phone = document.querySelector('.phone');
    let subject = document.querySelector('.subject');
    let message = document.querySelector('textarea');

    nameContainer.classList.remove('show-error');
    emailContainer.classList.remove('show-error');
    phoneContainer.classList.remove('show-error');
    subjectContainer.classList.remove('show-error');
    messageContainer.classList.remove('show-error');

    if (!name.value) {
        nameContainer.classList.add('show-error');
    }
    if (!email.value) {
        emailContainer.classList.add('show-error');
    }
    if (!phone.value) {
        phoneContainer.classList.add('show-error');
    }
    if (!subject.value) {
        subjectContainer.classList.add('show-error');
    }
    if (!message.value) {
        messageContainer.classList.add('show-error');
    }
    if (name.value && email.value && phone.value && subject.value && message.value) {
        form.submit();
    }

});