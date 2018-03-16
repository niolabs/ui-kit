import React from 'react';

import { Nav, NavItem, NavLink, Code } from '@nio/ui-kit';

export default class DocsPage extends React.Component {
  render() {
    return (
      <div>
        <h1>Navs</h1>
        <hr />
        <h4>Import</h4>
        <Code>
          {
            `// Import component (and relevant CSS)
import { Nav, NavItem, NavLink } from '@nio/ui-kit';`
          }
        </Code>
        <hr />
        <h4>Use</h4>
        <Code>
          {
            `<p>List Based</p>
<Nav>
  <NavItem>
    <NavLink href="#">Link</NavLink>
  </NavItem>
  <NavItem>
    <NavLink href="#">Link</NavLink>
  </NavItem>
  <NavItem>
    <NavLink href="#">Another Link</NavLink>
  </NavItem>
  <NavItem>
    <NavLink disabled href="#">Disabled Link</NavLink>
  </NavItem>
</Nav>
<hr />
<p>Link Based</p>
<Nav>
  <NavLink href="#">Link</NavLink> <NavLink href="#">Link</NavLink> <NavLink href="#">Another Link</NavLink> <NavLink disabled href="#">Disabled Link</NavLink>
</Nav>`
          }
        </Code>
        <br />
        <p>List Based</p>
        <Nav>
          <NavItem>
            <NavLink href="#">Link</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="#">Link</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="#">Another Link</NavLink>
          </NavItem>
          <NavItem>
            <NavLink disabled href="#">Disabled Link</NavLink>
          </NavItem>
        </Nav>
        <hr />
        <p>Link Based</p>
        <Nav>
          <NavLink href="#">Link</NavLink> <NavLink href="#">Link</NavLink> <NavLink href="#">Another Link</NavLink> <NavLink disabled href="#">Disabled Link</NavLink>
        </Nav>
      </div>
    );
  }
}
