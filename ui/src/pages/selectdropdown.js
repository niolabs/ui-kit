import React from 'react';
import { SelectDropdown, Label, FormGroup, FormFeedback, Code } from '@nio/ui-kit';
import stringify from 'json-stringify-pretty-compact';

export default class DocsPage extends React.Component {
  constructor(props) {
    super(props);
    this.options = [
      { label: 'Option 1', value: 'Option 1' },
      { label: 'Option 2', value: 'Option 2' },
      { label: 'Option 3', value: 'Option 3' },
      { label: 'Option 4', value: 'Option 4' },
      { label: 'Option 5', value: 'Option 5' },
    ];

    const fns = ['handleChange'];
    fns.forEach((fn) => { this[fn] = this[fn].bind(this); });
  }

  handleChange(e) {
    console.log(e); // eslint-disable-line no-console
  }

  render() {
    return (
      <div>
        <h1>SelectDropdown</h1>
        <hr />
        <h4>Import</h4>
        <Code>
          {
            `// Import component (and relevant CSS)
import { SelectDropdown } from '@nio/ui-kit';`
          }
        </Code>
        <hr />
        <h4>Use</h4>
        <Code>
          {
            `<FormGroup>
  <Label>choose an item</Label>
  <SelectDropdown
    onChange={this.handleChange}
    options={${stringify(this.options)}}
  />
  <FormFeedback>This field is required</FormFeedback>
</FormGroup>`
          }
        </Code>
        <br />
        <FormGroup>
          <Label>choose an item</Label>
          <SelectDropdown
            onChange={this.handleChange}
            options={this.options}
          />
          <FormFeedback>This field is required</FormFeedback>
        </FormGroup>
        <hr />
        <h4>Default Value</h4>
        <Code>
          {
            `<FormGroup>
  <Label>choose an item</Label>
  <SelectDropdown
    onChange={this.handleChange}
    options={${stringify(this.options, { maxLength: 180 })}}
    defaultValue={${stringify(this.options[0], { maxLength: 180 })}}
  />
  <FormFeedback>This field is required</FormFeedback>
</FormGroup>`
          }
        </Code>
        <br />
        <FormGroup>
          <Label>choose an item</Label>
          <SelectDropdown
            onChange={this.handleChange}
            options={this.options}
            defaultValue={this.options[0]}
          />
          <FormFeedback>This field is required</FormFeedback>
        </FormGroup>
      </div>
    );
  }
}
