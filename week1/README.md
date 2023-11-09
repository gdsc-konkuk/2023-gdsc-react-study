## Key Questions

- DOM은 무엇인가요?

>넓은 의미로는 웹브라우저가 HTML 페이지를 인식하는 방식. 구체적으로는 document 객체와 관련된 객체의 집합입니다.

- HTML (tag) Element를 JavaScript로 생성하는 방법은 어떤 것이 있고, 어떤 방법이 가장 적합할까요?
 
1.요소를 생성하는 방법 
```
const hello = document.createElement("h1");
``` 
</code></pre> 
2. text로 작성해 innerHTML로 넣는 방법 
```
document.body.innerHTML = "<div id='div-1'>div-1 Hello</div>";
```
등이 있고 상황에 따라 다르겠지만, 요소를 생성하여 원하는 위치에 넣어주는 방법이 일반적으로 적합하다고 생각합니다.

- Semantic tag에는 어떤 것이 있으며, 이를 사용하는 이유는 무엇일까요?

>header, nav, table, h1, h2 등이 있고  태그가 가질 데이터에 대한 의미를 담고 있어 검색엔진에서 검색 키워드로 판단될 수 있습니다. 

- JavaScript가 다른 언어들에 비해 주목할 만한 점에는 어떤 것들이 있나요?

>브라우저에서 바로 실행할 수 있기에 별도에 프로그램이나 IDE 설치없이 사용할 수 있고, 운영체제에 제한을 받지 않습니다.
- LocalStorage는 무엇이며, TodoList에서 어떻게 활용될 수 있나요?

> 로컬 스토리지는 여러탭이나 창간에 데이터가 서로 공유되며 탭이나 창을 닫아도 데이터가 브라우저에 그대로 남을 수 있게 해줍니다. 쿠키와는 다르게 네트워크 요청 시 서버로 전송되지 않습니다.
- 어떻게 JavaScript를 상요하며 HTML 요소를 선택하고, 그 요소에 이벤트 리스너를 추가하나요?
> querySelector, getElementById 등을 이용해 요소를 javascript 변수에 담을 수 있습니다. 또한 addEventListener를 통해 대상 객체에 특정 이벤트를 등록할 수 있습니다.
- '=='과 '==='의 차이는 무엇인가요? 언제 어느 연산자를 사용하는 것이 좋을까요?
> ==는 Equal Operator, ===는 Strict Equal Operator 라고 합니다. ==는 두 대상을 비교할 때 피연산자 값의 타입이 다르면 타입변환을 진행해서 비교하고, ===는 값과 값의 타입이 모두 같은지를 비교해서, 같으면 true, 다르면 false를 반환합니다. ===는 일반적인 상황에서 정확한 비교를 할 때 사용하고, ==는 "값"만 비교하고 싶다면 사용해도 괜찮지만 타입변환이 이루어질 수 있기때문에 되도록 사용하지 않는 것을 권장합니다.

## Todo에 대해
input 으로 할 일을 받아 todo 창에 띄우고 완료시 해당 todo를 눌러 done 창으로 보내거나 삭제할 수 있는 todo-list를 간단하게 구현했습니다.

처음엔 input이 들어오면 그때그때 todo에 넣어주고, todo click 이벤트가 들어오면 하나씩 done으로 옮겨주는 방식으로 구현하였습니다. 

하지만 코드가 복잡하고, 직관적인 이해가 어려운 것 같아 LocalStorage에 저장된 todo와 done을 파싱해서 모든 항목을 새로 그려주는 draw함수를 제작해 이용했습니다. input이 들어오거나, todo가 클릭되었다는 등의 이벤트가 생길 때마다 반복적으로 draw를 호출하는 방식으로 새로 구현하였습니다.


# 서론

안녕하세요 🙌🏻 Front Core **선정민**입니다.

이번 미션은 스터디 진행 방식에 익숙해지실 수 있도록 간단한 **to-do list** 만들기를 진행합니다.
처음부터 React에 대해서 다뤄보는 것보단, 간단한 프로젝트를 수행하며 웹 개발의 기본 원리와 동작 방식에 대한 이해를 하고자 합니다.
무작정 React를 다루는 것보다, React 없이 어떤 불편함이 있는지 겪어보고 리액트 스터디를 진행하는 것이 리액트에 대한 필요성과 이해하는데 더 많은 도움이 될것이라고 생각합니다.

비교적 가벼운 미션인 만큼 코드를 짜는 데 있어 여러분의 **창의성**을 충분히 발휘해 보시기 바랍니다. 작동하기만 하면 되는 것보다 같은 코드를 짜는 여러가지 방식과 패턴에 대해 고민해 보시고, 본인이 생각한 가장 창의적인 방법으로 코드를 작성해 주세요. 여러분이 미션을 수행하는 과정에서 겪는 고민과 생각의 깊이만큼 스터디에서 더 많은 것을 얻어가실 수 있을 것입니다.

막히는 부분이 있더라도 우선은 스스로 공부하고 찾아보는 방법을 권장드리지만, 도움이 필요하시다면 얼마든지 슬랙 Q&A 채널에 질문을 남겨 주세요!

# 미션

## 미션 목표

- VSCode, Prettier를 이용하여 개발 환경을 관리합니다.
- HTML/CSS의 기초를 이해합니다.
- JavaScript를 통해 웹 개발의 기본적인 원리와 동작을 이해합니다.
- JavaScript를 통해 DOM 조작을 이해합니다.
- JavaScript를 통해 이벤트 핸들링 하는 방법을 이해합니다.

## 기한

- 2023년 11월 9일 (목요일)

## Key Questions

- DOM은 무엇인가요?
- HTML (tag) Element를 JavaScript로 생성하는 방법은 어떤 것이 있고, 어떤 방법이 가장 적합할까요?
- Semantic tag에는 어떤 것이 있으며, 이를 사용하는 이유는 무엇일까요?
- JavaScript가 다른 언어들에 비해 주목할 만한 점에는 어떤 것들이 있나요?
- LocalStorage는 무엇이며, TodoList에서 어떻게 활용될 수 있나요?
- 어떻게 JavaScript를 상요하며 HTML 요소를 선택하고, 그 요소에 이벤트 리스너를 추가하나요?
- '=='과 '==='의 차이는 무엇인가여ㅛ? 언제 어느 연산자를 사용하는 것이 좋을까요?

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
