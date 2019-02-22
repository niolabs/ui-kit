import React from 'react';

import { Code, Chart } from '@nio/ui-kit';
import stringify from 'json-stringify-pretty-compact';


export default class DocsPage extends React.Component {
  state = { linedata: false, bardata: false, singleaxisdata: false };

  componentDidMount = () => {
    this.randomize();
    this.interval = setInterval(() => { this.randomize(); }, 3000);
  };

  componentWillUnmount = () => {
    clearInterval(this.interval);
  };

  randomData = () => Array.from({ length: 10 }, () => Math.floor(Math.random() * 100));

  replacer = (key, value) => {
    if (value === '}') {
      return `${value}\n`;
    }
    return value;
  };

  randomize = () => {
    const data1 = this.randomData();
    const data2 = this.randomData();
    const data3 = this.randomData();

    this.setState({
      linedata: {
        datasets: [
          { name: 'Some Data 1', chartType: 'line', values: data1 },
          { name: 'Some Data 2', chartType: 'line', values: data2 },
          { name: 'Some Data 3', chartType: 'line', values: data3 },
        ],
        labels: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10'],
      },
      bardata: {
        datasets: [
          { name: 'Some Data 1', chartType: 'bar', values: data1 },
          { name: 'Some Data 2', chartType: 'bar', values: data2 },
          { name: 'Some Data 3', chartType: 'bar', values: data3 },
        ],
        labels: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10'],
      },
      singleaxisdata: {
        datasets: [
          { name: 'Some Data 1', chartType: 'line', values: data1 },
        ],
        labels: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10'],
      },
    });
  };

  render = () => {
    const { linedata, bardata, singleaxisdata } = this.state;

    return linedata && bardata && singleaxisdata && (
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
  data={${stringify(bardata, { maxLength: 180 })}}
  barOptions={{
    spaceRatio: 2,
  }}
/>`}
        </Code>
        <hr />
        <Chart
          title="Bar Chart"
          type="bar"
          data={bardata}
          barOptions={{
            spaceRatio: 0.4,
          }}
        />
        <hr />
        <Code>
          {
            `<Chart
  data={${stringify(linedata, { maxLength: 180 })}}
  lineOptions={{
    heatline: 1,
    hideDots: 1,
    regionFill: 1,
  }}
/>`}
        </Code>
        <hr />
        <Chart
          title="Line Chart (area fill, fade, hide dots)"
          data={linedata}
          lineOptions={{
            heatline: 1,
            hideDots: 1,
            regionFill: 1,
          }}
        />
        <hr />
        <Code>
          {
            `<Chart
  data={${stringify(linedata, { maxLength: 180 })}}
  lineOptions={{
    hideLine: 1,
    dotSize: 8,
  }}
/>`}
        </Code>
        <hr />
        <Chart
          title="Line Chart (hide line - makes a scatter)"
          data={linedata}
          lineOptions={{
            hideLine: 1,
            dotSize: 8,
          }}
        />
        <hr />
        <Code>
          {
            `<Chart
  type="pie"
  data={${stringify(singleaxisdata, { maxLength: 180 })}}
/>`}
        </Code>
        <hr />
        <Chart
          title="Pie Chart"
          type="pie"
          data={singleaxisdata}
        />
        <hr />
        <Code>
          {
            `<Chart
  type="percentage"
  data={${stringify(singleaxisdata, { maxLength: 180 })}}
/>`}
        </Code>
        <hr />
        <Chart
          title="Percentage Chart"
          type="percentage"
          data={singleaxisdata}
        />
      </div>
    );
  };
}
