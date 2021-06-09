import { Paper, Grid, Typography } from '@material-ui/core';
import React, { FunctionComponent, ReactElement } from 'react';
import { GlobalPropsType } from './type';

const GlobalDataBlock: FunctionComponent<GlobalPropsType> = ({
  globalData: { TotalConfirmed, TotalDeaths, TotalRecovered },
}): ReactElement => {
  return (
    <Paper style={infoBlockStyle}>
      <Grid container>
        <Grid item xs={3}>
          <Typography variant='h4'>Global</Typography>
        </Grid>
        <Grid item xs={3}>
          <Typography variant='h6'>Confirmed: {TotalConfirmed}</Typography>
        </Grid>
        <Grid item xs={3}>
          <Typography variant='h6'>Deads: {TotalDeaths}</Typography>
        </Grid>
        <Grid item xs={3}>
          <Typography variant='h6'>Recovered: {TotalRecovered}</Typography>
        </Grid>
      </Grid>
    </Paper>
  );
};

export default GlobalDataBlock;

const infoBlockStyle = { padding: '10px' };

// : { TotalConfirmed, TotalDeads, TotalRecovered }
