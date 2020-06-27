const stripes = document.querySelector('.stripe-button');
const closeMenu = document.querySelector('.cross-menu');
const menuElement = document.querySelector('.nav-items');

function openMenu() {
    stripes.onclick = function () {
        menuElement.classList.add('active');
    };
}
function closedMenu() {
    closeMenu.onclick = function () {
        menuElement.classList.remove('active');
    }
}
