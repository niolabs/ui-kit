import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import * as d3 from 'd3';
import { debounce } from 'lodash';

export default class BarGraph extends React.Component {
  constructor() {
    super();
    this.state = { parentWidth: 600 };
    this.updateDimensions = debounce(this.updateDimensions.bind(this), 250);
  }

  componentDidMount() {
    window.addEventListener('resize', this.updateDimensions);
    this.updateDimensions();
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.updateDimensions);
  }

  updateDimensions() {
    if (this.props.width) {
      this.setState({ parentWidth: this.props.width });
    } else {
      /* eslint-disable react/no-find-dom-node */
      /* eslint-disable react/no-did-mount-set-state */
      this.setState({ parentWidth: ReactDOM.findDOMNode(this).parentNode.clientWidth });
    }
  }

  render() {
    const { data, width, height = 225 } = this.props;

    const calculatedWidth = width || this.state.parentWidth;

    const sortedData = data && data.sort((a, b) => d3.ascending(a.label, b.label));
    const numberOfBars = sortedData && sortedData.length;
    const margin = { top: 10, bottom: 20, left: 0, right: 40 };
    const chartHeight = height - margin.top - margin.bottom;
    const chartWidth = calculatedWidth - margin.left - margin.right;

    // find the extent of the data
    const valueExtent = d3.extent(data, d => d.value);
    const borderRadius = 4;

    // set up the scale functions using D3
    const fontScale = d3.scaleLinear()
      .domain([0, 15])
      .range([0.8, 0.6]);

    const labelScale = d3.scaleLinear()
      .domain([0, 15])
      .range([1.2, 0.6]);

    const xScale = d3.scaleBand()
      .domain(sortedData.map(d => d.label))
      .range([0, chartWidth])
      .paddingInner(fontScale(numberOfBars))
      .paddingOuter(0.2);

    const yScale = d3.scaleLinear()
      .domain([0, valueExtent[1] + (valueExtent[1] * 0.1)])
      .range([chartHeight, 0]);

    const yTicks = yScale.ticks(4);

    return (
      <svg
        viewBox={`0,0,${calculatedWidth},${height}`}
        preserveAspectRatio="xMidYMin slice"
        style={{ width: '100%', paddingBottom: '40%', height: '1px', overflow: 'visible' }}
      >
        <g transform={`translate(${margin.left}, ${margin.top})`}>
          {sortedData.map(d => (
            <g key={`bar-${d.label}`}>
              <rect x={xScale(d.label)} y={0} width={xScale.bandwidth()} height={chartHeight} fill="#E6E9EE" rx={borderRadius} ry={borderRadius} />
              <rect x={xScale(d.label)} y={chartHeight - 5} width={xScale.bandwidth()} height={5} fill="#E6E9EE" />
              <rect x={xScale(d.label)} y={yScale(d.value)} width={xScale.bandwidth()} height={chartHeight - yScale(d.value)} rx={borderRadius} ry={borderRadius} fill="#37C0C9" />
              <rect x={xScale(d.label)} y={chartHeight - 3} width={xScale.bandwidth()} height={3} fill="#37C0C9" />
              <line x1={0} x2={chartWidth} y1={chartHeight} y2={chartHeight} strokeWidth="0.5" stroke="#E6E9EE" />
              <text x={xScale(d.label)} dx={xScale.bandwidth() / 2} y={Math.min(chartHeight - 3, yScale(d.value))} dy={-3} textAnchor="middle" fill="#354042" fontSize={`${fontScale(numberOfBars)}rem`}> {d.value} </text>
              <text x={xScale(d.label)} dx={xScale.bandwidth() / 2} y={chartHeight} dy={20} textAnchor="middle" fill="#354042" fontSize={`${labelScale(numberOfBars)}rem`}> {d.label} </text>
            </g>
          ))}
          {yTicks.map(d =>
            <text key={`hours-${d}`} x={chartWidth} y={yScale(d)} fill="#E6E9EE" fontSize={`${fontScale(numberOfBars)}rem`}>{d}</text>,
          )}
        </g>
      </svg>
    );
  }
}

BarGraph.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object),
  width: PropTypes.number,
  height: PropTypes.number,
};
