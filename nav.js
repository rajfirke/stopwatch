// let width = window.innerWidth;

const nav_items = document.getElementById('expandme')

if(window.innerWidth < 600) {
    nav_items.className = "navbar-items navbar-items__collapse"
} else {
    nav_items.className = "navbar-items navbar-items__expand"
}

const toggler = document.getElementById("navbar_toggler");
toggler.addEventListener('click', () => {
    if(nav_items.className == "navbar-items navbar-items__collapse") {
        nav_items.className = "navbar-items navbar-items__expand";
    } else {
        nav_items.className = "navbar-items navbar-items__collapse";
    }
});

window.onresize = () => {
    if(window.innerWidth < 600) {
        nav_items.className = "navbar-items navbar-items__collapse"
    } else {
        nav_items.className = "navbar-items navbar-items__expand"
    }
}