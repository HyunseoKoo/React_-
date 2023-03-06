import { useDispatch } from 'react-redux';

const CommentForm = ({ onAddCommentForm, post }) => {
  //   const dispatch = useDispatch();
  //   const { Comments, id } = post;

  //   const onAddCommentForm = (e) => {
  //     e.preventDefault();
  //     dispatch({
  //       type: 'ADD_COMMENT',
  //       payload: {
  //         name: e.target.name.value,
  //         content: e.target.content.value,
  //         Comments: Comments,
  //         id: id,
  //       },
  //     });
  //   };

  return (
    <form onSubmit={onAddCommentForm}>
      <label>
        <input type="text" name="name" placeholder="이름" />
      </label>
      <label>
        <input type="text" name="content" placeholder="내용" />
      </label>
      <button type="submit">추가</button>
    </form>
  );
};
export default CommentForm;
