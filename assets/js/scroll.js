// 페이지와 모든 리소스가 로드되면 애니메이션 실행
window.addEventListener('load', () => {
    
    // 플러그인 등록
    gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

    // 애니메이션 설정
    const horSection = gsap.utils.toArray(".scroll_item");

    gsap.to(horSection, {
        xPercent: -120 * (horSection.length - 1),
        ease: "none",
        scrollTrigger: {
            trigger: "#scroll_section",
            start: "top 0px",
            end: "+=3000",
            pin: true,
            scrub: 1,
            markers: false,
            invalidateOnRefresh: true,
            anticipatePin: 1,
        },
    });
});