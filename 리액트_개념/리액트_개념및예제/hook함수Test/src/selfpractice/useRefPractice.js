import { useState, useRef } from 'react';

const useRefPractice = () => {
  const [count, setCount] = useState(0);
  const countRef = useRef(0);

  //   console.log(countRef); // {current: 0} => ref는 하나의 객체
  // 태그에 있는 ref 값에 접근하고 싶으면 countRef.current 사용

  console.log('랜더링...');

  const increaseCountState = () => {
    setCount(count + 1);
  };

  // 콘솔창에는 Ref: 값이 올라가는걸 확인할수 있지만, 화면에는 렌더링 되지 않아 Ref:0 으로 고정됨
  // [State 올려] 버튼을 누르면 useRefPractice 함수 전체가 재실행되면서 렌더링 되어 화면의 Ref: 값이 변경되는걸 확인할 수 있음
  const increaseCountRef = () => {
    countRef.current = countRef.current + 1;
    console.log('Ref: ', countRef.current);
  };

  return (
    <div>
      <p> State: {count}</p>
      <p>Ref: {countRef.current}</p>
      <button onClick={increaseCountState}>State 올려</button>
      <button onClick={increaseCountRef}>Ref 올려</button>
    </div>
  );
};

export default useRefPractice;

/*
*** useRef 사용하는 때 ***
1. 저장공간
 (기본) state의 변화 -> 렌더링 -> 컴포넌트 내부 변수들 초기화
 (useRef 사용시) Ref의 변화 -> No 렌더링 -> 변수들의 값이 유지됨 [state보다 ref를 사용할 경우 불필요한 렌더링 막을 수 있음]
                 State의 변화 -> 렌더링 -> 그래도 Ref의 값은 유지됨 [변경시 렌더링을 발생시키지 않아야 말아야하는 값을 다룰 때 편리함]

2. DOM 요소에 접근
 ref -> focus() -> input요소
*/
