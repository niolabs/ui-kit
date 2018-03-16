import React from 'react';

import { Button, Popover, PopoverTitle, PopoverContent, Code } from '@nio/ui-kit';

export default class DocsPage extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      popoverOpen: false,
    };
  }

  toggle() {
    this.setState({
      popoverOpen: !this.state.popoverOpen,
    });
  }

  render() {
    return (
      <div>
        <h1>Popovers</h1>
        <hr />
        <h4>Import</h4>
        <Code>
          {
            `// Import component (and relevant CSS)
import { Button, Popover, PopoverTitle, PopoverContent } from '@nio/ui-kit';`
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
    popoverOpen: false
  };
}

toggle() {
  this.setState({
    popoverOpen: !this.state.popoverOpen
  });
}

render() {
  return (
    <div>
      <Button id="Popover1" onClick={this.toggle}>
        Launch Popover
      </Button>
      <Popover placement="bottom" isOpen={this.state.popoverOpen} target="Popover1" toggle={this.toggle}>
        <PopoverTitle>Popover Title</PopoverTitle>
        <PopoverContent>Sed posuere consectetur est at lobortis. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum.</PopoverContent>
      </Popover>
    </div>
  );
}`
          }
        </Code>
        <br />
        <Button id="Popover1" onClick={this.toggle}>
          Launch Popover
        </Button>
        <Popover placement="bottom" isOpen={this.state.popoverOpen} target="Popover1" toggle={this.toggle}>
          <PopoverTitle>Popover Title</PopoverTitle>
          <PopoverContent>Sed posuere consectetur est at lobortis. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum.</PopoverContent>
        </Popover>
      </div>
    );
  }
}
