import { useState, useRef } from 'react';

const useRefPractice2 = () => {
  const [renderer, setRenderer] = useState(0);
  const countRef = useRef(0);
  let countLet = 0;

  // increaseRef 버튼과 increaseLet 버튼을 여러번 누르고,
  // 해당 이벤트 버튼을 클릭하면 useRefPractice2 함수 전체가 렌더링 됨.
  // 그리고 나서 Ref: 값과 Let: 값을 확인해보면 Ref: 값은 누른만큼 카운팅 값이 화면에 나타나지만, Let: 값은 0으로 초기화됨
  // Ref는 재렌더링 되더라도 이전 값을 기억하고 있음[생애주기에 저장됨], 그러나 countLet은 단순 변수이기 때문에 렌더링 될 때 0인 초기값이 다시 불려지기 때문.
  const doRendering = () => {
    setRenderer(renderer + 1);
  };

  const increaseRef = () => {
    countRef.current = countRef.current + 1;
    console.log('ref: ', countRef.current);
  };

  const increaseLet = () => {
    countLet = countLet + 1;
    console.log('Let: ', countLet);
  };

  // 최종 확인용
  const printResults = () => {
    console.log(`ref: ${countRef.current}, var: ${countLet}`);
  };

  return (
    <div>
      <p>Ref: {countRef.current}</p>
      <p>Let: {countLet}</p>
      <button onClick={doRendering}>렌더!</button>
      <button onClick={increaseRef}>Ref 올려</button>
      <button onClick={increaseLet}>Let 올려</button>
    </div>
  );
};

export default useRefPractice2;
