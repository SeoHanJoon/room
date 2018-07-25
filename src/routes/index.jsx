import React, { Fragment } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import Main from '../containers';

const routes = () => (
  <BrowserRouter>
    <Fragment>
      <Route exact path="/" component={Main} />
    </Fragment>
  </BrowserRouter>
);

export default routes;
