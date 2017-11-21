import React from 'react';

import { Code, Chart } from '../../src/index';

const randomData = () => Array.from({ length: 10 }, () => Math.floor(Math.random() * 100));

export default class DocsPage extends React.Component {
  constructor(props) {
    super(props);
    this.randomize = this.randomize.bind(this);
    this.state = { datasets: [{ values: randomData() }, { values: randomData() }, { values: randomData() }], labels: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10'] };
  }

  componentDidMount() {
    this.interval = setInterval(() => { this.randomize(); }, 3000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  randomize() {
    this.setState({ datasets: [{ values: randomData() }, { values: randomData() }, { values: randomData() }] });
  }

  render() {
    const { datasets, labels } = this.state;

    return (
      <div>
        <h1>Chart</h1>
        <hr />
        <h4>Import</h4>
        <Code>
          {
            `// Import component (and relevant CSS)
import { Chart } from '@nio/ui-kit';`
          }
        </Code>
        <hr />
        <h4>Use</h4>
        <Code>
          {
            `<Chart
  title="Bar Chart"
  type="bar"
  data={${JSON.stringify({ labels, datasets })}}
/>`}
        </Code>
        <hr />
        <Chart
          title="Bar Chart"
          type="bar"
          data={{ labels, datasets }}
        />
        <hr />
        <Code>
          {
            `<Chart
  title="Line Chart (heatline, regionfill)"
  type="line"
  data={${JSON.stringify({ labels, datasets })}}
  show_dots={false}
  heatline
  region_fill
/>`}
        </Code>
        <hr />
        <Chart
          title="Line Chart (heatline, regionfill)"
          type="line"
          data={{ labels, datasets }}
          show_dots={false}
          heatline
          region_fill
        />
        <hr />
        <Code>
          {
            `<Chart
  title="Line Chart (no heatline, show_dots)"
  type="line"
  data={${JSON.stringify({ labels, datasets })}}
  show_dots
/>`}
        </Code>
        <hr />
        <Chart
          title="Line Chart (no heatline, show_dots)"
          type="line"
          data={{ labels, datasets }}
          show_dots
        />
        <hr />
        <Code>
          {
            `<Chart
  title="Pie Chart (only shows legend for first 6 data values objects)"
  type="pie"
  data={${JSON.stringify({ labels, datasets: [datasets[0]] })}}
/>`}
        </Code>
        <hr />
        <Chart
          title="Pie Chart"
          type="pie"
          data={{ labels, datasets: [datasets[0]] }}
        />
        <hr />
        <Code>
          {
            `<Chart
  title="Scatter Chart (requires minimum 3 values objects)"
  type="scatter"
  data={${JSON.stringify({ labels, datasets })}}
/>`}
        </Code>
        <hr />
        <Chart
          title="Scatter Chart (requires minimum 3 values objects)"
          type="scatter"
          data={{ labels, datasets }}
        />
        <hr />
        <Code>
          {
            `<Chart
  title="Percentage Chart (1 values object)"
  type="percentage"
  data={${JSON.stringify({ labels, datasets: [datasets[0]] })}}
/>`}
        </Code>
        <hr />
        <Chart
          title="Percentage Chart (1 values object)"
          type="percentage"
          data={{ labels, datasets: [datasets[0]] }}
        />
      </div>
    );
  }
}
