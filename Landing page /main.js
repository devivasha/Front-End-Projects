//Our Service //

let avatar = Array.from(document.querySelectorAll('.wrapper img'));
let content = Array.from(document.querySelectorAll('.wrapper p'));

document.querySelector('.flex-service').addEventListener('click', (event) => {
    let target = event.target;
    const lastActive = document.querySelector('.activation');
    lastActive ? lastActive.classList.remove('activation') : false;
    target.classList.add('activation');
    if(target.dataset) {
        let index = target.getAttribute('data-tab');
        content.forEach(function(item) {
            if(item.getAttribute('data-tab') === index ) {
                item.classList.add('showing');
            } else {
                item.classList.remove('showing');
            }
        });
        avatar.forEach(function(item) {
            if(item.getAttribute('data-tab') === index ) {
                item.classList.add('visible');
            } else {
                item.classList.remove('visible');
            }
        });
    }
});

//Slider//

const sliderWrapper = document.getElementsByClassName('wrapper-slider')[0];
console.log(sliderWrapper);
sliderWrapper.addEventListener('click', ({target}) => {
    if (target.classList.contains('img-slider')) {
        let activeIndex = target.dataset.set;
        let circles = Array.from(document.getElementsByClassName('img-slider'));
        let reviews = Array.from(document.getElementsByClassName('review-container'));
        circles.forEach(circle => circle.classList.remove('zoom'));
        circles[activeIndex - 1].classList.add('zoom');
        reviews.forEach(review => review.classList.remove('active'));
        reviews[activeIndex - 1].classList.add('active');

    }
});

const leftArrowBtn = document.getElementsByClassName('btn-left')[0];
leftArrowBtn.addEventListener('click', () => {
    let circles = Array.from(document.getElementsByClassName('img-slider'));
    let prevActiveIndex = circles.findIndex(circle => circle.classList.contains('zoom'));
    let nextActiveIndex = prevActiveIndex === 0 ? circles.length - 1 : prevActiveIndex - 1;
    circles.forEach(circle => circle.classList.remove('zoom'));
    circles[nextActiveIndex].classList.add('zoom');

    activateReview(nextActiveIndex);
});

const rightArrowBtn = document.getElementsByClassName('btn-right')[0];
rightArrowBtn.addEventListener('click', () => {
    let circles = Array.from(document.getElementsByClassName('img-slider'));
    let prevActiveIndex = circles.findIndex(circle => circle.classList.contains('zoom'));
    let nextActiveIndex = prevActiveIndex === circles.length - 1 ? 0 : prevActiveIndex + 1;
    circles.forEach(circle => circle.classList.remove('zoom'));
    circles[nextActiveIndex].classList.add('zoom');

    activateReview(nextActiveIndex);
});

function activateReview(index) {
    let reviews = Array.from(document.getElementsByClassName('review-container'));
    reviews.forEach(review => review.classList.remove('active'));
    reviews[index].classList.add('active');
}


//Amazing Work//

    let category = Array.from(document.querySelectorAll('.box'));
console.log(category);

document.querySelector('.flex-work').addEventListener('click', (event) => {
    let target = event.target;
    const lastActive = document.querySelector('.worked');
    lastActive ? lastActive.classList.remove('worked') : false;
    target.classList.add('worked');
    if(target.dataset) {
        let index = target.getAttribute('data-set');
        if(index === 'all'){
            category.forEach(function (item) {
                item.classList.remove('boxed');
            })
        }else{
            category.forEach(function(item) {
                if(item.getAttribute('data-set') === index ) {
                    item.classList.remove('boxed');
                }
                else {
                    item.classList.add('boxed');
                }
            });
        }
    }
});

document.querySelector('.green3').onclick = function() {
    let loader = document.querySelector('.preloader');
    let btn = document.querySelector('.green3');
    loader.style.display = 'block';
    setTimeout(function(){
        loader.style.display = 'none';
        category.forEach(function (item) {
            item.classList.remove('addpic');
        });
        btn.style.display = 'none';
    },2000);
};

