let galleryBlog = document.querySelectorAll('.blog-unit480');
let galleryBlog768 = document.querySelectorAll('.blog-unit768');
let galleryBlog1200 = document.querySelectorAll('.blog-unit1200');
let i = 0;
let left = document.querySelector('.arrows-navigation-in-blog-left');
let right = document.querySelector('.arrows-navigation-in-blog-right');
let buttons768 = document.querySelectorAll('.circle-in-blog-slider768');
let buttons1200 = document.querySelectorAll('.circle-in-blog-slider1200');
function latestBlogSlide(){
right.onclick = function () {
    console.log(galleryBlog);
    galleryBlog[i].classList.add('hidden');
    i++;

    if(i >= galleryBlog.length) {
        i = 0;
    }
    galleryBlog[i].classList.remove('hidden');
};
left.onclick = function () {
    galleryBlog[i].classList.add('hidden');
    i--;

    if(i < 0) {
        i = galleryBlog.length-1;
    }
    galleryBlog[i].classList.remove('hidden');
};
    buttons768[3].onclick = function () {
        galleryBlog768[i].classList.add('hidden');
        galleryBlog768[i+1].classList.add('hidden');
        i+=2;
        if(i >= galleryBlog768.length) {
            i = 0;
        }
        galleryBlog768[i].classList.remove('hidden');
        galleryBlog768[i+1].classList.remove('hidden');
    };
    buttons768[0].onclick = function () {
        galleryBlog768[i].classList.add('hidden');
        galleryBlog768[i+1].classList.add('hidden');
        i-=2;
        if(i < 0) {
            i = galleryBlog768.length-2;
        }

        galleryBlog768[i].classList.remove('hidden');
        galleryBlog768[i+1].classList.remove('hidden');
    };
    buttons1200[2].onclick = function () {
        console.log('test');
        galleryBlog1200[i].classList.add('hidden');
        galleryBlog1200[i+1].classList.add('hidden');
        galleryBlog1200[i+2].classList.add('hidden');
        i+=3;
        if(i >= galleryBlog1200.length) {
            i = 0;
        }
        galleryBlog1200[i].classList.remove('hidden');
        galleryBlog1200[i+1].classList.remove('hidden');
        galleryBlog1200[i+2].classList.remove('hidden');
    };
    buttons1200[0].onclick = function () {
        console.log('test');
        galleryBlog1200[i].classList.add('hidden');
        galleryBlog1200[i+1].classList.add('hidden');
        galleryBlog1200[i+2].classList.add('hidden');
        i-=3;
        if(i < 0) {
            i = galleryBlog1200.length-3;
        }

        galleryBlog1200[i].classList.remove('hidden');
        galleryBlog1200[i+1].classList.remove('hidden');
        galleryBlog1200[i+2].classList.remove('hidden');
    };
}