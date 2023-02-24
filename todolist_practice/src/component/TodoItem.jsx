import React from 'react';

const TodoItem = (props) => {
  return <div className="todo-item">{props.item}</div>;
};

export default TodoItem;

// 배열의 값 하나하나를 보여주는 방법
// TodoBoard에서 map함수를 이용해 props로 배열 안의 값 하나하나를 전달 받습니다.
// props는 properties의 줄임말로 [어떠한 값을 컴포넌트에게 전달해 줘야 할 때 사용]
// 어떠한 값을 전달할 때 다음과 같이 전달할 값의 이름을 지정해 줄 수 있어요.
// <Component 컴포넌트 파일에서 보여질 이름=전달할 값> ex) <Hello name="react" color="red"/>
