import React from 'react';
import PropTypes from 'prop-types';
import ReactApexChart from 'react-apexcharts';

const ThemedComponent = ({ options, series, colors, type, height, width }) => (
  <ReactApexChart
    options={options}
    colors={colors}
    series={series}
    type={type}
    height={height}
    width={width}
  />
);

ThemedComponent.defaultProps = {
  type: 'line',
  height: '250px',
  width: '100%',
  options: {
    chart: {
      id: 'line',
    },
    xaxis: {
      categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999],
    },
  },
  series: [
    {
      name: 'series-1',
      data: [30, 40, 45, 50, 49, 60, 70, 91],
    },
  ],
  colors: ['#3cafda', '#55c58f', '#37c0c9', '#f3bc27', '#dd3b4c'],
};

ThemedComponent.propTypes = {
  options: PropTypes.object,
  series: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
  colors: PropTypes.array,
  type: PropTypes.string,
  height: PropTypes.string,
  width: PropTypes.string,
};

export default ThemedComponent;
