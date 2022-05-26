const toggle = document.getElementById('toggle');
const navbar = document.getElementById('navbar');

document.onclick = function (){
    if(navbar.classList === 'active'){
        toggle.classList.remove('active');
        navbar.classList.remove('active');
    }
    if(categories.classList === 'active'){
        categories.classList.remove('active');
    }
}

toggle.onclick = function (){
    toggle.classList.toggle('active');
    navbar.classList.toggle('active');
}