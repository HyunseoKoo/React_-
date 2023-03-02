import { useSelector } from 'react-redux';
import Post from './Post/Post';

const AllPosts = () => {
  const postsState = useSelector((state) => state.posts);
  // console.log('postsState', postsState);

  return (
    <div>
      {postsState.map((post) => (
        <Post key={post.id} post={post} />
      ))}
    </div>
  );
};
export default AllPosts;
