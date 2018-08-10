import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const ItemWrapper = styled.div`
  display: inline-block;
  position: relative;
  width: 30%;
  max-width: 360px;
  margin: 24px 20px;
  font-size: 14px;
`;

const ItemTitle = styled.div`
  height: 96px;
  padding: 8px;
  border: solid 1px #e6e6e6;
  border-top: solid 3px ${props => (props.bools ? '#f00' : '#5af')};
`;

const ItemContent = styled.div`
  height: 240px;
  padding: 8px;
  border: solid 1px #e6e6e6;
  border-top: none;
`;

const Item = ({
  title, content, bools, onToggle,
}) => (
  <ItemWrapper onClick={onToggle}>
    <ItemTitle bools={bools}>
      {title}
    </ItemTitle>
    <ItemContent>
      {content}
    </ItemContent>
  </ItemWrapper>
);

Item.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  bools: PropTypes.bool,
  onToggle: PropTypes.func.isRequired,
};
Item.defaultProps = {
  bools: false,
};
ItemTitle.propTypes = {
  bools: PropTypes.bool,
};
ItemTitle.defaultProps = {
  bools: false,
};

export default Item;
