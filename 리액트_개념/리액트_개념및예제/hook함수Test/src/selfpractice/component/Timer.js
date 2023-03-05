import React, { useEffect } from 'react';

const Timer = (props) => {
  useEffect(() => {
    // 의존배열로 빈배열이 존재하기 때문에 마운트 될 때 1번 실행됨
    const timer = setTimeout(() => {
      console.log('타이머 돌아가는 중...');
    }, 1000);

    // useEffectPractice2에서 showTimer state가 true일 때 Timer 컴포넌트 실행됨
    // [Toggle Timer] 버튼을 누르게 되면 showTimer 값과 상관없이 useEffectPractice2 함수가 전체 재실행이 되면서 컴포넌트로 들어가 있는 Timer 해당 함수도 재실행됨.
    // 이때 마운팅 이후 2번째 실행되는 거니까 return값이 실행됨.
    // 내가 이해한 바로는, 마운팅 될때는 return 전까지 실행되고, 마운팅 이후 두번째 랜더링부터는 return 값이 실행됨!
    // 해당 return 값은 timer 컴포넌트가 언마운트 될때 실행되는 콜백함수
    return () => {
      // 정리작업 (Timer 컴포넌트가 화면에서 사라질때 타이머를 끝내주는 정리 작업)
      clearInterval(timer);
      console.log('타이머가 종료되었습니다.');
    };
  }, []);

  return (
    <div>
      <span>타이머를 시작합니다. 콘솔을 보세요!</span>
    </div>
  );
};

export default Timer;
