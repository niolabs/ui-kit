import React from 'react';
import { Alert, Code } from '../../src/index';

export default class DocsPage extends React.Component {
  render() {
    return (
      <div>
        <h1>Alerts</h1>
        <hr />
        <h4>Import</h4>
        <Code>
          {
            `// Import component (and relevant CSS)
import { Alert } from '@nio/ui-kit';`
          }
        </Code>
        <hr />
        <h4>Use</h4>
        <Code>
          {
            `<Alert color="success">
<strong>Well done!</strong> You successfully read this important alert message.
</Alert>`
          }
        </Code>
        <br />
        <Alert color="success">
          <strong>Well done!</strong> You successfully read this important alert message.
        </Alert>
      </div>
    );
  }
}
