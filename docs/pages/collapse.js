import React from 'react';

import { Collapse, Card, CardBlock, Button } from '../../src/index';

export default class DocsPage extends React.Component {
  constructor(props) {
    super(props);
    this.toggle = this.toggle.bind(this);
    this.state = { collapse: false };
  }

  toggle() {
    this.setState({ collapse: !this.state.collapse });
  }

  render() {
    return (
      <div>
        <h1>Collapse</h1>
        <hr />
        <h4>Import</h4>
        <code>
          {
            `// Import with local scoped class names (via CSS Modules)
import { Collapse, Card, CardBlock, Button } from '@nio/ui-kit';`
          }
        </code>
        <hr />
        <h4>Use</h4>
        <code>
          {
            `constructor(props) {
  super(props);
  this.toggle = this.toggle.bind(this);
  this.state = { collapse: false };
}

toggle() {
  this.setState({ collapse: !this.state.collapse });
}

render() {
  return (
    <div>
      <Button color="primary" className="mb-3" onClick={this.toggle}>Toggle</Button>
      <br />
      <Collapse isOpen={this.state.collapse}>
        <Card>
          <CardBlock>
          Anim pariatur cliche reprehenderit,
          enim eiusmod high life accusamus terry richardson ad squid. Nihil
          anim keffiyeh helvetica, craft beer labore wes anderson cred
          nesciunt sapiente ea proident.
          </CardBlock>
        </Card>
      </Collapse>
    </div>
  );
}`
          }
        </code>
        <br />
        <Button color="primary" className="mb-3" onClick={this.toggle}>Toggle</Button>
        <Collapse isOpen={this.state.collapse}>
          <Card>
            <CardBlock>
              Anim pariatur cliche reprehenderit,
              enim eiusmod high life accusamus terry richardson ad squid. Nihil
              anim keffiyeh helvetica, craft beer labore wes anderson cred
              nesciunt sapiente ea proident.
            </CardBlock>
          </Card>
        </Collapse>
      </div>
    );
  }
}