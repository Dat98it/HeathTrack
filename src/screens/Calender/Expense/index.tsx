/* eslint-disable react-native/no-inline-styles */
import {HighChart, View} from '@components/index';
import {useAppTheme} from '@hooks/theme';
import React from 'react';

const Expense = () => {
  const theme = useAppTheme();

  const chartConfig = {
    chart: {
      plotBackgroundColor: null,
      plotBorderWidth: 0,
      plotShadow: false,
      backgroundColor: 'transparent',
    },
    title: false,
    tooltip: {
      pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>',
    },
    credits: {
      enabled: false,
    },
    exporting: {
      enabled: false,
    },
    accessibility: {
      point: {
        valueSuffix: '%',
      },
    },
    plotOptions: {
      pie: {
        dataLabels: {
          enabled: true,
          distance: -50,
          style: {
            fontWeight: 'bold',
            color: 'white',
          },
        },
        startAngle: -90,
        endAngle: 90,
        center: ['50%', '75%'],
        size: '110%',
        colors: [
          theme.colors.oceanBlue,
          theme.colors.lightBlue,
          theme.colors.vividBlue,
        ],
      },
    },
    series: [
      {
        type: 'pie',
        name: 'Expense',
        innerSize: '50%',
        data: [
          ['10%', 10],
          ['11%', 11],
          ['79%', 79],
        ],
      },
    ],
  };

  return (
    <View minHeight={300}>
      <HighChart style={{flex: 1}} config={chartConfig} />
    </View>
  );
};

export default Expense;
