import React, { Fragment } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import { Login, Main } from '../containers';

const routes = () => (
  <BrowserRouter>
    <Fragment>
      <Route exact path="/" component={Main} />
      <Route path="/login" component={Login} />
    </Fragment>
  </BrowserRouter>
);

export default routes;
