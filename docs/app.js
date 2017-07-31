import React, { Component, PropTypes } from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, Link, hashHistory } from 'react-router';

import { Row, Column } from '../lib/grid';
import { TopBar, TopBarTitle } from '../lib/top-bar-flex'; // eslint-disable-line import/no-unresolved
import { Menu, MenuItem } from '../lib/menu-flex'; // eslint-disable-line import/no-unresolved

import GridPage from './pages/grid';
import FlexGridPage from './pages/grid-flex';
import FormsPage from './pages/forms';
import VisibilityPage from './pages/visibility';
import FloatPage from './pages/float';
import FlexPage from './pages/flex';
import TypographyHelpersPage from './pages/typography';
import ButtonPage from './pages/button';
import ButtonGroupPage from './pages/button-group';
import CloseButtonPage from './pages/close-button';
import SwitchPage from './pages/switch';
import MenuPage from './pages/menu';
import TopBarPage from './pages/top-bar';
import PaginationPage from './pages/pagination';
import BreadcrumbPage from './pages/breadcrumb';
import AccordionPage from './pages/accordion';
import CalloutPage from './pages/callout';
import DropdownPage from './pages/dropdown';
import MediaObjectPage from './pages/media-object';
import OffCanvasPage from './pages/off-canvas';
import RevealPage from './pages/reveal';
import TablePage from './pages/table';
import TabsPage from './pages/tabs';
import BadgePage from './pages/badge';
import FlexVideoPage from './pages/flex-video';
import LabelPage from './pages/label';
import ProgressBarPage from './pages/progress-bar';
import ThumbnailPage from './pages/thumbnail';
import TooltipPage from './pages/tooltip';

import './docs.scss';

function scrollToTop() {
  document.getElementById('app-content').scrollTop = 0;
}

/* eslint-disable react/prefer-stateless-function */
class HomePage extends Component {
  static propTypes = {
    children: PropTypes.node,
  };

  render() {
    return (
      <div>
        <TopBar className="top-bar">
          <TopBarTitle>nioLABS :: UIKit Component Library</TopBarTitle>
        </TopBar>
        <Row expanded className="content-holder">
          <Column className="nav-holder" small={12} medium={3} large={3} xlarge={2} xxlarge={2}>
            <Menu vertical>
              <MenuItem text>General</MenuItem>
              <MenuItem>
                <Menu nested vertical>
                  <MenuItem>
                    <Link to="/general/grid">Grid</Link>
                  </MenuItem>
                  <MenuItem>
                    <Link to="/general/forms">Forms</Link>
                  </MenuItem>
                  <MenuItem>
                    <Link to="/general/visibility">Visibility</Link>
                  </MenuItem>
                  <MenuItem>
                    <Link to="/typography/helpers">Typography</Link>
                  </MenuItem>
                  {/*
                   <MenuItem>
                   <Link to="/general/grid/flex">Flex Grid</Link>
                   </MenuItem>
                  <MenuItem>
                    <Link to="/general/float">Float</Link>
                  </MenuItem>
                  <MenuItem>
                    <Link to="/general/flex">Flexbox</Link>
                  </MenuItem>
                  */}
                </Menu>
              </MenuItem>
              {/*
              <MenuItem text>Typography</MenuItem>
              <MenuItem>
                <Menu nested vertical>
                  <MenuItem>
                    <Link to="/typography/base">Base Typography</Link>
                  </MenuItem>
                  <MenuItem>
                    <Link to="/typography/print">Print</Link>
                  </MenuItem>
                  <MenuItem>
                    <Link to="/typography/helpers">Typography Helpers</Link>
                  </MenuItem>
                  <MenuItem>
                    <Link to="/typography/text-alignment">Text Alignment</Link>
                  </MenuItem>
                </Menu>
              </MenuItem>
              */}
              <MenuItem text>Controls</MenuItem>
              <MenuItem>
                <Menu nested vertical>
                  <MenuItem>
                    <Link to="/controls/button">Button</Link>
                  </MenuItem>
                  <MenuItem>
                    <Link to="/controls/button-group">Button Group</Link>
                  </MenuItem>
                  <MenuItem>
                    <Link to="/controls/switch">Switch</Link>
                  </MenuItem>
                  {/*
                  <MenuItem>
                    <Link to="/custom/toggle-switch">Toggle Switch</Link>
                  </MenuItem>
                   <MenuItem>
                   <Link to="/controls/close-button">Close Button</Link>
                   </MenuItem>
                   */}
                </Menu>
              </MenuItem>
              {/*
              <MenuItem text>Navigation</MenuItem>
              <MenuItem>
                <Menu nested vertical>
                  <MenuItem>
                    <Link to="/navigation/menu">Menu</Link>
                  </MenuItem>
                  <MenuItem>
                    <Link to="/navigation/top-bar">Top Bar</Link>
                  </MenuItem>
                  <MenuItem>
                    <Link to="/navigation/pagination">Pagination</Link>
                  </MenuItem>
                  <MenuItem>
                    <Link to="/navigation/breadcrumb">Breadcrumb</Link>
                  </MenuItem>
                </Menu>
              </MenuItem>
               */}
              <MenuItem text>Containers</MenuItem>
              <MenuItem>
                <Menu nested vertical>
                  <MenuItem>
                    <Link to="/containers/accordion">Accordion</Link>
                  </MenuItem>
                  <MenuItem>
                    <Link to="/containers/callout">Callout</Link>
                  </MenuItem>
                  <MenuItem>
                    <Link to="/containers/tabs">Tabs</Link>
                  </MenuItem>
                  {/*
                   <MenuItem>
                   <Link to="/containers/dropdown">Dropdown</Link>
                   </MenuItem>
                   <MenuItem>
                   <Link to="/containers/media-object">Media Object</Link>
                   </MenuItem>
                   <MenuItem>
                   <Link to="/containers/off-canvas">Off Canvas</Link>
                   </MenuItem>
                   <MenuItem>
                   <Link to="/containers/reveal">Reveal</Link>
                   </MenuItem>
                   <MenuItem>
                   <Link to="/containers/table">Table</Link>
                   </MenuItem>
                   */}
                </Menu>
              </MenuItem>
              <MenuItem text>Helpers</MenuItem>
              <MenuItem>
                <Menu nested vertical>
                  <MenuItem>
                    <Link to="/media/badge">Badge</Link>
                  </MenuItem>
                  <MenuItem>
                    <Link to="/media/label">Label</Link>
                  </MenuItem>
                  <MenuItem>
                    <Link to="/media/progress-bar">Progress Bar</Link>
                  </MenuItem>
                  {/*
                   <MenuItem>
                   <Link to="/media/flex-video">Flex Video</Link>
                   </MenuItem>
                  <MenuItem>
                    <Link to="/media/thumbnail">Thumbnail</Link>
                  </MenuItem>
                   */}
                  <MenuItem>
                    <Link to="/media/tooltip">Tooltip</Link>
                  </MenuItem>
                </Menu>
              </MenuItem>
            </Menu>
          </Column>
          <Column id="app-content" className="app-content" small={12} medium={9} large={9} xlarge={10} xxlarge={10}>
            {this.props.children}
            <br /><br />
          </Column>
        </Row>
      </div>
    );
  }
}
/* eslint-enable react/prefer-stateless-function */

const Demo = () => (
  <Router history={hashHistory} onUpdate={scrollToTop}>
    <Route component={HomePage} path="/">
      <Route component={GridPage} path="/general/grid" />
      <Route component={FlexGridPage} path="/general/grid/flex" />
      <Route component={FormsPage} path="/general/forms" />
      <Route component={VisibilityPage} path="/general/visibility" />
      <Route component={FloatPage} path="/general/float" />
      <Route component={FlexPage} path="/general/flex" />
      <Route component={TypographyHelpersPage} path="/typography/helpers" />
      <Route component={ButtonPage} path="/controls/button" />
      <Route component={ButtonGroupPage} path="/controls/button-group" />
      <Route component={CloseButtonPage} path="/controls/close-button" />
      <Route component={SwitchPage} path="/controls/switch" />
      <Route component={MenuPage} path="/navigation/menu" />
      <Route component={TopBarPage} path="/navigation/top-bar" />
      <Route component={PaginationPage} path="/navigation/pagination" />
      <Route component={BreadcrumbPage} path="/navigation/breadcrumb" />
      <Route component={AccordionPage} path="/containers/accordion" />
      <Route component={CalloutPage} path="/containers/callout" />
      <Route component={DropdownPage} path="/containers/dropdown" />
      <Route component={MediaObjectPage} path="/containers/media-object" />
      <Route component={OffCanvasPage} path="/containers/off-canvas" />
      <Route component={RevealPage} path="/containers/reveal" />
      <Route component={TablePage} path="/containers/table" />
      <Route component={TabsPage} path="/containers/tabs" />
      <Route component={BadgePage} path="/media/badge" />
      <Route component={FlexVideoPage} path="/media/flex-video" />
      <Route component={LabelPage} path="/media/label" />
      <Route component={ProgressBarPage} path="/media/progress-bar" />
      <Route component={ThumbnailPage} path="/media/thumbnail" />
      <Route component={TooltipPage} path="/media/tooltip" />
    </Route>
  </Router>
);

ReactDOM.render(<Demo />, document.getElementById('app'));
