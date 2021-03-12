/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { FC, useState } from 'react';
import { useIntl } from 'react-intl';
import TextField from '@material-ui/core/TextField';
import del from 'Assets/image/delete.svg';
import styles from './Search.module.css';

type propsType = {
  findCountries: (text: string)=> void
};
export const Search: FC<propsType> = (props) => {
  const [searchText, setSearchText] = useState<string>('');
  const intl = useIntl();
  const onSearchChange = (event) => {
    setSearchText(event.target.value);
    props.findCountries(event.target.value);
  };
  const onDeleteSearch = () => {
    setSearchText('');
    props.findCountries('');
  };
  return (
        <div className={styles.search}>
            <TextField
              id="search"
              autoFocus
              autoComplete="off"
              value={searchText}
              onChange={onSearchChange}
              variant="outlined"
              placeholder={intl.formatMessage({ id: 'header.search' })}
            />
            <img onClick={onDeleteSearch} src={del} alt="delete" className={styles.search__delete} />
        </div>
  );
};
