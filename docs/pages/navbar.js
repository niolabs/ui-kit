import React from 'react';

import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink } from '../../src/index';

export default class DocsPage extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false,
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen,
    });
  }

  render() {
    return (
      <div>
        <h1>Navbar</h1>
        <hr />
        <h4>Import</h4>
        <code>
          {
            `// Import component (and relevant CSS)
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink } from '@nio/ui-kit';`
          }
        </code>
        <hr />
        <h4>Use</h4>
        <code>
          {
            `<Navbar color="inverse" fixed="top" inverse toggleable>
  <NavbarToggler right onClick={this.toggle} isOpen={this.state.isOpen} />
  <NavbarBrand>
    <div id="logo" />
  </NavbarBrand>
  <Collapse isOpen={this.state.isOpen} navbar>
    <Nav className="ml-auto hidden-sm-up" navbar>
      <NavItem>
        <NavLink href="/">Docs</NavLink>
      </NavItem>
      <NavItem>
        <NavLink href="https://github.com/nioinnovation/ui-kit">Github</NavLink>
      </NavItem>
    </Nav>
  </Collapse>
</Navbar>`
          }
        </code>
        <br />
        <Navbar color="inverse" inverse toggleable>
          <NavbarToggler right onClick={this.toggle} isOpen={this.state.isOpen} />
          <NavbarBrand>
            <div id="logo" />
          </NavbarBrand>
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink href="/">Docs</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="https://github.com/nioinnovation/ui-kit">Github</NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}
