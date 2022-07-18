
const menuBtn = document.querySelector('#menu-btn');
const ul = document.querySelector('.navigation ul ');

menuBtn.addEventListener('click', function () {
    ul.classList.toggle('active');
})


const menuClose = document.querySelector('#menu-close');

menuClose.addEventListener('click', function () {
    ul.classList.toggle('active');
})
