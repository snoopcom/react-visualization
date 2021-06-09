import { FunctionComponent, useEffect, useMemo, useState } from 'react';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import api from '../../api';
import Chart from '../Chart/Chart';
import { TypeCounryData, TypeCountry } from './type';

const Detailed: FunctionComponent = () => {
  const [countries, setCountries] = useState([]);
  const [counryCode, setCounryCode] = useState('russia');
  const [counryData, setCounryData] = useState<TypeCounryData>();

  useEffect(() => {
    api.get('/countries').then((res) => setCountries(res.data));
  }, []);

  useEffect(() => {
    api
      .get(`/total/country/${counryCode}`)
      .then((res) => setCounryData(prepareData(res.data)));
  }, [counryCode]);

  const handleChange = (event: React.ChangeEvent<{ value: any }>) => {
    setCounryCode(event.target.value);
  };

  return (
    <div>
      <Select
        labelId='label'
        id='select'
        onChange={handleChange}
        value={counryCode}
      >
        {countries.map((country: TypeCountry) => (
          <MenuItem key={country.Slug} value={country.Slug}>
            {country.Country}
          </MenuItem>
        ))}
      </Select>
      {counryData ? <Chart data={counryData} /> : null}
    </div>
  );
};

export default Detailed;

const prepareData = (data: any[]) => {
  const chartData: TypeCounryData = {
    labels: [],
    active: [],
    deaths: [],
    recovered: [],
  };

  data.forEach((item) => {
    chartData.labels.push(item.Date.replace(/T.*$/, ''));
    chartData.active.push(item.Active);
    chartData.deaths.push(item.Deaths);
    chartData.recovered.push(item.Recovered);
  });

  return chartData;
};
