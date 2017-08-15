import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import { NavItem } from '../../src/index';

const NavLinks = ({ toggleNav }) => (
  <div>
    <NavItem>
      <NavLink onClick={() => toggleNav(true)} to="/">Home</NavLink>
    </NavItem>
    <div className="mt-2 mb-0">nioLabs</div>
    <hr className="mt-0 mb-1" />
    <NavItem>
      <NavLink onClick={() => toggleNav(true)} to="/loader">Loader</NavLink>
    </NavItem>
    <NavItem>
      <NavLink onClick={() => toggleNav(true)} to="/toggle">Toggle</NavLink>
    </NavItem>
    <div className="mt-2 mb-1">VictoryCharts</div>
    <hr className="mt-0 mb-1" />
    <NavItem>
      <NavLink onClick={() => toggleNav(true)} to="/victory-area">VictoryArea</NavLink>
    </NavItem>
    <NavItem>
      <NavLink onClick={() => toggleNav(true)} to="/victory-bar">VictoryBar</NavLink>
    </NavItem>
    <NavItem>
      <NavLink onClick={() => toggleNav(true)} to="/victory-pie">VictoryPie</NavLink>
    </NavItem>
    <div className="mt-2 mb-0">ReactStrap</div>
    <hr className="mt-0 mb-1" />
    <NavItem>
      <NavLink onClick={() => toggleNav(true)} to="/alerts">Alerts</NavLink>
    </NavItem>
    <NavItem>
      <NavLink onClick={() => toggleNav(true)} to="/badge">Badge</NavLink>
    </NavItem>
    <NavItem>
      <NavLink onClick={() => toggleNav(true)} to="/breadcrumbs">Breadcrumbs</NavLink>
    </NavItem>
    <NavItem>
      <NavLink onClick={() => toggleNav(true)} to="/buttons">Buttons</NavLink>
    </NavItem>
    <NavItem>
      <NavLink onClick={() => toggleNav(true)} to="/button-dropdown">Button Dropdown</NavLink>
    </NavItem>
    <NavItem>
      <NavLink onClick={() => toggleNav(true)} to="/button-group">Button Group</NavLink>
    </NavItem>
    <NavItem>
      <NavLink onClick={() => toggleNav(true)} to="/card">Card</NavLink>
    </NavItem>
    <NavItem>
      <NavLink onClick={() => toggleNav(true)} to="/collapse">Collapse</NavLink>
    </NavItem>
    <NavItem>
      <NavLink onClick={() => toggleNav(true)} to="/dropdowns">Dropdowns</NavLink>
    </NavItem>
    <NavItem>
      <NavLink onClick={() => toggleNav(true)} to="/form">Form</NavLink>
    </NavItem>
    <NavItem>
      <NavLink onClick={() => toggleNav(true)} to="/input-group">Input Group</NavLink>
    </NavItem>
    <NavItem>
      <NavLink onClick={() => toggleNav(true)} to="/jumbotron">Jumbotron</NavLink>
    </NavItem>
    <NavItem>
      <NavLink onClick={() => toggleNav(true)} to="/layout">Layout</NavLink>
    </NavItem>
    <NavItem>
      <NavLink onClick={() => toggleNav(true)} to="/list-group">List Group</NavLink>
    </NavItem>
    <NavItem>
      <NavLink onClick={() => toggleNav(true)} to="/media">Media</NavLink>
    </NavItem>
    <NavItem>
      <NavLink onClick={() => toggleNav(true)} to="/modals">Modals</NavLink>
    </NavItem>
    <NavItem>
      <NavLink onClick={() => toggleNav(true)} to="/navbar">Navbar</NavLink>
    </NavItem>
    <NavItem>
      <NavLink onClick={() => toggleNav(true)} to="/navs">Navs</NavLink>
    </NavItem>
    <NavItem>
      <NavLink onClick={() => toggleNav(true)} to="/pagination">Pagination</NavLink>
    </NavItem>
    <NavItem>
      <NavLink onClick={() => toggleNav(true)} to="/popovers">Popovers</NavLink>
    </NavItem>
    <NavItem>
      <NavLink onClick={() => toggleNav(true)} to="/progress">Progress</NavLink>
    </NavItem>
    <NavItem>
      <NavLink onClick={() => toggleNav(true)} to="/tables">Tables</NavLink>
    </NavItem>
    <NavItem>
      <NavLink onClick={() => toggleNav(true)} to="/tabs">Tabs</NavLink>
    </NavItem>
    <NavItem>
      <NavLink onClick={() => toggleNav(true)} to="/tooltips">Tooltips</NavLink>
    </NavItem>
  </div>
);

NavLinks.propTypes = {
  toggleNav: PropTypes.func,
};

export default NavLinks;
