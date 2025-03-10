let currentSlide = 0;
let slideInterval; // 슬라이드 인터벌 변수 추가

document.querySelector('.right').addEventListener('click', () => {
    moveToSlide(currentSlide + 1);
    resetInterval(); // 슬라이드 이동 시 인터벌 초기화
});

document.querySelector('.left').addEventListener('click', () => {
    moveToSlide(currentSlide - 1);
    resetInterval(); // 슬라이드 이동 시 인터벌 초기화
});

document.querySelectorAll('.bar').forEach(bar => {
    bar.addEventListener('click', (event) => {
        const slideIndex = parseInt(event.target.closest('.bar').getAttribute('data-slide'));
        moveToSlide(slideIndex);
        resetInterval(); // 슬라이드 이동 시 인터벌 초기화
    });
});

function moveToSlide(slideIndex) {
    const slides = document.querySelector('.slide');
    const totalSlides = document.querySelectorAll('.slide_img').length;

    if (slideIndex >= totalSlides) {
        slideIndex = 0;
    } else if (slideIndex < 0) {
        slideIndex = totalSlides - 1;
    }

    slides.style.transform = `translateX(-${slideIndex * 100 / totalSlides}%)`;
    currentSlide = slideIndex;

    document.querySelectorAll('.bar').forEach(bar => bar.classList.remove('active'));
    document.querySelector(`.bar[data-slide="${slideIndex}"]`).classList.add('active');
}

function startSlideInterval() {
    slideInterval = setInterval(() => {
        moveToSlide(currentSlide + 1);
    }, 5000); // 5초마다 슬라이드 이동
}

function resetInterval() {
    clearInterval(slideInterval);
    startSlideInterval();
}

startSlideInterval(); // 페이지 로드 시 슬라이드 자동 전환 시작