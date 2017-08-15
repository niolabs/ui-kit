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
        <Button color="primary" className="mb-3">primary</Button>{' '}
        <Button color="secondary" className="mb-3">secondary</Button>{' '}
        <Button color="success" className="mb-3">success</Button>{' '}
        <Button color="info" className="mb-3">info</Button>{' '}
        <Button color="warning" className="mb-3">warning</Button>{' '}
        <Button color="danger" className="mb-3">danger</Button>{' '}
        <Button color="link" className="mb-3">link</Button>
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
        <Button outline color="primary" className="mb-3">primary</Button>{' '}
        <Button outline color="secondary" className="mb-3">secondary</Button>{' '}
        <Button outline color="success" className="mb-3">success</Button>{' '}
        <Button outline color="info" className="mb-3">info</Button>{' '}
        <Button outline color="warning" className="mb-3">warning</Button>{' '}
        <Button outline color="danger" className="mb-3">danger</Button>
        <br /><br />
        <div style={{ backgroundColor: '#333', padding: '1rem' }}>
          <Button outline color="primary" className="mb-3">primary</Button>{' '}
          <Button outline color="secondary" className="mb-3">secondary</Button>{' '}
          <Button outline color="success" className="mb-3">success</Button>{' '}
          <Button outline color="info" className="mb-3">info</Button>{' '}
          <Button outline color="warning" className="mb-3">warning</Button>{' '}
          <Button outline color="danger" className="mb-3">danger</Button>
        </div>
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
        <Button color="primary" size="sm" className="mb-3">Small Button</Button>{' '}
        <Button color="secondary" className="mb-3">Normal Button</Button>{' '}
        <Button color="success" size="lg" className="mb-3">Large Button</Button><hr />
        <h4>Disabled</h4>
        <code>
          {
            `<Button disabled color="primary" className="mb-3">primary</Button>{' '}
<Button disabled color="secondary" className="mb-3">secondary</Button>{' '}
<Button disabled color="success" className="mb-3">success</Button>{' '}
<Button disabled color="info" className="mb-3">info</Button>{' '}
<Button disabled color="warning" className="mb-3">warning</Button>{' '}
<Button disabled color="danger" className="mb-3">danger</Button>{' '}
<Button disabled color="link" className="mb-3">link</Button>

<Button disabled outline color="primary" className="mb-3">primary</Button>{' '}
<Button disabled outline color="secondary" className="mb-3">secondary</Button>{' '}
<Button disabled outline color="success" className="mb-3">success</Button>{' '}
<Button disabled outline color="info" className="mb-3">info</Button>{' '}
<Button disabled outline color="warning" className="mb-3">warning</Button>{' '}
<Button disabled outline color="danger" className="mb-3">danger</Button>`
          }
        </code>
        <br />
        <Button disabled color="primary" className="mb-3">primary</Button>{' '}
        <Button disabled color="secondary" className="mb-3">secondary</Button>{' '}
        <Button disabled color="success" className="mb-3">success</Button>{' '}
        <Button disabled color="info" className="mb-3">info</Button>{' '}
        <Button disabled color="warning" className="mb-3">warning</Button>{' '}
        <Button disabled color="danger" className="mb-3">danger</Button>{' '}
        <Button disabled color="link" className="mb-3">link</Button><br />
        <Button disabled outline color="primary" className="mb-3">primary</Button>{' '}
        <Button disabled outline color="secondary" className="mb-3">secondary</Button>{' '}
        <Button disabled outline color="success" className="mb-3">success</Button>{' '}
        <Button disabled outline color="info" className="mb-3">info</Button>{' '}
        <Button disabled outline color="warning" className="mb-3">warning</Button>{' '}
        <Button disabled outline color="danger" className="mb-3">danger</Button>
      </div>
    );
  }
}
