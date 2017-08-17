import React from 'react';

import { Tooltip, UncontrolledTooltip } from '../../src/index';

export default class DocsPage extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      tooltipOpen: false,
    };
  }

  toggle() {
    this.setState({
      tooltipOpen: !this.state.tooltipOpen,
    });
  }

  render() {
    return (
      <div>
        <h1>Tooltips</h1>
        <hr />
        <h4>Import</h4>
        <code>
          {
            `// Import component (and relevant CSS)
import { Tooltip, UncontrolledTooltip } from '../../src/index';`
          }
        </code>
        <hr />
        <h4>Use</h4>
        <code>
          {
            `<p>Somewhere in here is a <a href="#" id="TooltipExample">tooltip</a>.</p>
<Tooltip placement="right" isOpen={this.state.tooltipOpen} target="TooltipExample" toggle={this.toggle}>
  Hello world!
</Tooltip>`
          }
        </code>
        <br />
        <p>Somewhere in here is a <a href="#" id="TooltipExample">tooltip</a>.</p>
        <Tooltip placement="right" isOpen={this.state.tooltipOpen} target="TooltipExample" toggle={this.toggle}>
          Hello world!
        </Tooltip>
        <hr />
        <h4>Uncontrolled Tooltip</h4>
        <code>
          {
            `<p>Somewhere in here is a <a href="#" id="UncontrolledTooltipExample">tooltip</a>.</p>
<UncontrolledTooltip placement="right" target="UncontrolledTooltipExample">
  Hello world!
</UncontrolledTooltip>`
          }
        </code>
        <br />
        <p>Somewhere in here is a <a href="#" id="UncontrolledTooltipExample">tooltip</a>.</p>
        <UncontrolledTooltip placement="right" target="UncontrolledTooltipExample">
          Hello world!
        </UncontrolledTooltip>
      </div>
    );
  }
}
