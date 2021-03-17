import React, { useEffect, useState } from 'react';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import { FormControl } from '@material-ui/core';
import './Currency.scss';
import { useDispatch, useSelector } from 'react-redux';
import { setCountryCurrency } from 'Actions';
import { useIntl } from 'react-intl';
import { AppRootReducer } from '../../../../../store';
import styles from './Currency.module.scss';

export const Currency = () => {
  const [currencySelected, setCurrencySelected] = useState<string>('usd');
  const [currency, setCurrency] = useState<string>('');
  const currencyCountry = useSelector((state: AppRootReducer) => state.widgets.currencyExchange.currencyCountry);
  const currencyEur = useSelector((state: AppRootReducer) => state.widgets.currencyExchange.eur);
  const currencyRub = useSelector((state: AppRootReducer) => state.widgets.currencyExchange.rub);
  const countryMoney = useSelector((state: AppRootReducer) => state.countries.country.currency);
  const intl = useIntl();
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
                        <MenuItem value="usd">{intl.formatMessage({ id: 'currency.usd' })}</MenuItem>
                        <MenuItem value="rub">{intl.formatMessage({ id: 'currency.rub' })}</MenuItem>
                        <MenuItem value="eur">{intl.formatMessage({ id: 'currency.eur' })}</MenuItem>
                    </Select>
                </FormControl>
            </div>
        </div>
  );
};
