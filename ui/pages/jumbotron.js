import React from 'react';

import { Jumbotron, Button, Code } from '../../src/index';

export default class DocsPage extends React.Component {
  render() {
    return (
      <div>
        <h1>Jumbotron</h1>
        <hr />
        <h4>Import</h4>
        <Code>
          {
            `// Import component (and relevant CSS)
import { Jumbotron, Button } from '@nio/ui-kit';`
          }
        </Code>
        <hr />
        <h4>Use</h4>
        <Code>
          {
            `<Jumbotron>
  <h1 className="display-3">Hello, world!</h1>
  <p className="lead">This is a simple hero unit, a simple Jumbotron-style component for calling extra attention to featured content or information.</p>
  <hr className="my-2" />
  <p>It uses utility classes for typgraphy and spacing to space content out within the larger container.</p>
  <p className="lead">
    <Button color="primary">Learn More</Button>
  </p>
</Jumbotron>`
          }
        </Code>
        <br />
        <Jumbotron>
          <h1 className="display-3">Hello, world!</h1>
          <p className="lead">This is a simple hero unit, a simple Jumbotron-style component for calling extra attention to featured content or information.</p>
          <hr className="my-2" />
          <p>It uses utility classes for typgraphy and spacing to space content out within the larger container.</p>
          <p className="lead">
            <Button color="primary">Learn More</Button>
          </p>
        </Jumbotron>
      </div>
    );
  }
}
