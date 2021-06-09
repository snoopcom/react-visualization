import React, { FunctionComponent } from 'react';
import { Line } from 'react-chartjs-2';
import { ChartPropsType, TypeChartData } from './type';

const Chart: FunctionComponent<ChartPropsType> = ({
  data: { labels, active, deaths, recovered },
}) => {
  const chartData: TypeChartData = {
    labels,
    datasets: [
      {
        label: 'Active',
        backgroundColor: 'RoyalBlue',
        borderColor: 'MidnightBlue',
        borderWidth: 1,
        hoverBackgroundColor: 'RoyalBlue',
        hoverBorderColor: 'MidnightBlue',
        data: active,
        pointHoverRadius: 7,
      },
      {
        label: 'Deaths',
        backgroundColor: 'LightSteelBlue',
        borderColor: 'LightSlateGray',
        borderWidth: 1,
        hoverBackgroundColor: 'LightSteelBlue',
        hoverBorderColor: 'LightSlateGray',
        data: deaths,
        pointHoverRadius: 7,
      },
      {
        label: 'Recovere',
        backgroundColor: 'MediumSpringGreen',
        borderColor: 'MediumSeaGreen',
        borderWidth: 1,
        hoverBackgroundColor: 'MediumSpringGreen',
        hoverBorderColor: 'MediumSeaGreen',
        data: recovered,
        pointHoverRadius: 7,
      },
    ],
  };

  return (
    <>
      <Line data={chartData} />
    </>
  );
};

export default Chart;
