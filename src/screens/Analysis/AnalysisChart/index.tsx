import {HighChart} from '@components/index';
import {useAppTheme} from '@hooks/theme';
import React from 'react';

const AnalysisChart = () => {
  const theme = useAppTheme();

  const chartConfig = {
    chart: {
      type: 'column',
      backgroundColor: 'transparent',
    },
    title: false,
    subtitle: {
      text: '',
      align: 'left',
    },
    credits: {
      enabled: false,
    },
    exporting: {
      enabled: false,
    },
    xAxis: {
      categories: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
      crosshair: true,
      accessibility: {
        description: 'Countries',
      },
    },
    yAxis: {
      title: {
        text: '',
      },
      labels: {
        enabled: false,
      },
    },
    tooltip: {},
    plotOptions: {
      column: {
        pointPadding: 0.2,
        borderWidth: 0,
      },
    },
    series: [
      {
        name: 'Income',
        data: [3877, 2800, 1290, 643, 540, 343, 365],
        showInLegend: false,
        color: theme.colors.caribbeanGreen,
      },
      {
        name: 'Expense',
        data: [453, 1400, 100, 1405, 195, 1135, 575],
        showInLegend: false,
        color: theme.colors.oceanBlue,
      },
    ],
  };

  // eslint-disable-next-line react-native/no-inline-styles
  return <HighChart style={{flexGrow: 1}} config={chartConfig} />;
};

export default AnalysisChart;
