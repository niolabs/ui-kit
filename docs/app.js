import React from 'react';
import { render } from 'react-dom';
import { HashRouter, Switch, Route, NavLink } from 'react-router-dom';

import IndexPage from './pages/index';
import AlertPage from './pages/alert';
import GridPage from './pages/grid';
import BreadcrumbPage from './pages/breadcrumb';
import ButtonPage from './pages/button';

import './docs.scss';

/* eslint-disable react/prefer-stateless-function */
const App = () => (
<div>
  <topBar>
    nioLABS :: UIKit Component Library
  </topBar>
  <navHolder>
    <NavLink to="/">Home</NavLink>
    <menuHeader>Layout</menuHeader>
    <NavLink to="/grid">Grid</NavLink>
    <menuHeader>Controls</menuHeader>
    <NavLink to="/button">Buttons</NavLink>
    <menuHeader>Containers</menuHeader>
    <NavLink to="/alert">Alert</NavLink>
    <menuHeader>Helpers</menuHeader>
    <NavLink to="/breadcrumb">Breadcrumb</NavLink>
  </navHolder>
  <contentHolder id="app-content">
    <Switch>
      <Route exact path="/" component={IndexPage}/>
      <Route component={AlertPage} path="/alert" />
      <Route component={GridPage} path="/grid" />
      <Route component={BreadcrumbPage} path="/breadcrumb" />
      <Route component={ButtonPage} path="/button" />
    </Switch>
  </contentHolder>
</div>
);
/* eslint-enable react/prefer-stateless-function */

render((
  <HashRouter>
    <App />
  </HashRouter>
  ),
  document.getElementById('app')
);
