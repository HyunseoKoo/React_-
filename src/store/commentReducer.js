import { MockPosts } from '../__mock__/mockPosts';
import shortId from 'shortid';
import { faker } from '@faker-js/faker';

const initialPosts = MockPosts(10);
console.log(initialPosts);

const postsReducer = (state = initialPosts, action) => {
  switch (action.type) {
    case 'ADD_POST':
      return [
        {
          id: shortId.generate(),
          title: action.payload.title,
          content: action.payload.content,
          User: {
            id: shortId.generate(),
            nickName: faker.name.firstName(),
            profileImg: faker.image.image(),
          },
          Post_img: Array(Math.floor(Math.random() * 3) + 1)
            .fill()
            .map(() => faker.image.imageUrl()),
          Comments: Array(Math.floor(Math.random() * 5) + 1)
            .fill()
            .map(() => {
              return {
                id: shortId.generate(),
                content: faker.lorem.sentence(),
                User: {
                  id: shortId.generate(),
                  nickName: faker.name.firstName(),
                  profileImg: faker.image.image(),
                },

                myComment: true,
                createdAt: faker.date.between(
                  '2023-01-01T00:00:00.000Z',
                  '2023-01-31T00:00:00.000Z'
                ),
              };
            }),
          createdAt: faker.date.between('2023-01-01T00:00:00.000Z', '2023-01-31T00:00:00.000Z'),
          myPost: true,
        },
        ...state,
      ];
    //   case "ADD_COMMENT":
    //     return [...state]
    default:
      console.log('지정된 타입이 없습니다.');
      return state;
  }
};
export default postsReducer;
