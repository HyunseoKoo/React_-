import styled from 'styled-components';

function HomePage() {
  return (
    <>
      <S.Img></S.Img>
      <S.Box>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </S.Box>
      <S.Img></S.Img>
      <S.Box2>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </S.Box2>
    </>
  );
}
export default HomePage;

const Img = styled.div`
  width: 100%;
  height: 600px;
  background-color: #d9d9d9;
`;

const Box = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 60%;
  height: 100%;
  margin: 2rem auto;

  div {
    width: 45%;
    height: 300px;
    flex-wrap: wrap;
    background-color: skyblue;
    margin: 0.5rem;
  }
`;

const Box2 = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 60%;
  height: 100%;
  margin: 2rem auto;

  div {
    width: 30%;
    height: 300px;
    flex-wrap: wrap;
    background-color: skyblue;
    margin: 1rem;
  }
`;

const S = {
  Img,
  Box,
  Box2,
};
