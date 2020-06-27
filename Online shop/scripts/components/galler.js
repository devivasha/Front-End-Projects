function carusel() {
    const sliderWrapper = document.getElementsByClassName('wrapper-slider')[0];
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
}

const quickViewSmall = document.getElementById('view');
const modOpen = document.getElementById('good-block-modal');

function openGallView() {
    quickViewSmall.onclick = function () {
        modOpen.classList.remove('hidden');
    }
}
const addFullCart = document.getElementById('add-cart');
addFullCart.onclick = function () {
    boxCount++;
    box.innerText = boxCount;
};