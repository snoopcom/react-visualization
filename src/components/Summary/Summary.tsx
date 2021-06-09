import Grid from '@material-ui/core/Grid';
import { useEffect, useState } from 'react';
import api from '../../api';
import CountryDataBlock from './CountryDataBlock';
import GlobalDataBlock from './GlobalDataBlock';
import { TypeSummaryData } from './type';

const Summary = () => {
  const [summaryData, setData] = useState<TypeSummaryData>();

  useEffect(() => {
    api.get('/summary').then((res) => setData(res.data));
  }, []);

  return summaryData ? (
    <Grid container spacing={3}>
      <Grid item xs={12}>
        <GlobalDataBlock globalData={summaryData.Global} />
      </Grid>
      {summaryData.Countries.map((country) => (
        <Grid item xs={3} key={country.ID}>
          <CountryDataBlock country={country} />
        </Grid>
      ))}
    </Grid>
  ) : null;
};

export default Summary;
