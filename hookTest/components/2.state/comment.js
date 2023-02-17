import styled from 'styled-components';

function Comment(props) {
  const {
    state,
    post,
    editComment,
    setEditComment,
    editCommentBtn,
    CloseEditCommentBtn,
    commentBoxState,
    nickname,
    setNickname,
  } = props;

  const { myComment } = post.Comments;
  console.log(myComment);

  const onSaveChangeEditComment = (e) => {
    setEditComment(e.target.value);
    // console.log(e.target); // <textarea> </textarea>
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
            {commentBoxState ? (
              <textarea onChange={onSaveChangeEditComment}>{item.content}</textarea>
            ) : (
              <span>{item.content}</span>
            )}
          </p>
          <S.Flex>
            <button onClick={state ? CloseEditCommentBtn : editCommentBtn}>수정</button>
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
