import React from 'react';

import { RangeSlider, Code } from '../../src/index';

export default class DocsPage extends React.Component {
  constructor() {
    super();
    this.state = {
      limit: 50,
    };
  }

  render() {
    return (
      <div>
        <h1>Range Slider</h1>
        <hr />
        <h4>Import</h4>
        <Code>
          {
            `// Import component (and relevant CSS)
import { RangeSlider } from '@nio/ui-kit';`
          }
        </Code>
        <hr />
        <h4>Use</h4>
        <Code>
          {
            `<RangeSlider
  color={success | warning | danger | info}
  min={0}
  max={100}
  step={1}
  value={this.state.limit}
  tooltip={false}
  onChangeComplete={() => console.log(\`sending value: ${this.state.limit}\`)}
  onChange={value => this.setState({ limit: value })}
/>`
          }
        </Code>
        <br />
        <RangeSlider
          color="success"
          min={0}
          max={100}
          step={1}
          value={this.state.limit}
          tooltip={false}
          onChangeComplete={() => console.log(`sending value: ${this.state.limit}`)} // eslint-disable-line no-console
          onChange={value => this.setState({ limit: value })}
        />
        <br />
        <RangeSlider
          color="warning"
          min={0}
          max={100}
          step={1}
          value={this.state.limit}
          tooltip={false}
          onChangeComplete={() => console.log(`sending value: ${this.state.limit}`)} // eslint-disable-line no-console
          onChange={value => this.setState({ limit: value })}
        />
        <br />
        <RangeSlider
          color="danger"
          min={0}
          max={100}
          step={1}
          value={this.state.limit}
          tooltip={false}
          onChangeComplete={() => console.log(`sending value: ${this.state.limit}`)} // eslint-disable-line no-console
          onChange={value => this.setState({ limit: value })}
        />
        <br />
        <RangeSlider
          color="info"
          min={0}
          max={100}
          step={1}
          value={this.state.limit}
          tooltip={false}
          onChangeComplete={() => console.log(`sending value: ${this.state.limit}`)} // eslint-disable-line no-console
          onChange={value => this.setState({ limit: value })}
        />
      </div>
    );
  }
}
