import React from 'react';

import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from '../../src/index';

export default class DocsPage extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      dropdownOpen: false,
    };
  }

  toggle() {
    this.setState({
      dropdownOpen: !this.state.dropdownOpen,
    });
  }

  render() {
    return (
      <div>
        <h1>Dropdowns</h1>
        <hr />
        <h4>Import</h4>
        <code>
          {
            `// Import with local scoped class names (via CSS Modules)
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from '@nio/ui-kit';`
          }
        </code>
        <hr />
        <h4>Use</h4>
        <code>
          {
            `constructor(props) {
  super(props);

  this.toggle = this.toggle.bind(this);
  this.state = {
    dropdownOpen: false
  };
}

toggle() {
  this.setState({
    dropdownOpen: !this.state.dropdownOpen
  });
}

render() {
  return (
    <Dropdown isOpen={this.state.dropdownOpen} toggle={this.toggle}>
      <DropdownToggle caret>
        Dropdown
      </DropdownToggle>
      <DropdownMenu>
        <DropdownItem header>Header</DropdownItem>
        <DropdownItem disabled>Action</DropdownItem>
        <DropdownItem>Another Action</DropdownItem>
        <DropdownItem divider />
        <DropdownItem>Another Action</DropdownItem>
      </DropdownMenu>
    </Dropdown>
  );
}`
          }
        </code>
        <br />
        <Dropdown isOpen={this.state.dropdownOpen} toggle={this.toggle}>
          <DropdownToggle caret>
              Dropdown
          </DropdownToggle>
          <DropdownMenu>
            <DropdownItem header>Header</DropdownItem>
            <DropdownItem disabled>Action</DropdownItem>
            <DropdownItem>Another Action</DropdownItem>
            <DropdownItem divider />
            <DropdownItem>Another Action</DropdownItem>
          </DropdownMenu>
        </Dropdown>
      </div>
    );
  }
}
