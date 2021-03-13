import React, { useState } from 'react';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import { FormControl } from '@material-ui/core';
import styles from './Currency.module.scss';
import './Currency.scss';

export const Currency = () => {
  const [currency, setCurrency] = useState<string>('usd');
  const handleChange = (event: React.ChangeEvent<any>) => {
    setCurrency(event.target.value);
  };
  return (
        <div className={styles.currency}>
            <span className={styles.currency__exchange}>2.5</span>
            <div className="currency__select">
                <FormControl>
                    <Select
                      id="currency"
                      value={currency}
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
