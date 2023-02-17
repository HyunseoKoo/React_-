import PlayListMock from '../../__mock__/playList.json';
import { useState } from 'react';

function State1() {
  /* 
    문제 1.

    state를 다루기 위한 기초 문제입니다.
    음악 목록 10가지의 mock data가 있습니다.

    아래에 추가버튼을 눌러 목록에 리스트를 추가하고 
    삭제 버턴을 눌렀을 때 데이터가 삭제될 수 있도록 해주세요
  */
  /* 데이터 콘솔에 찍어두었으니 확인해볼 것 */
  // console.log(PlayListMock.playlist);

  const [playList, setPlayList] = useState(PlayListMock.playlist);

  const [title, setTitle] = useState();
  const [singer, setSinger] = useState();

  const onInputTitle = (e) => {
    setTitle(e.target.value);
  };

  const onInputSinger = (e) => {
    setSinger(e.target.value);
  };

  const onClickAddBtn = () => {
    const newPlayListArr = [...playList];

    let newObj = new Object();
    newObj.title = title;
    newObj.signer = singer;
    console.log(newObj);
    newPlayListArr.push(newObj);
    console.log(newPlayListArr);
    setPlayList(newPlayListArr);
  };

  const onClickDeleteBtn = (e) => {
    const nodes = [...e.target.parentNode.parentNode.children]; // (10) [li, li, li, li, li, li, li, li, li, li] 배열
    const index = nodes.indexOf(e.target.parentNode); // console.log(index);
    const DeletePlayList = [...playList];
    DeletePlayList.splice(index, 1);
    setPlayList(DeletePlayList);
  };

  return (
    <>
      <h1>문제1</h1>
      <ul>
        {playList.map((item) => (
          <li>
            <h3>{item.title}</h3>
            <p>{item.signer}</p>
            <button onClick={onClickDeleteBtn}>삭제</button>
          </li>
        ))}
      </ul>
      <div>
        <p>
          곡명 : <input onChange={onInputTitle} />
        </p>
        <p>
          가수/작곡 : <input onChange={onInputSinger} />
        </p>
        <p>
          <button onClick={onClickAddBtn}>추가</button>
        </p>
      </div>
    </>
  );
}
export default State1;
