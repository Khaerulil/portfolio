
const mode = document.getElementById('mode');
const body = document.querySelector('body');
const header = document.querySelector('.header');
const navbar = document.querySelectorAll('.navbar a');


mode.addEventListener("click", () => {
    body.classList.toggle('active');
    header.classList.toggle('active');
    navbar.forEach( (a) => {
        a.classList.toggle('active')
    })
    if (body.classList.contains('active')) {
        body.style.backgroundColor = "rgba(255, 255, 255, 0.4)";
    } else {
        body.style.backgroundColor = "rgb(11, 4, 31)";
    }

});