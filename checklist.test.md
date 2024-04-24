# **UT-NodeJS** Midterm Checklist / 중간고사 체크리스트

## **TEST:** Instructions / **시험:** 지시사항

### **Unit 2** Capstone Detailed Steps / 유닛 2 캡스톤 자세한 단계

- [x] **(1) `npm init` 명령을 실행하여 Node.js 프로젝트를 시작하세요.**
- [x] **(2) 프로젝트에 다음 패키지를 설치하세요.**
  - [x] `http-status-codes`
  - [x] `express`
  - [x] `ejs`
  - [x] `express-ejs-layouts`
- [x] **(3) `main.js` (또는 `app.js`) 파일을 만들고 Express 서버를 설정하세요.**
- [x] **(4) `views` 폴더 안에 `partials` 폴더를 만들고 다음 partials를 만드세요.**
  - [x] `header.ejs` - 모든 페이지에 사용되는 헤더
  - [x] `footer.ejs` - 모든 페이지에 사용되는 푸터
  - [x] `navigation.ejs` - 모든 페이지에 사용되는 네비게이션 바
  - [x] `confetti.ejs` - thanks 페이지에 사용되는 confetti
- [x] **(5) 주어진 HTML 파일의 확장자를 `.ejs`로 변경하고 `views` 폴더에 `layout.ejs` 파일을 추가하여 레이아웃을 설정합니다.**
  - [x] `layout.ejs` - 모든 페이지의 레이아웃
    - [x] `head` - `meta` 태그와 `title` 태그를 자신의 정보로 업데이트합니다.
  - [x] `index.ejs` - GET 메소드로 접근 가능
  - [x] `transportation.ejs` - GET 메소드로 접근 가능
  - [x] `contact.ejs` - GET과 POST 메소드로 접근 가능
  - [x] `thanks.ejs` - POST 메소드 후에 접근 가능
  - [x] `error.ejs` - 에러 발생 시 접근
- [x] **(6) 다음 컨트롤러를 만들어 라우트와 에러를 처리하세요.**
  - [x] `homeController` - 애플리케이션의 모든 라우트(GET과 POST)를 처리하는 컨트롤러
  - [x] `errorController` - 애플리케이션 에러를 처리하는 컨트롤러
