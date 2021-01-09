import * as React from 'react';
import Paper from '@material-ui/core/Paper';
import { Chart, PieSeries, Title } from '@devexpress/dx-react-chart-material-ui';

import { Animation } from '@devexpress/dx-react-chart';

const data = [
  { region: 'Asia', val: 4500 },
  { region: 'Africa', val: 1012 },
  { region: 'Northern America', val: 3444 },
  { region: 'Latin America and the Caribbean', val: 1909 },
  { region: 'Europe', val: 2456 },
  { region: 'Oceania', val: 3510 },
];

export default class Demo extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      data,
    };
  }

  render() {
    const { data: chartData } = this.state;

    return (
      <Paper style={{ background: 'rgb(80, 86, 95)' }}>
        <Chart
          data={chartData}
        >
          <PieSeries
            valueField="val"
            argumentField="region"
            innerRadius={0.5}
          />
          <Title text="The Population of Continents and Regions"/>
          <Animation />
        </Chart>
      </Paper>
    );
  }
}
