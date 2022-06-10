let night = document.querySelector('.night');
let toggle_circle = document.querySelector('.toggle_circle');
let body = document.querySelector('body')
let box = document.querySelector('.box div span')

night.addEventListener("click",function() {
    toggle_circle.classList.toggle('active');
    body.classList.toggle('active');
    night.classList.toggle('active');
    box.classList.toggle('active');
});

