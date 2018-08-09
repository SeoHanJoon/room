import React from 'react';
import styled from 'styled-components';
import Item from './item';

const Wrapper = styled.div`
  position: relative;
  width: 100%;
  max-width: 1200px;
  height: 100%;
  margin: 40px auto;
  font-size: 0;
`;

const Board = () => (
  <Wrapper>
    <Item />
    <Item />
    <Item />
    <Item />
    <Item />
    <Item />
    <Item />
    <Item />
    <Item />
    <Item />
  </Wrapper>
);

export default Board;
