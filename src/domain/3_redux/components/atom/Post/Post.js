import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Comment from '../Comment/Comment';
import CommentForm from '../Comment/Form';
import UserCard from '../UserCard/Card';

const Post = ({ key, post }) => {
  const dispatch = useDispatch();
  const { id, content, Comments } = post;

  // Post 수정
  const useInput = (initialValue) => {
    const [value, setValue] = useState(initialValue);
    const onChange = (e) => {
      setValue(e.target.value);
    };
    return [value, onChange, setValue];
  };

  const [editPost, onEditPost] = useInput(content);
  const [editBtnState, setEditBtnState] = useState(false);

  const startEditBtn = () => {
    setEditBtnState(true);
  };

  const [changedContent, setChangedContent] = useState(content);

  const onSaveContent = (content) => {
    const newPost = { ...post };
    newPost.content = content;
    setChangedContent(newPost.content);
  };

  const closeEditBtn = () => {
    if (editPost === content) return setEditBtnState(false);
    onSaveContent(editPost);
    setEditBtnState(false);
  };

  // Post 삭제
  const onDeletePost = () => {
    dispatch({
      type: 'DELETE_POST',
      payload: {
        id: id,
      },
    });
  };

  // 코멘트 추가

  const onAddCommentForm = (e) => {
    e.preventDefault();
    dispatch({
      type: 'ADD_COMMENT',
      payload: {
        name: e.target.name.value,
        content: e.target.content.value,
        Comments: Comments,
        id: id,
      },
    });
  };

  return (
    <div
      style={{
        border: '1px solid #999',
      }}
    >
      {post.myPost && (
        <button type="button" onClick={onDeletePost}>
          삭제
        </button>
      )}
      {post.myPost && (
        <button onClick={editBtnState ? closeEditBtn : startEditBtn} type="button">
          수정
        </button>
      )}
      <h2>--PostTitle--</h2>
      <h2>{post.title}</h2>
      <UserCard user={post.User} />
      <h2>--PostContent--</h2>
      {editBtnState ? (
        <textarea onChange={onEditPost}>{content}</textarea>
      ) : (
        <p>{changedContent}</p>
      )}
      <CommentForm post={post} onAddCommentForm={onAddCommentForm} />
      <div
        style={{
          display: 'table',
          borderCollapse: 'collapse',
          border: '1px solid #000',
        }}
      >
        {Comments && Comments.map((comment) => <Comment key={comment.id} comment={comment} />)}
      </div>
    </div>
  );
};
export default Post;
