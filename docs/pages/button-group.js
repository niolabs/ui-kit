import React from 'react';

import { Button, ButtonGroup, ButtonToolbar } from '../../src/index';

export default class DocsPage extends React.Component {
  render() {
    return (
      <div>
        <h1>Button Group</h1>
        <hr />
        <h4>Import</h4>
        <code>
          {
            `// Import with local scoped class names (via CSS Modules)
import { ButtonGroup, ButtonToolbar } from '@nio/ui-kit';`
          }
        </code>
        <hr />
        <h4>Use</h4>
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
