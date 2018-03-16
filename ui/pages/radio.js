import React from 'react';

import { Radio, Code } from '@nio/ui-kit';

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
    this.state = {
      defaultValue: this.options[0],
      value: null,
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    this.setState({ value: e });
  }

  render() {
    return (
      <div>
        <h1>Radio</h1>
        <hr />
        <h4>Import</h4>
        <Code>
          {
            `// Import component (and relevant CSS)
import { Radio } from '@nio/ui-kit';`
          }
        </Code>
        <hr />
        <h4>Use</h4>
        <Code>
          {
            `constructor(props) {
  super(props);
  this.options = [
    { label: 'Option 1', value: 'Option 1' },
    { label: 'Option 2', value: 'Option 2' },
    { label: 'Option 3', value: 'Option 3' },
    { label: 'Option 4', value: 'Option 4' },
    { label: 'Option 5', value: 'Option 5' },
  ];
  this.state = {
    defaultValue: this.options[0],
    value: null,
  };
  this.handleChange = this.handleChange.bind(this);
}

handleChange(e) {
  this.setState({ value: e });
}

render() {
  return (<Radio name="Possible Options" onChange={this.handleChange} options={this.options} defaultValue={this.state.defaultValue} />);
}`
          }
        </Code>
        <br />
        <Radio name="Possible Options" onChange={this.handleChange} options={this.options} defaultValue={this.state.defaultValue} /><br />
        Current Value: {JSON.stringify(this.state.value)}
      </div>
    );
  }
}

