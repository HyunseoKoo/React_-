import { useDispatch, useSelector } from 'react-redux';

const PostForm = ({ onSubmit }) => {
  // const dispatch = useDispatch();
  // const posts = useSelector((state) => state.posts);

  // const onAddPostForm = (e) => {
  //   e.preventDefault();
  //   dispatch({
  //     type: 'ADD_POST',
  //     payload: {
  //       title: e.target.title.value,
  //       content: e.target.content.value,
  //     },
  //   });
  // };
  // console.log(posts);

  return (
    <>
      <h2>POST-FORM</h2>
      <form onSubmit={onSubmit}>
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
