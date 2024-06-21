let toggle_nav = document.querySelector(".nav__toggle");

let nav = document.querySelector("nav");

toggle_nav.onclick = function() {
    toggle_nav.classList.toggle("toggle__active");
    nav.classList.toggle("nav__active");
}

nav.onmouseenter = function () {
    toggle_nav.classList.add("hide");
}

nav.onmouseleave = function () {
    toggle_nav.classList.remove("hide");
}
