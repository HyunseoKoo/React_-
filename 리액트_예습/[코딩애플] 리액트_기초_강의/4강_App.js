/* eslint-disable */ // 터미널에 뜨는 warning eslint 보기 싫을때 입력
import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  let [글제목, 글제목변경] = useState(['남자코트 추천', '강남 우동맛집', '파이썬독학']);
  let [따봉, 따봉변경] = useState(0);
  let posts = '강남 고기 맛집';
  // 따봉변경(10); // state 변경방법 따로 있음. 따봉이랑 같이 만들었던 따봉변경()  => 따봉변경(대체할 데이터)

  return (
    <div className="App">
      <div className="black-nav">
        <div>개발 Blog</div>
      </div>
      <button>버튼</button>
      <div className="list">
        <h3>
          {글제목[0]}
          <span
            onClick={() => {
              따봉변경(따봉 + 1); //  이모티콘을 누를때마다 따봉표시 숫자가 +1 됨 => state 만들때 같이 만들었던 따봉변경()이라는 이 state 변경 함수의 역할
            }}
          >
            👍
          </span>
          {따봉}
        </h3>
        <p>2월 17일 발행</p>
        <hr />
      </div>
      <div className="list">
        <h3>{글제목[1]}</h3>
        <p>2월 18일 발행</p>
        <hr />
      </div>
      <div className="list"></div>
    </div>
  );
}

/*
1. 이벤트 다루는 법
   onClick={클릭될 때 실행할 함수}
   onClick={ ()=> {실행할 내용} }

Q. 따봉 누를 때마다 1 증가시키기

숙제 : 버튼을 누르면 첫째 글 제목이 '여자코트 추천'으로 바뀌어야함
   
*/
