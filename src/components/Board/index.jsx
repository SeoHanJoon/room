import React from 'react';
import styled from 'styled-components';
import PropTypes, { object } from 'prop-types';
import Item from './item';

const Wrapper = styled.div`
  position: relative;
  width: 100%;
  max-width: 1200px;
  height: 100%;
  margin: 40px auto;
  font-size: 0;
`;

const Board = ({ mainBoard, onToggle }) => {
  const itemList = mainBoard.map(w => (
    <Item
      key={w.id}
      title={w.title}
      content={w.content}
      bools={w.bools}
      onToggle={() => onToggle(w.id)}
    />
  ));
  return (
    <Wrapper>
      {itemList}
    </Wrapper>
  );
};

Board.propTypes = {
  mainBoard: PropTypes.arrayOf(object).isRequired,
  onToggle: PropTypes.func.isRequired,
};

export default Board;
