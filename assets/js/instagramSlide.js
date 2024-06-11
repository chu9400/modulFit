let instagramCurrentSlide = 0;

document.querySelector('.instagram_arrow_right').addEventListener('click', () => {
    instagramSlide(instagramCurrentSlide + 1);
});

document.querySelector('.instagram_arrow_left').addEventListener('click', () => {
    instagramSlide(instagramCurrentSlide - 1);
});

function instagramSlide(slideIndex) {
    const slides = document.querySelector('.instagram_img_wrap');
    const totalSlides = document.querySelectorAll('.instagram_img_wrap li').length;
    const slidesToShow = 3; // 한 번에 보여줄 슬라이드 수

    
    if (slideIndex >= (totalSlides - 2)) { // rigth arrow
        slideIndex = 0;
    } else if (slideIndex < 0) { // left arrow
        slideIndex = totalSlides - 3;
    }

    const slideWidth = slides.querySelector('li').offsetWidth;
    slides.style.transform = `translateX(-${slideIndex * slideWidth}px)`;
    instagramCurrentSlide = slideIndex;
    console.log("슬라이드 이동: " + instagramCurrentSlide);
}
