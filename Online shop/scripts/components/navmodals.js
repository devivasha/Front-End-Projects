const login = document.querySelector('.log');
const cross = document.querySelector('.cross');
const navmodal = document.querySelector('.log-modal-wrapper');
const register = document.querySelector('.reg');
const regforma = document.querySelector('.register-modal-wrapper');
const cross2 = document.querySelector('.cross-second');

function modalClose() {
    cross.onclick = function () {
        navmodal.classList.remove('active');
    }
}
function modalOpen() {
    login.onclick = function () {
        navmodal.classList.add('active');
    }
}
function regOpen() {
    register.onclick = function () {
        regforma.classList.add('active');
    }

}
function regClose() {
    cross2.onclick = function () {
        regforma.classList.remove('active');
    }

}