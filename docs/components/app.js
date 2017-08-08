import React from 'react';
import { Navbar, NavbarToggler, NavbarBrand, Nav, Collapse } from '../../dist';

import NavLinks from './navlinks';
import Routes from './routes';

import '../app.scss';

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
        <Navbar id="app-nav" color="inverse" fixed="top" inverse toggleable>
          <NavbarToggler right onClick={this.toggle} isOpen={this.state.isOpen} />
          <NavbarBrand href="/">
            <img alt="nioLabs" src="/logo.svg" id="logo" />
          </NavbarBrand>
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto hidden-sm-up" navbar>
              <NavLinks toggleNav={this.toggle} />
            </Nav>
          </Collapse>
        </Navbar>
        <div id="app-container">
          <div id="app-sidebar" className="hidden-xs-down">
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
