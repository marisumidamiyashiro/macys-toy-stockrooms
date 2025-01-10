const mymenubutton = document.querySelector('.menu-button');
const mysitenav = document.querySelector('.site-header .site-nav');

mymenubutton.onclick = function () {
    if (mysitenav.getAttribute('data-navstate') === 'open') {
        mysitenav.setAttribute('data-navstate', 'closed');
    } else {
        mysitenav.setAttribute('data-navstate', 'open');
    }
};


var drawernavlinks = document.querySelectorAll(".drawer nav a");
var drawerheader = document.querySelector(".drawer .site-nav");
var j;
for (j = 0; j < drawernavlinks.length; j++) {
    drawernavlinks[j].onclick = function () {
        drawerheader.setAttribute('data-navstate', 'closed');
    };
};