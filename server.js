const express = require('express');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');

const app = express();

// 정적 파일 제공
app.use(express.static(__dirname));

// Body-parser middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.listen(8080, () => {
    console.log('http://localhost:8080 서버 실행중');
});

app.get('/', (request, response) => {
    response.sendFile(__dirname + '/index.html');
});

app.get('/about/us', (request, response) => {
    response.send("회사 소개 페이지 예정");
});

app.get('/about/produce', (request, response) => {
    response.send("제작 소개 페이지 예정");
});

// 문의하기 기능
app.post('/contact', (request, response) => {
    const { input_name, input_email, input_company, input_phone, input_message } = request.body;

    // Nodemailer 설정
    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'chu9400@gmail.com',
            pass: 'bpbu vsvp ebul vsrl'
        }
    });

    const mailOptions = {
        from: 'chu9400@gmail.com',
        to: 'chu9400@gmail.com',
        subject: '문의하기 - 모듈핏',
        text: `
            이름: ${input_name}
            이메일: ${input_email}
            회사명: ${input_company}
            휴대전화번호: ${input_phone}
            문의사항: ${input_message}
        `
    };

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.log(error);
            response.status(500).send('Error occurred while sending email');
        } else {
            console.log('Email sent: ' + info.response);
            response.send('문의사항이 성공적으로 발송되었습니다.');
        }
    });
});
