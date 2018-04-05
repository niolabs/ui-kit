import React from 'react';
import PropTypes from 'prop-types';
import Frappe from '../../../node_modules/frappe-charts/dist/frappe-charts.min.esm';
import './styles.css';

export default class Chart extends React.Component {
  componentDidMount() {
    const {
      title,
      data,
      type,
      height,
      onSelect,
      ...rest
    } = this.props;

    this.c = new Frappe({
      parent: this.chart,
      title,
      data,
      type,
      height,
      is_navigable: !!onSelect,
      colors: ['#3cafda', '#55c58f', '#37c0c9', '#f3bc27', '#dd3b4c'],
      ...rest,
    });

    if (onSelect) {
      this.c.parent.addEventListener('data-select', onSelect);
    }
  }

  componentWillReceiveProps(props) {
    const { data } = props;

    if (this.c.update_values) {
      this.c.update_values(data.datasets, data.labels);
    }
  }

  render() {
    return (<div ref={chart => (this.chart = chart)} />); // eslint-disable-line no-return-assign
  }
}

Chart.defaultProps = {
  type: 'bar',
  height: 250,
};

Chart.propTypes = {
  title: PropTypes.string,
  data: PropTypes.object,
  type: PropTypes.string,
  height: PropTypes.number,
  onSelect: PropTypes.func,
};
