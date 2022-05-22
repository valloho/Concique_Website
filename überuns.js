const menuBtn = document.querySelector('.menu-btn');
let menuOpen = true;
const first = 1;
var x = document.getElementById("open_close1");
var y = document.getElementById("open_close2");
var z = document.getElementById("open_close3");
var w = document.getElementById("open_close4");
menuBtn.addEventListener('click', () => {

    // Später dann mit einer for Schleife ersetzen

    //if (!menuOpen || first === 1) {
    if(!menuOpen){
        menuBtn.classList.add('open');
        //first === 0;

        if (x.style.display === "none") {
            x.style.display = "block";
            x.style.visibility = "visible";
        } else {
            x.style.display = "none";
        }
    } else {
        menuBtn.classList.remove('open');
        //first === 1;

        if (x.style.display === "none") {
            x.style.display = "block";
            x.style.visibility = "visible";
        } else {
            x.style.display = "none";
        }
    }

    if (!menuOpen) {
        if (y.style.display === "none") {
            y.style.display = "block";
            y.style.visibility = "visible";
        } else {
            y.style.display = "none";
        }
    } else {
        if (y.style.display === "none") {
            y.style.display = "block";
            y.style.visibility = "visible";
        } else {
            y.style.display = "none";
        }
    }

    if (!menuOpen) {
        if (z.style.display === "none") {
            z.style.display = "block";
            z.style.visibility = "visible";
        } else {
            z.style.display = "none";
        }
    } else {
        if (z.style.display === "none") {
            z.style.display = "block";
            z.style.visibility = "visible";
        } else {
            z.style.display = "none";
        }
    }

    if (!menuOpen) {
        if (w.style.display === "none") {
            w.style.display = "block";
            w.style.visibility = "visible";
        } else {
            w.style.display = "none";
        }
        menuOpen = true;
    } else {
        if (w.style.display === "none") {
            w.style.display = "block";
            w.style.visibility = "visible";
        } else {
            w.style.display = "none";
        }
        menuOpen = false;
    }
})