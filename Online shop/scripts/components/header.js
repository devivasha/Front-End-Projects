const basket = document.querySelector('.box');
const modalCart = document.querySelector('.empty-cart-wrapper');
const fullModalCart = document.querySelector('.full-cart-wrapper');
const crossCart = document.querySelector('.cross-cart ');
const fullCrossCart = document.querySelector('.cross-full');
function cartOpen() {
    basket.onclick =  function () {
        if(boxCount > 0) {
            fullModalCart.classList.add('active');
        } else {
            modalCart.classList.add('active');
        }
    }
}
function emptyCartClose() {
    crossCart.onclick =  function () {
        modalCart.classList.remove('active');
    }
}
function fullCartClose() {
    fullCrossCart.onclick =  function () {
        fullModalCart.classList.remove('active');
    }
}