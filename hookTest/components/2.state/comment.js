import { useState } from 'react';
import styled from 'styled-components';

function Comment({ post }) {
  const { User, content, myComment } = post.Comments;
  const [state, setState] = useState(false); // [수정] 버튼 삼항연산자 (true / false)

  const useInput = (initialization) => {
    const [value, setValue] = useState();
    const onChange = (event) => {
      setValue(event.target.value);
    };
    return [value, onChange, setValue];
  };

  const [editContent, onChangeEditContent] = useInput(content);

  const EditCommentBtn = () => {
    setState(true);
  };
  // console.log(state);

  const [editComment, setEditComment] = useState(content); // dom 건드리지 않고 입력된 댓글 내용 값 가져오기 위함
  const [nickname, setNickname] = useState();

  ////
  const handleUpdateComment = () => {
    const newCommentPost = [...post.Comments];
    // const commentOne = newCommentPost.find((comment) => comment.User.nickname === nickname);
    // console.log(User.nickname);
    // commentOne.content = content;
    // setEditComment(newCommentPost);
    onChangeEditContent(editContent);
    // console.log(editComment);
  };
  ////
  const CloseEditCommentBtn = () => {
    setState(false);
    if (editContent === content) {
      return;
    } else if (!editContent) {
      handleUpdateComment(nickname, editContent, myComment);
    }
  };

  return (
    <S.CommentItem>
      {post.Comments.map((item) => (
        <>
          <p>
            작성자: <span name="span">{item.User.nickname}</span>
          </p>
          <p>
            댓글 내용:
            {state ? (
              <textarea onChange={onChangeEditContent}>{item.content}</textarea>
            ) : (
              <span>{item.content}</span>
            )}
          </p>
          <S.Flex>
            <button onClick={state ? CloseEditCommentBtn : EditCommentBtn}>수정</button>
            <button>삭제</button>
          </S.Flex>
        </>
      ))}
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
