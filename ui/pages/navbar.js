import React from 'react';

import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink, Code } from '@nio/ui-kit';

export default class DocsPage extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false,
    };
  }

  toggle() {
    const { isOpen } = this.state;
    this.setState({
      isOpen: !isOpen,
    });
  }

  render() {
    return (
      <div>
        <h1>Navbar</h1>
        <hr />
        <h4>Import</h4>
        <Code>
          {
            `// Import component (and relevant CSS)
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink } from '@nio/ui-kit';`
          }
        </Code>
        <hr />
        <h4>Use</h4>
        <Code>
          {
            `<Navbar dark>
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
</Navbar>`
          }
        </Code>
        <br />
        <Navbar dark>
          <NavbarToggler right onClick={this.toggle} isOpen={this.state.isOpen} />
          <NavbarBrand>
            <div id="logo" />
          </NavbarBrand>
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink href="https://docs.n.io">Docs</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="https://github.com/niolabs/ui-kit">Github</NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}
