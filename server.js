const express = require('express')
const app = express()

// 정적 파일 제공
app.use(express.static(__dirname))

app.listen(8080, () => {
    console.log('http://localhost:8080 에서 서버 실행중')
})

app.get('/', (request, reponse) => {
    reponse.sendFile(__dirname + '/index.html')
})


app.get('/about/us', (request, reponse) => {
    reponse.send("회사 소개 페이지 예정")
})

app.get('/about/produce', (request, reponse) => {
    reponse.send("제작 소개 페이지 예정")
})