import { useDispatch } from 'react-redux';

const PostForm = ({ onSubmit }) => {
  const dispatch = useDispatch();
  // const title = useRef(null);

  const onAddPostForm = (e) => {
    e.preventDefault();
    dispatch({
      type: 'ADD_POST',
      payload: {
        title: e.target[0].value,
        content: e.target[1].value,
      },
    });
  };

  return (
    <>
      <h2>POST-FORM</h2>
      <form onSubmit={onAddPostForm}>
        <label>
          <input type="text" name="title" placeholder="제목" />
        </label>
        <label>
          <input type="text" name="content" placeholder="내용" />
        </label>
        <button type="submit">추가</button>
      </form>
    </>
  );
};
export default PostForm;
