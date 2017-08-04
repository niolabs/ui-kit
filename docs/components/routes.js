import React from 'react';
import { Switch, Route } from 'react-router-dom';

import IndexPage from '../pages/index';
import AlertPage from '../pages/alert';
import LayoutPage from '../pages/layout';
import BreadcrumbPage from '../pages/breadcrumb';
import ButtonPage from '../pages/button';
import ButtonDropdownPage from '../pages/button-dropdown';
import CardPage from '../pages/card';
import CollapsePage from '../pages/collapse';
import FormPage from '../pages/form';
import InputGroupPage from '../pages/input-group';
import ProgressPage from '../pages/progress';
import VictoryBarPage from '../pages/victory-bar';
import VictoryPiePage from '../pages/victory-pie';

const Routes = () => (
  <Switch>
    <Route exact path="/" component={IndexPage} />
    <Route component={AlertPage} path="/alert" />
    <Route component={BreadcrumbPage} path="/breadcrumb" />
    <Route component={ButtonPage} path="/button" />
    <Route component={ButtonDropdownPage} path="/button-dropdown" />
    <Route component={CardPage} path="/card" />
    <Route component={CollapsePage} path="/collapse" />
    <Route component={FormPage} path="/form" />
    <Route component={InputGroupPage} path="/input-group" />
    <Route component={LayoutPage} path="/layout" />
    <Route component={ProgressPage} path="/progress" />
    <Route component={VictoryBarPage} path="/victory-bar" />
    <Route component={VictoryPiePage} path="/victory-pie" />
  </Switch>
);

export default Routes;
