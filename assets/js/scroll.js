// 플러그인 등록
gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

const horSection = gsap.utils.toArray(".scroll_item");

gsap.to(horSection, {
    xPercent: -120 * (horSection.length - 1),
    ease: "none",
    scrollTrigger: {
        trigger: "#section_02",
        start: "top 0px",
        end: "+=3000",
        pin: true,
        scrub: 1,
        markers: false,
        invalidateOnRefresh: true,
        anticipatePin: 1,
    },
});