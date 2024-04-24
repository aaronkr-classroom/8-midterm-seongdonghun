// homeController.js
// controllers/homeController.js

// Remove the rendering of contact.ejs

exports.getHome = (req, res) => {
    res.send('홈 페이지입니다.');
  };
  
  exports.postHome = (req, res) => {
    res.send('POST 요청을 받았습니다.');
  };
  