import { useState, useEffect } from 'react';

function UseEffectPractice() {
  const [count, setCount] = useState(1);
  const [name, setName] = useState('');

  const handleCountUpdate = () => {
    setCount(count + 1);
  };

  const handleInputChange = (e) => {
    setName(e.target.value);
  };

  // 랜더링마다 매번 실행됨 -랜더링 이후O
  // useEffect에 의존배열을 넣어주지 않으면 렌더링 될때마다 매번 실행되어, input값이 바뀌는 handleInputChange 이벤트 함수가 실행될 때마다 useEffect 안의 작업이 매번 실행됨
  useEffect(() => {
    console.log('랜더링');
  });

  // 처음 랜더링 될때에만 실행됨 -랜더링 이후X
  useEffect(() => {
    console.log('마운팅');
  }, []);

  // 의존배열에 특정 state를 넣어주면 해당 state 값이 변경될 때에만 useEffect가 랜더링 되어 안에 있는 작업이 실행됨.
  // 관리해야하는 state가 2개 이상일 경우 랜더링 되는 시점을 분리하여 원하는 state 값이 바뀔 때에만 특정 작업을 랜더링(실행)할 수 있게 하기 위함.
  // 정리) 마운트 + count가 변경될 때마다 실행됨
  useEffect(() => {
    console.log('count 변화');
  }, [count]); // [의존배열]에 값이 변경될 때마다 랜더링 되었으면 하는 state 변수 넣어주기

  // 마운트 + name이 변경될 때마다 실행됨
  useEffect(() => {
    console.log('name이 변화');
  }, [name]); // [의존배열]에 값이 변경될 때마다 랜더링 되었으면 하는 state 변수 넣어주기

  return (
    <div>
      <button onClick={handleCountUpdate}>Update</button>
      <span>count: {count}</span>
      <input type="text" value={name} onChange={handleInputChange} />
      <span>name: {name}</span>
    </div>
  );
}

export default UseEffectPractice;

/*
1. 랜더링 될때 마다 매번 실행
useEffect(() => {
    // 작업...
});

2. 화면에 첫 렌더링 될때 실행, value 값이 바뀔때 실행
useEffect(() => {
    // 작업...
}, [value])

2-1. []이 빈 배열일 경우, 화면에 첫 렌더링 될때에만 실행
useEffect(() => {
    // 작업...
}, [])

** 사용하는 경우 **
useEffect에서 어떤 서비스를 구독하는 작업을 했다면, 서비스 구독 취소 작업을 해야할 때
*/
