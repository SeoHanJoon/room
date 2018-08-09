import React, { Fragment } from 'react';
import styled from 'styled-components';

const ItemWrapper = styled.div`
  position: relative;
  width: 100%;
  max-width: 1200px;
  height: 100%;
  margin: 0 auto;
`;

const Item = () => (
  <Fragment>
    <ItemWrapper>
      {'123'}
    </ItemWrapper>
  </Fragment>
);

export default Item;
