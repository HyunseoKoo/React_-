/* eslint-disable */ // 터미널에 뜨는 warning eslint 보기 싫을때 입력
import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  let [글제목, 글제목변경] = useState(['남자코트 추천', '강남 우동맛집', '파이썬독학']);
  let [따봉, 따봉변경] = useState(0);
  let posts = '강남 고기 맛집';

  function 제목바꾸기() {
    let newArray = 글제목; // (이건 복사가 아니라 값 공유)  => reference data type 특징임
    newArray[0] = '여자코트 추천';
    글제목변경(newArray); // 수정된 [데이터]를 만듭니다. 근데 state의 복사본을 만들어서 수정하세요 => deep copy해서 수정
  }

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
              따봉변경(따봉 + 1);
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

// 버튼을 누르면 첫째 제목이 '여자코트 추천' 으로 변경
