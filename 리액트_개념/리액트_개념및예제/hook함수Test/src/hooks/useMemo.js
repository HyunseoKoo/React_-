import { useMemo, useState, useRef } from 'react';

let count = 0;

function UseMemo() {
  const [state1, setState1] = useState(false);
  const [state2, setState2] = useState(false);
  const arr = useRef([1, 2, 3, 4]);

  const MemoCount = useMemo(() => {
    arr.current.push(arr.current.length + 1);
    console.log(arr.current);
    return arr.current;
    // const [count, setCount] = useState() --- x 항상 최상위 루트 혹은 랜더링 함수에 있어야 함
  }, [state1]);

  // arr.push(5);
  // const MemoCount = arr;
  // console.log(arr);
  // useMemo 대신 이렇게 코드 짤경우, 랜더링될때마다 콘솔에 console.log(arr);이 찍힘
  // 랜더링될때마다 연산이 계속해서 반복 진행되는 것.
  // useMemo를 사용하게 되면, 초기 랜더링 될때만 연산과정이 이뤄지고 이후에는 이뤄지지 않음!
  // 경우에 따라 초기 랜더링 이후에도 연산이 필요할 때가 있는데 그 때 [의존배열]을 사용!

  // console.log('zzzzzzzzzzzzzzzzzzzzzzzzzz');
  /*
본래 랜더링이 되었을 때
함수 내 모든 기능, 연산 및 변수 선언을 다시 하게 됨
그래서 useMemo가 없다면 재연산이 필요없는 부분도 다시 연산을 하게 되요

지금을 예시로 들면
arr.push(arr.length +1)은 첫 랜더링 이후에는 다시는 연산하지 않아도 되는 값
이뉴는 나는 길이가 4인 배열을 보여주고 싶은게 아니라 
처음 랜더링시 길이가 5인 배열을 보여주고 싶다.

그리고 해당 값은 랜더링 되어도 5가 유지된다

=> *** 한번 랜더링 이후로 연산할 필요가 없다. 
      (랜더링 최적화, 랜더링 시간을 감소 시킬 수 있다!)
=> 그러나 특정 state가 바뀌었을 때는 해당 연산을 다시 해야만한다
   그렇다면 의존성 배열에 해당 state값을 넣어서 그 state가 변경 되었을 때만
   연산을 재실행 시킬 수 있다.

   첫화면 랜더링 -> useMemo실행 -> 의존성배열 비어있으면 -> 랜더링 되도 실행x
   의존성 배열에 state가 추가되면 -> 해당 state가 바귈 때마다 실행

   만약 useMemo가 없다면 값은 계속 똑같겠지만, 랜더링 될 때마다 해당 함수를
   계속 실행하기 때문에 랜더링이 오래 걸린다

   단, 메모리냐 cpu냐 하는 것은 개발자의 의견에 따라 다르다
   캐싱도 코스트(비용)가 든다
*/
  return (
    <>
      <div>{MemoCount.length}</div>
      <button onClick={() => setState1((prev) => !prev)}>+</button>
      <button onClick={() => setState2((prev) => !prev)}>유지</button>
    </>
  );
}
export default UseMemo;
