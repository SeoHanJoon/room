import React, { Fragment } from 'react';
import styled from 'styled-components';

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
  border-top: solid 3px #5af;
`;

const ItemContent = styled.div`
  height: 240px;
  padding: 8px;
  border: solid 1px #e6e6e6;
  border-top: none;
`;

const Item = () => (
  <Fragment>
    <ItemWrapper>
      <ItemTitle>
        {'Title'}
      </ItemTitle>
      <ItemContent>
        {'123'}
      </ItemContent>
    </ItemWrapper>
  </Fragment>
);

export default Item;
