import React from 'react';
import styled from 'styled-components';
import Item from './item';

const Wrapper = styled.div`
  position: relative;
  width: 100%;
  max-width: 1200px;
  height: 100%;
  margin: 0 auto;
`;

const Board = () => (
  <Wrapper>
    {'Header page'}
    <Item />
  </Wrapper>
);

export default Board;
