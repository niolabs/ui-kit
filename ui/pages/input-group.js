import React from 'react';

import { InputGroup, InputGroupAddon, Input, Code } from '@nio/ui-kit';

export default class DocsPage extends React.Component {
  render() {
    return (
      <div>
        <h1>Input Group</h1>
        <hr />
        <h4>Import</h4>
        <Code>
          {
            `// Import component (and relevant CSS)
import { InputGroup, InputGroupAddon, Input } from '@nio/ui-kit';`
          }
        </Code>
        <hr />
        <h4>Use</h4>
        <Code>
          {
            `<InputGroup>
  <InputGroupAddon>@</InputGroupAddon>
  <Input placeholder="username" />
</InputGroup>
<br />
<InputGroup>
  <InputGroupAddon>
    <Input addon type="checkbox" aria-label="Checkbox for following text input" />
  </InputGroupAddon>
  <Input placeholder="Check it out" />
</InputGroup>
<br />
<InputGroup>
  <Input placeholder="username" />
  <InputGroupAddon>@example.com</InputGroupAddon>
</InputGroup>
<br />
<InputGroup>
  <InputGroupAddon>$</InputGroupAddon>
  <InputGroupAddon>$</InputGroupAddon>
  <Input placeholder="Dolla dolla billz yo!" />
  <InputGroupAddon>$</InputGroupAddon>
  <InputGroupAddon>$</InputGroupAddon>
</InputGroup>
<br />
<InputGroup>
  <InputGroupAddon>$</InputGroupAddon>
  <Input placeholder="Amount" type="number" step="1" />
  <InputGroupAddon>.00</InputGroupAddon>
</InputGroup>`
          }
        </Code>
        <br />
        <InputGroup>
          <InputGroupAddon>@</InputGroupAddon>
          <Input placeholder="username" />
        </InputGroup>
        <br />
        <InputGroup>
          <InputGroupAddon>
            <Input addon type="checkbox" aria-label="Checkbox for following text input" />
          </InputGroupAddon>
          <Input placeholder="Check it out" />
        </InputGroup>
        <br />
        <InputGroup>
          <Input placeholder="username" />
          <InputGroupAddon>@example.com</InputGroupAddon>
        </InputGroup>
        <br />
        <InputGroup>
          <InputGroupAddon>$</InputGroupAddon>
          <InputGroupAddon>$</InputGroupAddon>
          <Input placeholder="Dolla dolla billz yo!" />
          <InputGroupAddon>$</InputGroupAddon>
          <InputGroupAddon>$</InputGroupAddon>
        </InputGroup>
        <br />
        <InputGroup>
          <InputGroupAddon>$</InputGroupAddon>
          <Input placeholder="Amount" type="number" step="1" />
          <InputGroupAddon>.00</InputGroupAddon>
        </InputGroup>
      </div>
    );
  }
}
