import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  let [c, d] = [10, 100]; // 10, 100을 c와 d변수에 담아주세요~    (참고) ES6 destructuring 문법
  // (let c=10 / let d=100)

  let [글제목, 글제목변경] = useState('남자 코트 추천');
  // useState('남자 코드 추천')을 실행하면 [a,b] 이런 array가 남음 =>  [글제목:'남자 코트 추천', 글제목변경:남자 코트 추천 state 정정해주는 함수 ]
  let [글제목2, 글제목변경2] = useState(['남자 코트 추천', '강남 우동 맛집']);

  let posts = '강남 고기 맛집';
  return (
    <div className="App">
      <div className="black-nav">
        <div>개발 Blog</div>
      </div>
      <div className="list">
        <h3>{글제목2[1]}</h3> {/* 글제목[0] = '남자 코트 추천' | 글제목[1] = '강남 우동 맛집' */}
        <p>2월 17일 발행</p>
        <hr />
      </div>
    </div>
  );
}

/*
데이터는
1. 변수에 넣거나
2. state에 넣거나

[리액트의 데이터 저장공간 _ state 만드는 법]
1. {useState}상단에 첨부
2. useState(데이터)

state는
1. 변수 대신 쓰는 데이터 저장공간
2. useState()를 이용해 만들어아야함
   let [글제목, 글제목변경] = useState('남자 코트 추천');
   let [a, b] => 변수 2개로 항상 맞춰줘야함! useState()안에 [state데이터, state데이터 변경 함수] array가 남기 때문!
3. 문자, 숫자, array, object 다 저장가능

state에 데이터 저장해놓는 이유:
    웹이 App처럼 동작하게 만들고 싶기 때문
    state는 변경되면 HTML이 자동으로 재렌더링 됨

    let posts = '강남 고기 맛집';
      => 그냥 변수는 내용이 변경되어도 자동 재렌더링 안됨
    let [글제목2, 글제목변경2] = useState(['남자 코트 추천', '강남 우동 맛집']);
      => state에 데이터 저장하게 되면 제목을 정렬하든가 제목을 수정하든가 새로고침 없이도 HTML에 재랜더링됨
    
    ** 자주 바뀌는, 중요한 데이터는 변수 말고 state로 저장해서 쓰세요! (변경이 잦고 재랜더링이 스무스하게 되게하고 싶으면 state 사용!)


 숙제: 블로그 글 리스트 UI 완성하기 (제목 내용은 state 이용)
*/
