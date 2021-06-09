import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import React, { FunctionComponent, ReactElement } from 'react';
import { GlobalPropsType } from './type';

const CountryDataBlock: FunctionComponent<GlobalPropsType> = ({
  country: { TotalConfirmed, TotalDeaths, TotalRecovered, Country },
}): ReactElement => {
  return (
    <Paper style={infoBlockStyle}>
      <Typography variant='h6'>{Country}</Typography>
      <Typography variant='subtitle1'>Confirmed: {TotalConfirmed}</Typography>
      <Typography variant='subtitle1'>Deads: {TotalDeaths}</Typography>
      <Typography variant='subtitle1'>Recovered: {TotalRecovered}</Typography>
    </Paper>
  );
};

export default CountryDataBlock;

const infoBlockStyle = { padding: '10px' };
