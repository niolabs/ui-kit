import React from 'react';

import { Button } from '../../src/index';

export default class DocsPage extends React.Component {
  render() {
    return (
      <div>
        <h1>Buttons</h1>
        <hr />
        <h4>Import</h4>
        <code>
          {
            `// Import with local scoped class names (via CSS Modules)
import { Button, ButtonGroup, ButtonToolbar } from '@nio/ui-kit';`
          }
        </code>
        <hr />
        <h4>Use</h4>
        <code>
          {
            `<Button color="primary">primary</Button>{' '}
<Button color="secondary">secondary</Button>{' '}
<Button color="success">success</Button>{' '}
<Button color="info">info</Button>{' '}
<Button color="warning">warning</Button>{' '}
<Button color="danger">danger</Button>{' '}
<Button color="link">link</Button>`
          }
        </code>
        <br />
        <Button color="primary">primary</Button>{' '}
        <Button color="secondary">secondary</Button>{' '}
        <Button color="success">success</Button>{' '}
        <Button color="info">info</Button>{' '}
        <Button color="warning">warning</Button>{' '}
        <Button color="danger">danger</Button>{' '}
        <Button color="link">link</Button>
        <hr />
        <h4>Outline</h4>
        <code>
          {
            `<Button outline color="primary">primary</Button>{' '}
<Button outline color="secondary">secondary</Button>{' '}
<Button outline color="success">success</Button>{' '}
<Button outline color="info">info</Button>{' '}
<Button outline color="warning">warning</Button>{' '}
<Button outline color="danger">danger</Button>`
          }
        </code>
        <br />
        <Button outline color="primary">primary</Button>{' '}
        <Button outline color="secondary">secondary</Button>{' '}
        <Button outline color="success">success</Button>{' '}
        <Button outline color="info">info</Button>{' '}
        <Button outline color="warning">warning</Button>{' '}
        <Button outline color="danger">danger</Button>
        <hr />
        <h4>Sizing</h4>
        <code>
          {
            `<Button color="primary" size="sm">Small Button</Button>{' '}
<Button color="secondary">Normal Button</Button>{' '}
<Button color="success" size="lg">Large Button</Button>`
          }
        </code>
        <br />
        <Button color="primary" size="sm">Small Button</Button>{' '}
        <Button color="secondary">Normal Button</Button>{' '}
        <Button color="success" size="lg">Large Button</Button>
      </div>
    );
  }
}
