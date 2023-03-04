import { useState } from 'react';

const heavyWork = () => {
  console.log('엄청 무거운 작업!!');
  return ['홍길동', '김민수'];
};

function UseStatePractice() {
  const [names, setNames] = useState(() => {
    return heavyWork(); // 초기값을 가져올때 무거운 작업을 할때에는 값을 넣어주는게 아니라 값을 리턴하는 콜백함수를 넣어주면 맨 처음 랜더링할때만 불려진다!!
  });
  const [inputValue, setInputValue] = useState('');

  const onChangeValue = (e) => {
    setInputValue(e.target.value);
  };

  const onUploadNames = () => {
    setNames((prevState) => {
      return [inputValue, ...prevState];
    });
  };

  return (
    <>
      <input value={inputValue} onChange={onChangeValue} />
      <button onClick={onUploadNames}>Upload</button>
      {names.map((name, index) => {
        return <p key={index}>{name}</p>;
      })}
    </>
  );
}

export default UseStatePractice();

/*

1. const [state, setState] = useState(초기값)
  => setState를 통해 state 값을 변경할때마다 새로 렌더링 된다.

2. state를 변경할 때 새로 변경될 state값이 이전 state값과 연관이 되어 있다면, setState의 인자로 새로운 state를 리턴하는 콜백함수를 사용한다.
  => setState((prevState)=> {
        return [inputValue, ...prevState];
  })

3. useState를 활용해서 초기값을 받아올때 어떤 무거운 일을 해야한다면 useState의 인자로 콜백함수를 넣어주면 맨 처음 랜더링이 될때만 실행될수 있게 한다.
*/
