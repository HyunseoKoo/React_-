// 4. 컴포넌트 만들기
// App.jsx에서 버튼클릭으로 저장한 배열을 컴포넌트에서 보여주는 방법 => props를 사용해 배열을 전달받습니다.
// props를 사용해 배열을 app.jsx에서 TodoBoard.jsx로 전달받을수 있어요.
// 배열을 가져왔다고 하고, props와 map 함수로 배열 안에 값들 하나하나를 TodoItem.jsx로 보낼 수 있어요.

import React from 'react';
import '../App.css';
import TodoItem from './TodoItem';

const TodoBoard = (props) => {
  //console.log("todoBoard", props.todoList)
  return (
    <div>
      <h1> Todo List</h1>
      {props.todoList.map((item) => (
        <TodoItem item={item} />
      ))}
      <TodoItem /> {/* 컴포넌트 함수의 매개변수에 props를 적어준다 */}
    </div>
  );
};
