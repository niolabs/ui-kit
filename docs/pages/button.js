import React from 'react';

import { Button, ButtonGroup } from '../../src/components';

export default class DocsPage extends React.Component {
  render() {
    return (
      <div>
        <h1>Breadcrumb</h1>
        <p>
          Keeping track of your location, making life easy.
        </p>
        <hr />
        <h4>Use</h4>
        <code>
          {
`// Import with local scoped class names (via CSS Modules)
import { Button, ButtonGroup } from '@nio/ui-kit/lib';

<Button color="primary">primary</Button>{' '}
<Button color="secondary">secondary</Button>{' '}
<Button color="success">success</Button>{' '}
<Button color="info">info</Button>{' '}
<Button color="warning">warning</Button>{' '}
<Button color="danger">danger</Button>{' '}
<Button color="link">link</Button>

<Button outline color="primary">primary</Button>{' '}
<Button outline color="secondary">secondary</Button>{' '}
<Button outline color="success">success</Button>{' '}
<Button outline color="info">info</Button>{' '}
<Button outline color="warning">warning</Button>{' '}
<Button outline color="danger">danger</Button>

<Button color="primary" size="sm">Small Button</Button>{' '}
<Button color="secondary" size="sm">Small Button</Button>

<Button color="primary" size="lg" block>Block level button</Button>
<Button color="secondary" size="lg" block>Block level button</Button>

<ButtonGroup>
  <Button color="primary">Left</Button>
  <Button color="info">Middle</Button>
  <Button color="success">Right</Button>
</ButtonGroup>`
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
        <Button outline color="primary">primary</Button>{' '}
        <Button outline color="secondary">secondary</Button>{' '}
        <Button outline color="success">success</Button>{' '}
        <Button outline color="info">info</Button>{' '}
        <Button outline color="warning">warning</Button>{' '}
        <Button outline color="danger">danger</Button>{' '}
        <hr />
        <Button color="primary" size="sm">Small Button</Button>{' '}
        <Button color="secondary" size="sm">Small Button</Button>
        <hr />
        <Button color="primary" size="lg" block>Block level button</Button>
        <Button color="secondary" size="lg" block>Block level button</Button>
        <hr />
        <ButtonGroup>
          <Button color="primary">Left</Button>
          <Button color="info">Middle</Button>
          <Button color="success">Right</Button>
        </ButtonGroup>
      </div>
    );
  }
}
