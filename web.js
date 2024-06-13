const express = require('express');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');

const app = express();

// 정적 파일 제공
app.use(express.static(__dirname));

// Body-parser middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.listen(8001, () => {
    console.log('http://localhost:8001 서버 실행중');
});

app.get('/', (request, response) => {
    response.sendFile(__dirname + '/index.html');
});

app.get('/about', (request, response) => {
    response.send("회사 소개 페이지 예정");
});


// 문의하기 기능
app.post('/contact', (request, response) => {
    const { input_name, input_email, input_company, input_phone, input_message } = request.body;

    // Nodemailer 설정
    const transporter = nodemailer.createTransport({
        service: 'naver',
        auth: {
            user: 'chu9400@naver.com', // 작성 예정
            pass: 'QCZMU4NZDG2F' // 작성 예정
        }
    });

    const mailOptions = {
        from: 'chu9400@naver.com', // 작성 예정
        to: 'chu9400@naver.com', // 작성 예정
        subject: '모듈핏 - 문의드립니다.',
        html: `
            <p>이름: ${input_name}</p>
            <p>이메일: ${input_email}</p>
            <p>회사명: ${input_company}</p>
            <p>휴대전화번호: ${input_phone}</p>
            <p>문의사항:<br />${input_message}</p>
        `
    };

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.log(error);
            response.status(500).send('Error : 문의를 보내지 못했습니다.');
        } else {
            response.redirect('/');
        }
    });
});
