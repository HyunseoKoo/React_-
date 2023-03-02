import React, { useContext } from 'react';
import { ModalContext } from '../../../../../store/2_context';
import ContextQ1Detail2 from './Detail2';

const ContextQ1Detail = () => {
  const state = useContext(ModalContext);
  const { isModalState, setIsModalState } = state;
  let text = isModalState ? '숨기기' : '보이기';
  // console.log(modalState); // {isModalOpen: false, setIsModalOpen: ƒ}
  // console.log(setIsModalState);

  const onChangeModalState = (e) => {
    setIsModalState(!isModalState);
  };
  return (
    <>
      <h2>ContextQ1Detail</h2>
      <button onClick={onChangeModalState}>{text}</button>
      <ContextQ1Detail2 onChangeModalState={onChangeModalState} text={text} />
    </>
  );
};
export default ContextQ1Detail;
