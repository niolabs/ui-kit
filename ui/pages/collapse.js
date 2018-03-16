import React from 'react';

import { Collapse, Card, CardBody, Button, Code } from '../../dist/index';

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
        <Code>
          {
            `// Import component (and relevant CSS)
import { Collapse, Card, CardBody, Button } from '@nio/ui-kit';`
          }
        </Code>
        <hr />
        <h4>Use</h4>
        <Code>
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
          <CardBody className="p-3">
          Anim pariatur cliche reprehenderit,
          enim eiusmod high life accusamus terry richardson ad squid. Nihil
          anim keffiyeh helvetica, craft beer labore wes anderson cred
          nesciunt sapiente ea proident.
          </CardBody>
        </Card>
      </Collapse>
    </div>
  );
}`
          }
        </Code>
        <br />
        <Button color="primary" className="mb-3" onClick={this.toggle}>Toggle</Button>
        <Collapse isOpen={this.state.collapse}>
          <Card>
            <CardBody className="p-3">
              Anim pariatur cliche reprehenderit,
              enim eiusmod high life accusamus terry richardson ad squid. Nihil
              anim keffiyeh helvetica, craft beer labore wes anderson cred
              nesciunt sapiente ea proident.
            </CardBody>
          </Card>
        </Collapse>
      </div>
    );
  }
}
