import { useState } from 'react';
import styled from 'styled-components';

function Comment({ Comments }) {
  const { User, content, myComment } = Comments;
  const { nickname } = User;

  const [state, setState] = useState(false); // [수정] 버튼 삼항연산자 (true / false)

  const useInput = (initialization) => {
    const [value, setValue] = useState(initialization);
    const onChange = (event) => {
      setValue(event.target.value);
    };
    return [value, onChange, setValue];
  };

  const [editContent, onChangeEditContent] = useInput(content);

  const EditCommentBtn = () => {
    setState(true);
  };

  const [editComment, setEditComment] = useState(content); // dom 건드리지 않고 입력된 댓글 내용 값 가져오기 위함

  ////
  const handleUpdateComment = (content) => {
    const newCommentPost = { ...Comments };
    newCommentPost.content = content;
    setEditComment(newCommentPost.content);
  };
  ////
  const CloseEditCommentBtn = () => {
    if (editContent === content) return setState(false);
    handleUpdateComment(editContent);
    setState(false);
    // setState(false);
  };

  return (
    <S.CommentItem>
      <p>
        작성자: <span>{nickname}</span>
      </p>
      <p>
        댓글 내용:
        {state ? (
          <textarea onChange={onChangeEditContent}>{content}</textarea>
        ) : (
          <span>{editComment}</span>
        )}
      </p>
      <S.Flex>
        <button onClick={state ? CloseEditCommentBtn : EditCommentBtn}>수정</button>
        <button>삭제</button>
      </S.Flex>
    </S.CommentItem>
  );
}
export default Comment;

const CommentItem = styled.li`
  border: 1px solid #000;
  margin: 10px;
`;

const Flex = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const S = {
  CommentItem,
  Flex,
};
