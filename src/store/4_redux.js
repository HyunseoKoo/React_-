import { MockPosts } from '../__mock__/mockPosts';
import shortId from 'shortid';
import { faker } from '@faker-js/faker';

const initialPosts = MockPosts(10);

const postsReducer = (state = initialPosts, action) => {
  switch (action.type) {
    case 'ADD_POST':
      return [
        {
          id: shortId.generate(),
          title: action.payload.title, // 수정
          content: action.payload.content, // 수정
          User: {
            id: shortId.generate(),
            nickName: faker.name.firstName(),
            profileImg: faker.image.image(),
          },
          Comments: [],
          createdAt: faker.date.between('2023-01-01T00:00:00.000Z', '2023-01-31T00:00:00.000Z'),
          myPost: true, // 수정
        },
        ...state,
      ];

    case 'EDIT_POST': // reducer로 관리하기 오히려 더 어렵다고 생각

    case 'DELETE_POST':
      const filterPosts = state.filter((item) => {
        return item.id !== action.payload.id;
      });
      return filterPosts;

    case 'DELETE_COMMENT':

    // 코멘트 추가
    case 'ADD_COMMENT':
      const newPost = [...state];
      const selectedPost = newPost.filter((item) => item.id == action.payload.id);
      // console.log(selectedPost);
      const selectedPostComments = selectedPost[0].Comments;
      console.log(selectedPostComments); // Array
      const newOneComment = {
        User: {
          id: shortId.generate(),
          nickName: action.payload.name,
          profileImg: faker.image.image(),
        },
        id: shortId.generate(),
        content: action.payload.content,
        createdAt: faker.date.between('2023-01-01T00:00:00.000Z', '2023-01-31T00:00:00.000Z'),
        myComment: true,
      };
      const newComments = [newOneComment, ...selectedPostComments];
      console.log(newComments);
      selectedPostComments = newComments;
      return newPost;

    default:
      // console.log('지정된 타입이 없습니다.');
      return state;
  }
};
export default postsReducer;
