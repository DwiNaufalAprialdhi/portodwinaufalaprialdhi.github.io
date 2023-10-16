
//Dark Mode Toggle
const darkToggle = document.querySelector('#dark-toggle');
const html = document.querySelector('html');

darkToggle.addEventListener('click', function(){
    if (darkToggle.checked) {
        html.classList.add('dark');
    } else {
        html.classList.remove('dark');
    }
});

//Hamburger Toggle
const overlay = document.querySelector('.overlay');
const hamburger = document.querySelector('.hamburger_menu');
const close = document.querySelector('.overlay_close');

hamburger.addEventListener('click', () => {
    overlay.classList.toggle('overlay_active');
})

close.addEventListener('click', () => {
    overlay.classList.remove('overlay_active');
})

