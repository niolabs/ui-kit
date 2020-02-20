import React from 'react';
import ReactApexChart from 'react-apexcharts';

export default ({ options, series, colors = ['#3cafda', '#55c58f', '#37c0c9', '#f3bc27', '#dd3b4c'], type = 'line', height = '250px', width = '100%' }) => (
  <ReactApexChart
    options={options}
    colors={colors}
    series={series}
    type={type}
    height={height}
    width={width}
  />
);
