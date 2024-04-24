const express = require('express');
const homeController = require('./homeController');
const errorController = require('./errorController');

const app = express();

// 라우트 설정
app.get('/', homeController.getHome);
app.post('/', homeController.postHome);

// 에러 핸들러 설정
app.use(errorController.notFound);
app.use(errorController.errorHandler);

// 서버 시작
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`서버가 ${PORT} 포트에서 실행 중입니다.`);
});
