import logo from './logo.svg';
import './App.css';

function App() {
  const [inputvalue, setinputvalue] = useState('');
  // 배열을 저장하는 useState  (배열 형태의 useState를 작성해서, 버튼에 적어놓은 addItem 함수에서 setTodoList함수를 정의해줌)
  const [todoList, setTodoList] = useState([]);
  const addItem = () => {
    // 클릭하면 아이템 추가
    // 어디다가? 배열에다가~
    setTodoList([...todoList, inputvalue]);
    // ...(기존꺼 유지하고 새로 추가한다는 뜻)
  };
  return (
    <main>
      {/* 인풋창에서 입력한 값 저장해주기 */}
      <input
        value={inputvalue}
        type="text"
        onChange={(event) => setinputvalue(event.target.value)}
      />
      <button onClick={addItem}>추가 </button>

      {/* 저장한거 전달하기 -> props */}
      <TodoBoard todoList={todoList} />
    </main>
  );
}
export default App;

/*<기억해야할 포인트 3가지>
1. 이때 입력되는 값에 사용되는 것이 JSX 코드
2. 입력값이 담기는 박스가 컴포넌트
3. 입력값을 박스에 담아주는 것이 props을 사용한 React

* 컴포넌트 : 여러 개의 프로그램 함수들을 모아 하나의 특정한 기능을 수행할 수 있도록 구성한 [작은 기능적 단위]
   (조각) => 레고 블록을 쌓듯이 조립식으로 쉽게 만들어 낼 수 있는게 특징! 이 조각들이 프로그래밍의 [모듈]이 되어줌
		장점: UI 구축 작업을 훨씬 쉽게 만들어줌. 미리 마련되어 있는 컴포넌트를 그대로 조립해서 소프트웨어 시스템 구축을 가능하게 하고 재사용이 가능.
		       보다 간단하게 소프트웨어 시스템을 구축할 수 있음. 여러 조각들이 독립적인 업무와 기능을 수행하는 '모듈'이 되어 시스템을 유지 보수를 유리하게 해줌.
		포인트: 반복적인 개발을 줄이고 오류수정이 쉬우며, 일을 쉽게 나눌 수 있어 시간과 인력을 아끼면서도 협업이 효과적! */

// 첫번째 목표: input창 만들기
// 인풋창에 입력한 값, 읽는 방법? useState를 사용해 input창에 입력값이 변할때마다 setinputvalue 함수를 통해 inputvalue에 값이 저장됩니다.
// 인풋값이 변할 때마다 변화를 감지하는 onChange 이벤트를 이용해 입력값이 변할 때마다 useState의 함수를 실행되게 해서 변환 값을 useState의 변수에 저장하기!

// 두번째 목표 : [추가하기] 버튼 만들기
// 버튼을 클릭하면 input 창에서 저장했던 값을 배열에 넣는 것!

// State는 객체 저장 방식이기 때문에 직접 객체에 접근해서 정보를 수정할 수 없어요. 그래서 useState의 함수를 이용하여 새로운 객체를 만들어서 값을 할당해요.
