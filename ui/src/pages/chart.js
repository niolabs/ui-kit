import React from 'react';

import { Code, Chart } from '@nio/ui-kit';
import stringify from 'json-stringify-pretty-compact';

export default class DocsPage extends React.Component {
  state = {
    linedata: false,
    columndata: false,
    bardata: false,
    bubbledata: false,
    piedata: false,
    radardata: false,
    scatterdata: false,
    xAxis: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
  };

  componentDidMount = () => {
    this.randomize();
    this.interval = setInterval(() => { this.randomize(); }, 10000);
  };

  componentWillUnmount = () => {
    clearInterval(this.interval);
  };

  randomData = () => Array.from({ length: 12 }, () => Math.floor(Math.random() * 100));

  generateBubbleData = () => {
    const series = [];
    const count = 10;
    const yrange = { min: 0, max: 60 };
    for (let i = 0; i < count; i += 1) {
      const x = Math.floor(Math.random() * (100 - 1 + 1)) + 1;
      const y = Math.floor(Math.random() * (yrange.max - yrange.min + 1)) + yrange.min;
      const z = Math.floor(Math.random() * (75 - 15 + 1)) + 15;
      series.push([x, y, z]);
    }
    return series;
  };

  generateScatterData = () => {
    const series = [];
    const count = 10;
    const yrange = { min: 0, max: 60 };
    for (let i = 0; i < count; i += 1) {
      const x = Math.floor(Math.random() * (100 - 1 + 1)) + 1;
      const y = Math.floor(Math.random() * (yrange.max - yrange.min + 1)) + yrange.min;
      series.push([x, y]);
    }
    return series;
  };

  generatePieData = () => {
    let sum = 0;
    let i = 1;
    const resultArray = [];
    const labelArray = [];
    while (sum < 100) {
      const newValue = Math.floor(Math.random() * 100);
      resultArray.push(newValue);
      labelArray.push(`item ${i}`);
      i += 1;
      sum += newValue;
    }
    const lastValue = resultArray[resultArray.length - 1];
    resultArray[resultArray.length - 1] = lastValue - (sum - 100);
    return {
      options: {
        labels: labelArray,
      },
      series: resultArray,
    };
  };


  randomize = () => {
    const { xAxis } = this.state;
    const data1 = this.randomData();
    const data2 = this.randomData();
    const data3 = this.randomData();

    this.setState({
      linedata: {
        options: {
          xaxis: {
            categories: xAxis,
          },
        },
        series: [
          { name: 'desktops', data: data1 },
          { name: 'laptops', data: data2 },
          { name: 'mobile', data: data3 },
        ],
      },
      columndata: {
        options: {
          plotOptions: {
            bar: {
              horizontal: true,
            },
          },
          dataLabels: {
            enabled: false,
          },
          xaxis: {
            categories: xAxis,
          },
        },
        series: [
          { name: 'desktops', data: data1 },
          { name: 'laptops', data: data2 },
          { name: 'mobile', data: data3 },
        ],
      },
      bardata: {
        options: {
          xaxis: {
            categories: xAxis,
          },
          dataLabels: {
            enabled: false,
          },
        },
        series: [
          { name: 'desktops', data: data1 },
          { name: 'laptops', data: data2 },
          { name: 'mobile', data: data3 },
        ],
      },
      radardata: {
        options: {
          xaxis: {
            categories: xAxis,
          },
        },
        series: [
          { name: 'desktops', data: data1 },
          { name: 'laptops', data: data2 },
          { name: 'mobile', data: data3 },
        ],
      },
      bubbledata: {
        options: {
          dataLabels: {
            enabled: false,
          },
          yaxis: {
            max: 70,
          },
        },
        series: [
          {
            name: 'desktops',
            data: this.generateBubbleData(),
          },
          {
            name: 'laptops',
            data: this.generateBubbleData(),
          },
          {
            name: 'mobile',
            data: this.generateBubbleData(),
          },
        ],
      },
      scatterdata: {
        options: {
          dataLabels: {
            enabled: false,
          },
          yaxis: {
            max: 70,
          },
          xaxis: {
            tickAmount: 10,
            labels: {
              formatter: val => parseFloat(val).toFixed(1),
            },
          },
        },
        series: [
          {
            name: 'desktops',
            data: this.generateScatterData(),
          },
          {
            name: 'laptops',
            data: this.generateScatterData(),
          },
          {
            name: 'mobile',
            data: this.generateScatterData(),
          },
        ],
      },
      piedata: this.generatePieData(),
    });
  };

  render = () => {
    const { linedata, bardata, columndata, bubbledata, piedata, radardata, scatterdata } = this.state;

    return linedata && bardata && bubbledata && piedata && (
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
  type="bar"
  options={${stringify(bardata.options, { maxLength: 180 })}}
  series={${stringify(bardata.series, { maxLength: 180 })}}
/>`}
        </Code>
        <hr />
        <Chart
          type="bar"
          options={bardata.options}
          series={bardata.series}
        />
        <hr />
        <Code>
          {
            `<Chart
  type="bar"
  options={${stringify(columndata.options, { maxLength: 180 })}}
  series={${stringify(columndata.series, { maxLength: 180 })}}
/>`}
        </Code>
        <hr />
        <Chart
          type="bar"
          options={columndata.options}
          series={columndata.series}
        />
        <hr />
        <Code>
          {
            `<Chart
  type="line"
  options={${stringify(linedata.options, { maxLength: 180 })}}
  series={${stringify(linedata.series, { maxLength: 180 })}}
/>`}
        </Code>
        <hr />
        <Chart
          type="line"
          options={linedata.options}
          series={linedata.series}
        />
        <hr />
        <Code>
          {
            `<Chart
  type="area"
  options={${stringify(linedata.options, { maxLength: 180 })}}
  series={${stringify(linedata.series, { maxLength: 180 })}}
/>`}
        </Code>
        <hr />
        <Chart
          type="area"
          options={linedata.options}
          series={linedata.series}
        />
        <hr />
        <Code>
          {
            `<Chart
  type="bubble"
  options={${stringify(bubbledata.options, { maxLength: 180 })}}
  series={${stringify(bubbledata.series, { maxLength: 180 })}}
/>`}
        </Code>
        <hr />
        <Chart
          type="bubble"
          options={bubbledata.options}
          series={bubbledata.series}
        />
        <hr />
        <Code>
          {
            `<Chart
  type="scatter"
  options={${stringify(scatterdata.options, { maxLength: 180 })}}
  series={${stringify(scatterdata.series, { maxLength: 180 })}}
/>`}
        </Code>
        <hr />
        <Chart
          type="scatter"
          options={scatterdata.options}
          series={scatterdata.series}
        />
        <hr />
        <Code>
          {
            `<Chart
  type="pie"
  options={${stringify(piedata.options, { maxLength: 180 })}}
  series={${stringify(piedata.series, { maxLength: 180 })}}
/>`}
        </Code>
        <hr />
        <Chart
          type="pie"
          options={piedata.options}
          series={piedata.series}
        />
        <hr />
        <Code>
          {
            `<Chart
  type="donut"
  options={${stringify(piedata.options, { maxLength: 180 })}}
  series={${stringify(piedata.series, { maxLength: 180 })}}
/>`}
        </Code>
        <hr />
        <Chart
          type="donut"
          options={piedata.options}
          series={piedata.series}
        />
        <hr />
        <Code>
          {
            `<Chart
  type="radar"
  options={${stringify(radardata.options, { maxLength: 180 })}}
  series={${stringify(radardata.series, { maxLength: 180 })}}
/>`}
        </Code>
        <hr />
        <Chart
          type="radar"
          options={radardata.options}
          series={radardata.series}
        />
      </div>
    );
  };
}
