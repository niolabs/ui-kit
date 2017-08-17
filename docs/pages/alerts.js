import React from 'react';

import { Alert } from '../../src/index';

export default class DocsPage extends React.Component {
  render() {
    return (
      <div>
        <h1>Alerts</h1>
        <hr />
        <h4>Import</h4>
        <code>
          {
            `// Import component (and relevant CSS)
import { Alert } from '@nio/ui-kit';`
          }
        </code>
        <hr />
        <h4>Use</h4>
        <code>
          {
            `<Alert color="success">
<strong>Well done!</strong> You successfully read this important alert message.
</Alert>`
          }
        </code>
        <br />
        <Alert color="success">
          <strong>Well done!</strong> You successfully read this important alert message.
        </Alert>
      </div>
    );
  }
}
