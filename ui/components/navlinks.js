import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import { NavItem } from '@nio/ui-kit';

const NavLinks = ({ toggleNav }) => (
  <div id="app-subnav">
    <NavItem>
      <NavLink onClick={() => toggleNav(true)} exact to="/">Home</NavLink>
    </NavItem>
    <NavItem className="header">
      niolabs
    </NavItem>
    <NavItem>
      <NavLink onClick={() => toggleNav(true)} to="/chart">Chart</NavLink>
    </NavItem>
    <NavItem>
      <NavLink onClick={() => toggleNav(true)} to="/circularprogressbar">Circular Progress Bar</NavLink>
    </NavItem>
    <NavItem>
      <NavLink onClick={() => toggleNav(true)} to="/clock">Clock</NavLink>
    </NavItem>
    <NavItem>
      <NavLink onClick={() => toggleNav(true)} to="/code">Code</NavLink>
    </NavItem>
    <NavItem>
      <NavLink onClick={() => toggleNav(true)} to="/divider">Divider</NavLink>
    </NavItem>
    <NavItem>
      <NavLink onClick={() => toggleNav(true)} to="/icon">Icon</NavLink>
    </NavItem>
    <NavItem>
      <NavLink onClick={() => toggleNav(true)} to="/loader">Loader</NavLink>
    </NavItem>
    <NavItem>
      <NavLink onClick={() => toggleNav(true)} to="/radiocheckbox">RadioCheckbox</NavLink>
    </NavItem>
    <NavItem>
      <NavLink onClick={() => toggleNav(true)} to="/selectdropdown">SelectDropdown</NavLink>
    </NavItem>
    <NavItem>
      <NavLink onClick={() => toggleNav(true)} to="/rangeslider">Range Slider</NavLink>
    </NavItem>
    <NavItem>
      <NavLink onClick={() => toggleNav(true)} to="/toggle">Toggle</NavLink>
    </NavItem>
    <NavItem className="header">
      ReactStrap
    </NavItem>
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
      <NavLink onClick={() => toggleNav(true)} to="/form-inverse">Form Inverse</NavLink>
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
