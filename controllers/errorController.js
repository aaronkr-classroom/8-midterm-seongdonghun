// errorController.js
exports.notFound = (req, res) => {
    res.status(404).send('페이지를 찾을 수 없습니다.');
  };
  
  exports.errorHandler = (err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('에러가 발생했습니다.');
  };
  