import React from 'react';

import { ButtonDropdown, DropdownToggle, DropdownMenu, DropdownItem, Code } from '@nio/ui-kit';

export default class DocsPage extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      dropdownOpen: false,
    };
  }

  toggle() {
    const { dropdownOpen } = this.state;

    this.setState({
      dropdownOpen: !dropdownOpen,
    });
  }

  render() {
    return (
      <div>
        <h1>Button Dropdown</h1>
        <hr />
        <h4>Import</h4>
        <Code>
          {
            `// Import component (and relevant CSS)
import { ButtonDropdown, DropdownToggle, DropdownMenu, DropdownItem } from '@nio/ui-kit';`
          }
        </Code>
        <hr />
        <h4>Use</h4>
        <Code>
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
    <ButtonDropdown isOpen={this.state.dropdownOpen} toggle={this.toggle}>
      <DropdownToggle caret>
        Button Dropdown
      </DropdownToggle>
      <DropdownMenu>
        <DropdownItem header>Header</DropdownItem>
        <DropdownItem disabled>Action</DropdownItem>
        <DropdownItem>Another Action</DropdownItem>
        <DropdownItem divider />
        <DropdownItem>Another Action</DropdownItem>
      </DropdownMenu>
    </ButtonDropdown>
  );
}`
          }
        </Code>
        <br />
        <ButtonDropdown isOpen={this.state.dropdownOpen} toggle={this.toggle}>
          <DropdownToggle caret>
            Button Dropdown
          </DropdownToggle>
          <DropdownMenu>
            <DropdownItem header>Header</DropdownItem>
            <DropdownItem disabled>Action</DropdownItem>
            <DropdownItem>Another Action</DropdownItem>
            <DropdownItem divider />
            <DropdownItem>Another Action</DropdownItem>
          </DropdownMenu>
        </ButtonDropdown>
      </div>
    );
  }
}
