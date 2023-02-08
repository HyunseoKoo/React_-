import styled from 'styled-components';

function FixedFooter() {
  return (
    <>
      <S.Wrapper2></S.Wrapper2>
    </>
  );
}

export default FixedFooter;

const Wrapper2 = styled.div`
  width: 100%;
  height: 70px;
  background-color: #d9d9d9;
  position: fixed;
  bottom: 0;
`;

const S = {
  Wrapper2,
};
