import React, { Component, PropTypes } from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, Link, hashHistory } from 'react-router';

import { Row, Column } from '../lib/components/grid';
import { Menu, MenuItem } from '../lib/components/menu'; // eslint-disable-line import/no-unresolved

import AccordionPage from './pages/accordion';
import BadgePage from './pages/badge';
import BreadcrumbPage from './pages/breadcrumb';
import ButtonPage from './pages/button';
import ButtonGroupPage from './pages/button-group';
import CalloutPage from './pages/callout';
import CloseButtonPage from './pages/close-button';
import DropdownPage from './pages/dropdown';
import FlexPage from './pages/flex';
import FloatPage from './pages/float';
import FormsPage from './pages/forms';
import GridPage from './pages/grid';
import LabelPage from './pages/label';
import MediaObjectPage from './pages/media-object';
import MenuPage from './pages/menu';
import OffCanvasPage from './pages/off-canvas';
import PaginationPage from './pages/pagination';
import ProgressBarPage from './pages/progress-bar';
import RevealPage from './pages/reveal';
import SwitchPage from './pages/switch';
import TablePage from './pages/table';
import TabsPage from './pages/tabs';
import ThumbnailPage from './pages/thumbnail';
import TooltipPage from './pages/tooltip';
import TopBarPage from './pages/top-bar';
import TypographyHelpersPage from './pages/typography';
import VisibilityPage from './pages/visibility';

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
        <topBar>
          nioLABS :: UIKit Component Library
        </topBar>
        <navHolder>
          <Menu vertical>
            <MenuItem text>General</MenuItem>
            <MenuItem>
              <Menu nested vertical>
                <MenuItem>
                  <Link to="/grid">Grid</Link>
                </MenuItem>
                <MenuItem>
                  <Link to="/forms">Forms</Link>
                </MenuItem>
                <MenuItem>
                  <Link to="/visibility">Visibility</Link>
                </MenuItem>
                <MenuItem>
                  <Link to="/helpers">Typography</Link>
                </MenuItem>
                {/*
                 <MenuItem>
                 <Link to="/float">Float</Link>
                 </MenuItem>
                 <MenuItem>
                 <Link to="/flex">Flexbox</Link>
                 </MenuItem>
                 */}
              </Menu>
            </MenuItem>
            {/*
             <MenuItem text>Typography</MenuItem>
             <MenuItem>
             <Menu nested vertical>
             <MenuItem>
             <Link to="/base">Base Typography</Link>
             </MenuItem>
             <MenuItem>
             <Link to="/print">Print</Link>
             </MenuItem>
             <MenuItem>
             <Link to="/helpers">Typography Helpers</Link>
             </MenuItem>
             <MenuItem>
             <Link to="/text-alignment">Text Alignment</Link>
             </MenuItem>
             </Menu>
             </MenuItem>
             */}
            <MenuItem text>Controls</MenuItem>
            <MenuItem>
              <Menu nested vertical>
                <MenuItem>
                  <Link to="/button">Button</Link>
                </MenuItem>
                <MenuItem>
                  <Link to="/button-group">Button Group</Link>
                </MenuItem>
                <MenuItem>
                  <Link to="/switch">Switch</Link>
                </MenuItem>
                {/*
                 <MenuItem>
                 <Link to="/toggle-switch">Toggle Switch</Link>
                 </MenuItem>
                 <MenuItem>
                 <Link to="/close-button">Close Button</Link>
                 </MenuItem>
                 */}
              </Menu>
            </MenuItem>
            {/*
             <MenuItem text>Navigation</MenuItem>
             <MenuItem>
             <Menu nested vertical>
             <MenuItem>
             <Link to="/menu">Menu</Link>
             </MenuItem>
             <MenuItem>
             <Link to="/top-bar">Top Bar</Link>
             </MenuItem>
             <MenuItem>
             <Link to="/pagination">Pagination</Link>
             </MenuItem>
             <MenuItem>
             <Link to="/breadcrumb">Breadcrumb</Link>
             </MenuItem>
             </Menu>
             </MenuItem>
             */}
            <MenuItem text>Containers</MenuItem>
            <MenuItem>
              <Menu nested vertical>
                <MenuItem>
                  <Link to="/accordion">Accordion</Link>
                </MenuItem>
                <MenuItem>
                  <Link to="/callout">Callout</Link>
                </MenuItem>
                <MenuItem>
                  <Link to="/tabs">Tabs</Link>
                </MenuItem>
                {/*
                 <MenuItem>
                 <Link to="/dropdown">Dropdown</Link>
                 </MenuItem>
                 <MenuItem>
                 <Link to="/media-object">Media Object</Link>
                 </MenuItem>
                 <MenuItem>
                 <Link to="/off-canvas">Off Canvas</Link>
                 </MenuItem>
                 <MenuItem>
                 <Link to="/reveal">Reveal</Link>
                 </MenuItem>
                 <MenuItem>
                 <Link to="/table">Table</Link>
                 </MenuItem>
                 */}
              </Menu>
            </MenuItem>
            <MenuItem text>Helpers</MenuItem>
            <MenuItem>
              <Menu nested vertical>
                <MenuItem>
                  <Link to="/badge">Badge</Link>
                </MenuItem>
                <MenuItem>
                  <Link to="/label">Label</Link>
                </MenuItem>
                <MenuItem>
                  <Link to="/progress-bar">Progress Bar</Link>
                </MenuItem>
                {/*
                 <MenuItem>
                 <Link to="/thumbnail">Thumbnail</Link>
                 </MenuItem>
                 */}
                <MenuItem>
                  <Link to="/tooltip">Tooltip</Link>
                </MenuItem>
              </Menu>
            </MenuItem>
          </Menu>
        </navHolder>
        <contentHolder id="app-content">
          {this.props.children}
        </contentHolder>
      </div>
    );
  }
}
/* eslint-enable react/prefer-stateless-function */

const Demo = () => (
  <Router history={hashHistory} onUpdate={scrollToTop}>
    <Route component={HomePage} path="/">
      <Route component={GridPage} path="/grid" />
      <Route component={FormsPage} path="/forms" />
      <Route component={VisibilityPage} path="/visibility" />
      <Route component={FloatPage} path="/float" />
      <Route component={FlexPage} path="/flex" />
      <Route component={TypographyHelpersPage} path="/helpers" />
      <Route component={ButtonPage} path="/button" />
      <Route component={ButtonGroupPage} path="/button-group" />
      <Route component={CloseButtonPage} path="/close-button" />
      <Route component={SwitchPage} path="/switch" />
      <Route component={MenuPage} path="/menu" />
      <Route component={TopBarPage} path="/top-bar" />
      <Route component={PaginationPage} path="/pagination" />
      <Route component={BreadcrumbPage} path="/breadcrumb" />
      <Route component={AccordionPage} path="/accordion" />
      <Route component={CalloutPage} path="/callout" />
      <Route component={DropdownPage} path="/dropdown" />
      <Route component={MediaObjectPage} path="/media-object" />
      <Route component={OffCanvasPage} path="/off-canvas" />
      <Route component={RevealPage} path="/reveal" />
      <Route component={TablePage} path="/table" />
      <Route component={TabsPage} path="/tabs" />
      <Route component={BadgePage} path="/badge" />
      <Route component={LabelPage} path="/label" />
      <Route component={ProgressBarPage} path="/progress-bar" />
      <Route component={ThumbnailPage} path="/thumbnail" />
      <Route component={TooltipPage} path="/tooltip" />
    </Route>
  </Router>
);

ReactDOM.render(<Demo />, document.getElementById('app'));
