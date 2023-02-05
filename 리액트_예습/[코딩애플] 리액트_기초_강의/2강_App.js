import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  let posts = '강남 고기 맛집';
  function 함수() {
    return 100;
  }
  let posts2 = { color: 'blue', fontSize: '30px' };

  return (
    <div className="App">
      <div className="black-nav" style={posts2}>
        <div classNmae={posts} style={{ color: 'blue', fontSize: '30px' }}>
          개발 Blog
        </div>
      </div>
      <h4>{posts}</h4>
      <h4>{함수()}</h4>
      <img src={logo} />
      {/* import logo from './logo.svg';  상위 import 부분의 변수명 넣을수 있음 */}
    </div>
  );
}

export default App;

/*
[JSX 문법]

1. 태그에 class를 주고싶으면?
 <div className="클래스명">

 2. 리액트에서 데이터 반인딩 쉽게하는 법
  { 변수명, 함수 등 }  
  src, id, href, className 등의 속성에도 { 변수명, 함수 등 }

3. JSX에서 style 속성 집어넣을 때
   style={object 자료형으로 만든 스타일}
   카멜식(camelCase) 작명관습에 따라 속성명을 바꿔줘야함 (ex. fontSize)
*/
