// Navigation Bar

const toggle = document.getElementById('toggle');
const navbar = document.getElementById('navbar');

document.onclick = function () {
    if (navbar.classList === 'active') {
        toggle.classList.remove('active');
        navbar.classList.remove('active');
    }
    if (categories.classList === 'active') {
        categories.classList.remove('active');
    }
}

toggle.onclick = function () {
    toggle.classList.toggle('active');
    navbar.classList.toggle('active');
}

// Social Media Buttons

var ss_btn_1 = document.querySelector(".ss_wrap_1 .ss_btn");

ss_btn_1.addEventListener("click", function () {
    this.classList.toggle("active");
});
