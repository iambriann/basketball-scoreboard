let home = 0;
let guest = 0;
let scorehome = document.getElementById("homedisplay");
let scoreguest = document.getElementById("guestdisplay");

function addh(x) {
    home += x;
    scorehome.textContent = home;
}

function addg(x) {
    guest += x;
    scoreguest.textContent = guest;
}
