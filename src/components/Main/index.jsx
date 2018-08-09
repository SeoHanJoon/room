import React from 'react';
import styled from 'styled-components';
import Movie from './movie';
import Typograph from './typograph';

const Wrapper = styled.div`
  position: relative;
`;

const SvgWrapper = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  width: 800px;
  height: 800px;
  margin: -400px 0 0 -400px;
`;

const Main = () => (
  <Wrapper>
    <Movie />
    <SvgWrapper>
      <Typograph />
    </SvgWrapper>
  </Wrapper>
);

export default Main;
