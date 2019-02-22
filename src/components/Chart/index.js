import React, { Component, createRef } from 'react';
import PropTypes from 'prop-types';
import { Chart } from '../../../node_modules/frappe-charts/dist/frappe-charts.min.esm';
import './styles.css';

export default class nioChart extends Component {
  chartRef = createRef();

  chart = null;

  colors = ['#3cafda', '#55c58f', '#37c0c9', '#f3bc27', '#dd3b4c'];

  componentDidMount = () => {
    const { title, data, type, height, onSelect, ...rest } = this.props;

    this.chart = new Chart(this.chartRef.current, { title, data, type, height, is_navigable: !!onSelect, colors: this.colors, ...rest });

    if (onSelect) {
      this.c.parent.addEventListener('data-select', onSelect);
    }
  };

  componentDidUpdate = () => {
    const { data } = this.props;

    if (this.chart.update) {
      this.chart.update(data);
    }
  };

  render = () => <div ref={this.chartRef} />;
}

nioChart.defaultProps = {
  type: 'bar',
  height: 250,
};

nioChart.propTypes = {
  id: PropTypes.string,
  title: PropTypes.string,
  data: PropTypes.object,
  type: PropTypes.string,
  height: PropTypes.number,
  onSelect: PropTypes.func,
};
