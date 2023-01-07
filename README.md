### 초기셋팅

#### 설치 dependencies

- babel
  - webpack의 babel-loader로 실행
  - 새롭게 추가된 전역 객체들(Promise, Map, Set...)등 트랜스 파일링만으론 해결 어렵기 때문에 별도의
    polyfill이 필요 -> babel-plugin-transform-runtime 사용
- webpack
  - common.js: 공통 설정
    - plugins
    - HtmlWebpackPlugin: html파일에 JS 번들을 자동으로 묶어주는 플러그인
    - CopyWebpackPlugin: 디렉토리를 카피하여 dist에 들어갈 수 있도록 설정하는 플러그인, 현재의 경우
      static에 있는 파일들 복사
    - MiniCSSExtractPlugin: js안에서 호출되는 스타일 코드를 파일로 추출. Production모드에서만 사용
    - CleanWebpackPlugin: 빌드되고 사용되지 않는 찌꺼기 파일들이나 캐시처럼 남아있는 파일들을 빌드전
      에 삭제해주는 플러그인
  - dev.js: development용 설정
  - prod.js: production용 설정
- typescript
- eslint
- prettier
- sass
- postcss
- emotion
- recoil
