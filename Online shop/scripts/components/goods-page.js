let buttonToAddNewGoods = document.querySelector('.add-goods');
let buttonToAddNewGoods768 = document.querySelector('.add-goods-768');
let buttonToAddNewGoods1200 = document.querySelector('.add-goods-1200');
let other = document.querySelectorAll('.good-block.hidden');
let hz = document.querySelectorAll('.good-block');
let quickView = document.getElementsByClassName('quick-view');
let latestBlockInFilter = document.querySelectorAll('.latest-div-in-filter');
let moreDetailsModals = document.getElementById('good-block-modal');
let modalContainer = document.getElementById('modal-container');
let crossInModal = document.getElementById('cross-in-modal-furniture');
let bigBlock = document.querySelector('.goods-and-filter');
let boxCount = 0;
let box = document.querySelector('.circle');
let addToCart = document.querySelector('.add-to-cart-in-modal');
let addToCartMain = document.querySelectorAll('.add-to-cart');
let lowerSlider = document.querySelector('#lower');
let  upperSlider = document.querySelector('#upper');

document.querySelector('#two').value=upperSlider.value;
document.querySelector('#one').value=lowerSlider.value;

let  lowerVal = parseInt(lowerSlider.value);
let upperVal = parseInt(upperSlider.value);



function goodsPage(){
    for(let k = 0; k < latestBlockInFilter.length; k++){
        latestBlockInFilter[k].onclick = function () {
            console.log(latestBlockInFilter)
            if(latestBlockInFilter[k].classList.contains('colored-latest-in-filter')){
                latestBlockInFilter[k].classList.remove('colored-latest-in-filter')
            }
            else latestBlockInFilter[k].classList.add('colored-latest-in-filter')
        }
    }
    upperSlider.oninput = function () {
        lowerVal = parseInt(lowerSlider.value);
        upperVal = parseInt(upperSlider.value);

        if (upperVal < lowerVal + 4) {
            lowerSlider.value = upperVal - 4;
            if (lowerVal == lowerSlider.min) {
                upperSlider.value = 4;
            }
        }
        document.querySelector('#two').value=this.value
    };

    lowerSlider.oninput = function () {
        lowerVal = parseInt(lowerSlider.value);
        upperVal = parseInt(upperSlider.value);
        if (lowerVal > upperVal - 4) {
            upperSlider.value = lowerVal + 4;
            if (upperVal == upperSlider.max) {
                lowerSlider.value = parseInt(upperSlider.max) - 4;
            }
        }
        document.querySelector('#one').value=this.value
    };
    let img = document.createElement("IMG");
    for(let i = 0; i < quickView.length; i++) {

    quickView[i].onclick = function () {
        for (let j = 0; j < hz.length; j++) {
            moreDetailsModals.classList.remove('hidden');
            if (i === j) {
                img.src = `../img/products/furniture/${i + 1}.png`;
                img.setAttribute('class', 'furniture-img-modal')
                modalContainer.append(img);
            }
            bigBlock.style.display = 'none';
            console.log(moreDetailsModals);
            buttonToAddNewGoods1200.classList.add('hidden');
            buttonToAddNewGoods768.classList.add('hidden');
            buttonToAddNewGoods.classList.add('hidden');
        }
    };
        crossInModal.onclick = function () {
                img.setAttribute('class', 'hidden');
                moreDetailsModals.classList.add('hidden');
                bigBlock.style.display = 'flex';
            buttonToAddNewGoods1200.classList.remove('hidden');
            buttonToAddNewGoods768.classList.remove('hidden');
            buttonToAddNewGoods.classList.remove('hidden');

        }
    }
    addToCart.onclick = function(){
        boxCount++;
        box.innerText = boxCount;
    };
    for(let i = 0; i < addToCartMain.length; i++){
        addToCartMain[i].onclick = function () {
            boxCount++;
            box.innerText = boxCount;
        }
    }
    buttonToAddNewGoods.onclick = function AddNewGoods() {
        for(let i = 0; i < 12; i++){
            hz[i].classList.remove('second-section');
            hz[i].classList.remove('third-section');
            hz[i].classList.remove('hidden');
            buttonToAddNewGoods1200.classList.add('hidden');
            buttonToAddNewGoods768.classList.add('hidden');
            buttonToAddNewGoods.classList.add('hidden');

        }
    };
    buttonToAddNewGoods768.onclick = function AddNewGoods768() {
        for(let i = 0; i < 13; i++){
            hz[i].classList.remove('second-section');
            hz[i].classList.remove('third-section');
            hz[i].classList.remove('hidden');
            buttonToAddNewGoods1200.classList.add('hidden');
            buttonToAddNewGoods768.classList.add('hidden');
            buttonToAddNewGoods.classList.add('hidden');

        }
    };
    buttonToAddNewGoods1200.onclick = function AddNewGoods1200() {
        for(let i = 0; i < 18; i++){
            hz[i].classList.remove('second-section');
            hz[i].classList.remove('third-section');
            hz[i].classList.remove('hidden');
            buttonToAddNewGoods1200.classList.add('hidden');
            buttonToAddNewGoods768.classList.add('hidden');
            buttonToAddNewGoods.classList.add('hidden');

        }
    };
}
