import React from 'react';
import { Switch, Route } from 'react-router-dom';

import IndexPage from '../pages/index';
import LoaderPage from '../pages/loader';
import TogglePage from '../pages/toggle';
import AlertsPage from '../pages/alerts';
import BadgePage from '../pages/badge';
import BreadcrumbPage from '../pages/breadcrumb';
import ButtonPage from '../pages/buttons';
import ButtonDropdownPage from '../pages/button-dropdown';
import ButtonGroupPage from '../pages/button-group';
import CardPage from '../pages/card';
import CollapsePage from '../pages/collapse';
import DropdownsPage from '../pages/dropdowns';
import FormPage from '../pages/form';
import InputGroupPage from '../pages/input-group';
import JumbotronPage from '../pages/jumbotron';
import LayoutPage from '../pages/layout';
import ListGroupPage from '../pages/list-group';
import MediaPage from '../pages/media';
import ModalsPage from '../pages/modals';
import NavbarPage from '../pages/navbar';
import NavsPage from '../pages/navs';
import PaginationPage from '../pages/pagination';
import PopoversPage from '../pages/popovers';
import ProgressPage from '../pages/progress';
import TablesPage from '../pages/tables';
import TabsPage from '../pages/tabs';
import TooltipsPage from '../pages/tooltips';
import VictoryBarPage from '../pages/victory-bar';
import VictoryPiePage from '../pages/victory-pie';
import VictoryAreaPage from '../pages/victory-area';

const Routes = () => (
  <Switch>
    <Route exact path="/" component={IndexPage} />
    {/* Custom Components */}
    <Route component={LoaderPage} path="/loader" />
    <Route component={TogglePage} path="/toggle" />
    {/* VictoryCharts Components */}
    <Route component={VictoryBarPage} path="/victory-bar" />
    <Route component={VictoryPiePage} path="/victory-pie" />
    <Route component={VictoryAreaPage} path="/victory-area" />
    {/* Reactstrap Components */}
    <Route component={AlertsPage} path="/alerts" />
    <Route component={BadgePage} path="/badge" />
    <Route component={BreadcrumbPage} path="/breadcrumbs" />
    <Route component={ButtonPage} path="/buttons" />
    <Route component={ButtonGroupPage} path="/button-group" />
    <Route component={ButtonDropdownPage} path="/button-dropdown" />
    <Route component={CardPage} path="/card" />
    <Route component={CollapsePage} path="/collapse" />
    <Route component={DropdownsPage} path="/dropdowns" />
    <Route component={FormPage} path="/form" />
    <Route component={InputGroupPage} path="/input-group" />
    <Route component={JumbotronPage} path="/jumbotron" />
    <Route component={LayoutPage} path="/layout" />
    <Route component={ListGroupPage} path="/list-group" />
    <Route component={MediaPage} path="/media" />
    <Route component={ModalsPage} path="/modals" />
    <Route component={NavbarPage} path="/navbar" />
    <Route component={NavsPage} path="/navs" />
    <Route component={PaginationPage} path="/pagination" />
    <Route component={PopoversPage} path="/popovers" />
    <Route component={ProgressPage} path="/progress" />
    <Route component={TablesPage} path="/tables" />
    <Route component={TabsPage} path="/tabs" />
    <Route component={TooltipsPage} path="/tooltips" />
  </Switch>
);

export default Routes;
