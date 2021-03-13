import React, { useEffect, useState } from 'react';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import { FormControl } from '@material-ui/core';
import './Currency.scss';
import { useDispatch, useSelector } from 'react-redux';
import { setCountryCurrency } from 'Actions';
import { AppRootReducer } from '../../../../../store';
import styles from './Currency.module.scss';

export const Currency = () => {
  const [currencySelected, setCurrencySelected] = useState<string>('usd');
  const [currency, setCurrency] = useState<string>('');
  const currencyCountry = useSelector((state: AppRootReducer) => state.widgets.currencyExchange.currencyCountry);
  const currencyEur = useSelector((state: AppRootReducer) => state.widgets.currencyExchange.eur);
  const currencyRub = useSelector((state: AppRootReducer) => state.widgets.currencyExchange.rub);
  const countryMoney = useSelector((state: AppRootReducer) => state.countries.country.currency);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(setCountryCurrency(countryMoney));
    setCurrency((1 / +currencyCountry).toFixed(2));
    if (currencySelected === 'usd') {
      setCurrency((1 / +currencyCountry).toFixed(2));
    } else if (currencySelected === 'eur') {
      setCurrency((+currencyEur / +currencyCountry).toFixed(2));
    } else if (currencySelected === 'rub') {
      setCurrency((+currencyRub / +currencyCountry).toFixed(2));
    }
  }, [currencySelected, currencyCountry, countryMoney]);
  const handleChange = (event: React.ChangeEvent<any>) => {
    setCurrencySelected(event.target.value);
  };
  return (
        <div className={styles.currency}>
            <span className={styles.currency__exchange}>{currency}</span>
            <div className="currency__select">
                <FormControl>
                    <Select
                      id="currency"
                      value={currencySelected}
                      onChange={handleChange}
                    >
                        <MenuItem value="usd">USD</MenuItem>
                        <MenuItem value="rub">RUB</MenuItem>
                        <MenuItem value="eur">EUR</MenuItem>
                    </Select>
                </FormControl>
            </div>
        </div>
  );
};
