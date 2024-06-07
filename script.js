let currentSlide = 0;

document.querySelector('.right').addEventListener('click', () => {
    moveToSlide(currentSlide + 1);
});

document.querySelector('.left').addEventListener('click', () => {
    moveToSlide(currentSlide - 1);
});

document.querySelectorAll('.bar').forEach(bar => {
    bar.addEventListener('click', (event) => {
        const slideIndex = parseInt(event.target.closest('.bar').getAttribute('data-slide'));
        moveToSlide(slideIndex);
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
