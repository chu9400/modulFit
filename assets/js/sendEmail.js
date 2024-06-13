// 폼 제출 이벤트 리스너
document.querySelector('#sendEmail').addEventListener('submit', function(event) {
    event.preventDefault();
    
    // 입력 요소 가져오기
    const input_name = document.querySelector('input[name="input_name"]');
    const input_email = document.querySelector('input[name="input_email"]');
    const input_phone = document.querySelector('input[name="input_phone"]');
    const input_message = document.querySelector('textarea[name="input_message"]');

    // 회사명은 선택 입력
    const input_company = document.querySelector('input[name="input_company"]');
    
    
    // 특수 문자 필터링 함수
    function sanitize(input) {
        const pattern = /[<>]/g;
        return input.replace(pattern, "");
    }

    // 이름 검증
    if (input_name.value.trim().length <= 1) {
        alert("이름은 2글자 이상 입력하셔야 합니다.");
        input_name.focus();
        return false;
    }
    
    // 이메일 검증
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(input_email.value)) {
        alert("올바른 이메일 주소를 입력하셔야 합니다.");
        input_email.focus();
        return false;
    }
    
    // 휴대전화번호 검증
    if(input_phone.value.length < 8) {
        alert("전화번호는 8글자 이상 입력하셔야 합니다.");
        input_phone.focus();
        return false;
    }

    const phonePattern = /^[0-9]{8,}$/;
    if (!phonePattern.test(input_phone.value)) {
        alert("전화번호는 숫자만 입력하셔야 합니다.");
        input_phone.focus();
        return false;
    }

    
    // 문의사항 검증
    if (input_message.value.trim().length < 5) {
        alert("문의 사항은 5글자 이상 입력하셔야 합니다.");
        input_message.focus();
        return false;
    }
    
    // 특수 문자 필터링
    input_name.value = sanitize(input_name.value);
    input_email.value = sanitize(input_email.value);
    input_phone.value = sanitize(input_phone.value);
    input_message.value = sanitize(input_message.value);
    input_company.value = sanitize(input_company.value);

    alert("고객님의 문의가 등록 되었습니다. 빠른 시일내에 답변 드리도록 하겠습니다.");
    // 폼 제출
    this.submit();
});