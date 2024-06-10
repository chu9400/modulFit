// <a> 태그에 대해 클릭 이벤트의 기본 동작을 방지
document.querySelectorAll('a.arrow-link').forEach(a => a.onclick = e => e.preventDefault());
document.querySelectorAll('a.bar').forEach(a => a.onclick = e => e.preventDefault());

