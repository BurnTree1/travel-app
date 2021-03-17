import React, { FC, useEffect } from 'react';
import {
  FormControl, InputLabel, MenuItem, Select,
} from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';
import { setCountries } from 'Actions';
import { AppRootReducer } from '../../../store';
import SightsForm from './SightsForm/SightsForm';

const SightsPanel: FC = () => {
  const countriesArr = useSelector((state: AppRootReducer) => state.countries.countries
    .filter((country) => country.custom === true));
  const [country, setCountry] = React.useState('');
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(setCountries('en'));
  }, []);
  const handleChange = (event) => {
    setCountry(event.target.value);
  };
  return (
        <div className="sights__panel">
            <div className="sights__countries">
                <FormControl>
                    <InputLabel id="country-select-label">Country</InputLabel>
                    <Select
                      labelId="sights-select-label"
                      id="country-select"
                      value={country}
                      onChange={handleChange}
                    >
                        {countriesArr.map((c) => <MenuItem value={c.id}>{c.name}</MenuItem>)}
                    </Select>
                </FormControl>
            </div>
            <SightsForm id={country} />
        </div>
  );
};

export default SightsPanel;
