# Week1

- VSCode, Prettier를 이용하여 개발 환경을 관리합니다.
- HTML/CSS의 기초를 이해합니다.
- JavaScript를 통해 웹 개발의 기본적인 원리와 동작을 이해합니다.
- JavaScript를 통해 DOM 조작을 이해합니다.
- JavaScript를 통해 이벤트 핸들링 하는 방법을 이해합니다.

## Key Questions

> DOM은 무엇인가요?

Document Object Model로 HTML을 파싱하여 생성된 DOM 노드가 생성된다. 

DOM 노드들이 모이면 DOM 트리가 생성된다

__렌더링 엔진 동작과정__

1. DOM 트리  + CSSOM 트리 
2. 렌더 트리 구축
3. 렌더 트리 배치
4. 렌더 트리 그리기
> HTML (tag) Element를 JavaScript로 생성하는 방법은 어떤 것이 있고, 어떤 방법이 가장 적합할까요?

> Semantic tag에는 어떤 것이 있으며, 이를 사용하는 이유는 무엇일까요?
  - 개발자와 브라우저에게 해당 태그가 쓰인 용도를 명확하게 전달
    
  - <div> 태그는 아무 의미 없는 단순 ‘구역’이지만, 시멘틱 태그들을 각 구역의 의미를 갖고 있음

  **시멘틱 태그가 중요한 이유**
  1. **SEO ( Search engine optimization )**   
    - 검색을 최적화하기 위해서 우리가 제목, 부제목, 시멘틱 테그를 잘 활용한다면, 특정 키워드로 검색했을 때, 검색창에 노출<br>
    - 브라우저의 검색 엔진이 내가 만든 웹사이트를 어떤 검색 결과에 띄워줘야 될지를 알려줄 수 있음
  3. **웹 접근성**   
    - 웹페이지를 시각적이 아니라, 음성으로 읽어주는 "스크린리더"를 이용하는 경우, 적절한 시멘틱 태그로 잘 만들어진 웹페이지라면 문제 없이 동작
  4. **유지보수성**   
    - div tag로만 모든 구조를 짜는 것보다 더 한 눈에 알아볼 수 있어 유지보수 편리

  __header__

  - 문서나 섹션의 머리말 부분을 지칭
  - 하나의 문서에 여러개의 <header>태그도 사용가능

  __nav__

  - 네비게이션 링크를 지정할때 사용
  - 보통은 문서에서 중요한 링크정보만을 <nav>태그로 감싸줌

  __main__

  - 웹사이트 내에 중요한 내용을 나타낼 때 사용

  __article__

  - 그 컨텐츠 자체로 독립적인 내용을 표현할 때 사용
  - main 안에 있는 내용들과 전혀 상관없이 독립적

  __section__

  - 문서에서 특정 구역
  - 제목과 컨텐츠로 구성되어진 의미있는 그룹덩어리를 표현할때 사용
  - section은 article 안이나 main 안에서 연관 있는 내용들을 묶어줄 경우 사용

  __aside__

  - 사이드바와 같이 주요 컨텐츠에서 살짝 분리해서 배치할때 사용
  - 이 태그의 내용은 주위 컨텐츠와 연관이 있어야 함

  __footer__

  - 문서에서 하단부분의 영역을 지정하는 태그


> JavaScript가 다른 언어들에 비해 주목할 만한 점에는 어떤 것들이 있나요?

> LocalStorage는 무엇이며, TodoList에서 어떻게 활용될 수 있나요?

   __LocalStorage : 브라우저 상에 데이터 저장하기, 세션이 끝나더라도 데이터가 지워지지 않는다.__
  
  ```
  // 키에 데이터 쓰기
  localStorage.setItem("key", value);
  
  // 키로 부터 데이터 읽기
  localStorage.getItem("key");
  
  // 키의 데이터 삭제
  localStorage.removeItem("key");
  
  // 모든 키의 데이터 삭제
  localStorage.clear();
  
  // 저장된 키/값 쌍의 개수
  localStorage.length;
  ```

   __TodoList에서의 활용 : 이전의 todo를 세션이 끝나도 저장하기 위해 사용__

> 어떻게 JavaScript를 상요하며 HTML 요소를 선택하고, 그 요소에 이벤트 리스너를 추가하나요?

  **EventListner( ‘이벤트 종류’ , 함수명 )**

  :  Dom객체로부터 이벤트가 발생할 때, 해당 이벤트 처리 핸들러를 추가할 수 있는 오브젝트

> '=='과 '==='의 차이는 무엇인가여ㅛ? 언제 어느 연산자를 사용하는 것이 좋을까요?

  - == : Equal Operator ⇒ 단순 값이 같은지

  - === : Strict Equal Operator ⇒ 값과 데이터 타입까지 같은지
    ```
    var a = 1; 
    var b = "1"; 
    console.log(a == b); // true 
    console.log(a === b); // false
    ```

## 필수 요건

- [결과 화면](https://gdsc-todo.vercel.app/)의 기능을 그대로 구현합니다.
- 디자인을 그대로 구현하셔도 좋고, 본인만의 디자인을 적용하셔도 좋습니다.
- CSS의 Flexbox를 이용하여 레이아웃을 구성합니다.
- 외부 라이브러리를 사용하지 않습니다.
- 함수와 변수의 이름은 CamelCase로 짓습니다.
- 코딩의 단위를 기능별로 나누어 Commit 메세지를 작성합니다. 
- localStorage 혹은 sessionStorage를 이용하여 기존의 투두 데이터를 불러옵니다.

# 링크 및 참고자료

- [HTML/CSS 기초](https://heropy.blog/2019/04/24/html-css-starter/)
- [HTML 태그](https://heropy.blog/2019/05/26/html-elements/)
- [FlexBox 가이드](https://heropy.blog/2018/11/24/css-flexible-box/)
- [JS를 통한 DOM 조작](https://velog.io/@bining/javascript-DOM-%EC%A1%B0%EC%9E%91%ED%95%98%EA%B8%B0#append)
- [localStorage, sessionStorage](https://www.daleseo.com/js-web-storage/)
