import styled from 'styled-components';

function Header() {
  return <S.Wrapper>header</S.Wrapper>;
}

export default Header;

const Wrapper = styled.div`
  background-color: navy;
  width: 100%;
  height: 3rem;
  position: fixed;
`;

const S = {
  Wrapper,
};
