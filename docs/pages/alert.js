import React from 'react';

import { Alert } from '../../src/components';

export default class DocsPage extends React.Component {
  render() {
    return (
      <div>
        <h1>Alert</h1>
        <p>
          Attention-grabbing containers themed according to your settings.
        </p>
        <hr />
        <h4>Use</h4>
        <code>
          {
`// Import with local scoped class names (via CSS Modules)
import { Alert } from '@nio/ui-kit/lib';

<Alert color="success">
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
