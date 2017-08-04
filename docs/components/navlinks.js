import React from 'react';
import { NavLink } from 'react-router-dom';
import { NavItem } from '../../src/index';

const NavLinks = () => (
  <div>
    <NavItem>
      <NavLink to="/">Home</NavLink>
    </NavItem>
    <div className="mt-2 mb-0">ReactStrap</div>
    <hr className="mt-0 mb-1" />
    <NavItem>
      <NavLink to="/alert">Alert</NavLink>
    </NavItem>
    <NavItem>
      <NavLink to="/button">Buttons</NavLink>
    </NavItem>
    <NavItem>
      <NavLink to="/card">Card</NavLink>
    </NavItem>
    <NavItem>
      <NavLink to="/collapse">Collapse</NavLink>
    </NavItem>
    <NavItem>
      <NavLink to="/input-group">Input Group</NavLink>
    </NavItem>
    <NavItem>
      <NavLink to="/layout">Layout</NavLink>
    </NavItem>
    <NavItem>
      <NavLink to="/progress">Progress</NavLink>
    </NavItem>
    <div className="mt-2 mb-1">VictoryCharts</div>
    <hr className="mt-0 mb-1" />
    <NavItem>
      <NavLink to="/victory-bar">VictoryBar</NavLink>
    </NavItem>
    <NavItem>
      <NavLink to="/victory-pie">VictoryPie</NavLink>
    </NavItem>
  </div>
);

export default NavLinks;
