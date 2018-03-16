import React from 'react';
import { Navbar, NavbarToggler, NavbarBrand, Nav, Collapse } from '@nio/ui-kit';

import NavLinks from './navlinks';
import Routes from './routes';

import '../assets/app.scss';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false,
    };
  }

  toggle(close) {
    this.setState({ isOpen: close ? false : !this.state.isOpen });
  }

  render() {
    return (
      <div>
        <Navbar id="app-nav" dark fixed="top">
          <NavbarBrand><div id="logo" /></NavbarBrand>
          <NavbarToggler onClick={this.toggle} isOpen={this.state.isOpen} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavLinks toggleNav={this.toggle} />
            </Nav>
          </Collapse>
        </Navbar>
        <div id="app-container">
          <div id="app-sidebar" className="d-none d-sm-block">
            <Nav vertical>
              <NavLinks toggleNav={this.toggle} />
            </Nav>
          </div>
          <div id="app-content">
            <Routes />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
