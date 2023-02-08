import styled from 'styled-components';
import FixedFooter from './fixedFooter/fixedFooter';
import MainFooter from './mainFooter/mainFooter';

function BasicFooter() {
  return (
    <>
      <MainFooter />
      <FixedFooter />
    </>
  );
}

export default BasicFooter;
