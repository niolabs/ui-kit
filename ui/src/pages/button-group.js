import React from 'react';

import { Button, ButtonGroup, ButtonToolbar, Code } from '@nio/ui-kit';

export default class DocsPage extends React.Component {
  render() {
    return (
      <div>
        <h1>Button Group</h1>
        <hr />
        <h4>Import</h4>
        <Code>
          {
            `// Import component (and relevant CSS)
import { Button, ButtonGroup, ButtonToolbar } from '@nio/ui-kit';`
          }
        </Code>
        <hr />
        <h4>Use</h4>
        <Code>
          {
            `<ButtonGroup>
  <Button color="primary">Left</Button>
  <Button color="info">Middle</Button>
  <Button color="success">Right</Button>
</ButtonGroup>`
          }
        </Code>
        <br />
        <ButtonGroup>
          <Button color="primary">Left</Button>
          <Button color="info">Middle</Button>
          <Button color="success">Right</Button>
        </ButtonGroup>
        <hr />
        <h4>Button Toolbar</h4>
        <Code>
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
        </Code>
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
