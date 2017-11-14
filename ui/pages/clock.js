import React from 'react';

import { Code, Clock } from '../../src/index';

export default class DocsPage extends React.Component {
  constructor() {
    super();
    this.state = { date: new Date() };
  }

  componentDidMount() {
    setInterval(() => this.setState({ date: new Date() }), 1000);
  }

  render() {
    const { date } = this.state;

    return (
      <div>
        <h1>Clock</h1>
        <hr />
        <h4>Import</h4>
        <Code>
          {
            `// Import component (and relevant CSS)
import { Clock } from '@nio/ui-kit';`
          }
        </Code>
        <hr />
        <h4>Use</h4>
        <Code>
          {
            '<Clock value={new Date()} />'
          }
        </Code>
        <hr />
        {date.toLocaleString()}
        <hr />
        <Clock value={date} />
      </div>
    );
  }
}
