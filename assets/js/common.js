// <a> 태그에 대해 클릭 이벤트의 기본 동작을 방지
document.querySelectorAll('a.arrow-link').forEach(a => a.onclick = e => e.preventDefault());
document.querySelectorAll('a.bar').forEach(a => a.onclick = e => e.preventDefault());
document.querySelectorAll('a.instagram-link').forEach(a => a.onclick = e => e.preventDefault());

// 한영 사이트 토글기능
document.addEventListener("DOMContentLoaded", function() {
    const korBtn = document.querySelector(".header_menu .lang_toggle");
    const engBtn = document.querySelector(".header_menu .lang_btn");
  
    korBtn.addEventListener("click", function(e) {
      e.preventDefault(); // 링크 기본 동작 방지
      engBtn.classList.toggle("active");
    });
  });