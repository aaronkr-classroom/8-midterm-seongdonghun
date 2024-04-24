const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const subscribersController = require('./controllers/subscribersController');

// express 앱 생성
const app = express();

// 환경 변수 로드
dotenv.config();

// MongoDB 연결
mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => console.log('MongoDB 연결 성공'))
.catch(err => console.error('MongoDB 연결 실패:', err));

// JSON 파싱 미들웨어
app.use(express.json());

// 루트 엔드포인트
app.get('/', (req, res) => {
  res.send('Hello, World!');
});

// 구독자 추가 엔드포인트
app.post('/contact', subscribersController.addSubscriber);

// 새로운 라우트 추가
app.get('/subscribers', subscribersController.getAllSubscribers);
app.get('/contact', subscribersController.getSubscriptionPage);
app.post('/subscribe', subscribersController.saveSubscriber);

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

// app을 다른 파일에서 사용할 수 있도록 내보냅니다.
module.exports = app;
