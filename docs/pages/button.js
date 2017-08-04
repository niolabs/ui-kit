import React from 'react';

import { Button, ButtonGroup, ButtonToolbar } from '../../src/index';

export default class DocsPage extends React.Component {
  render() {
    return (
      <div>
        <h1>Breadcrumb</h1>
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
        <hr />
        <h4>Button Group</h4>
        <code>
          {
            `<ButtonGroup>
  <Button color="primary">Left</Button>
  <Button color="info">Middle</Button>
  <Button color="success">Right</Button>
</ButtonGroup>`
          }
        </code>
        <br />
        <ButtonGroup>
          <Button color="primary">Left</Button>
          <Button color="info">Middle</Button>
          <Button color="success">Right</Button>
        </ButtonGroup>
        <hr />
        <h4>Button Toolbar</h4>
        <code>
          {
            `<ButtonToolbar>
  <ButtonGroup>
    <Button>1</Button>
    <Button>2</Button>
    <Button>3</Button>
    <Button>4</Button>
  </ButtonGroup>
  <ButtonGroup>
    <Button>5</Button>
    <Button>6</Button>
    <Button>7</Button>
  </ButtonGroup>
  <Button>8</Button>
</ButtonToolbar>`
          }
        </code>
        <br />
        <ButtonToolbar>
          <ButtonGroup>
            <Button>1</Button>
            <Button>2</Button>
            <Button>3</Button>
            <Button>4</Button>
          </ButtonGroup>
          <ButtonGroup>
            <Button>5</Button>
            <Button>6</Button>
            <Button>7</Button>
          </ButtonGroup>
          <Button>8</Button>
        </ButtonToolbar>
      </div>
    );
  }
}
