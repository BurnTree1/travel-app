/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { FC, useState } from 'react';
import { useIntl } from 'react-intl';
import TextField from '@material-ui/core/TextField';
import del from 'Assets/image/delete.svg';
import search from 'Assets/image/search.svg';
import searchDark from 'Assets/image/searchDark.svg';
import styles from './Search.module.css';

type propsType = {
  findCountries: (text: string) => void
};
export const Search: FC<propsType> = (props) => {
  const [searchText, setSearchText] = useState<string>('');
  const [showSearch, setShowSearch] = useState<boolean>(false);
  const intl = useIntl();
  const onSearchChange = (event) => {
    setSearchText(event.target.value);
    props.findCountries(event.target.value);
  };
  const onDeleteSearch = () => {
    setSearchText('');
    props.findCountries('');
  };
  const onSearchShow = () => {
    setShowSearch(!showSearch);
  };
  return (
        <div className={styles.search__wrap}>
            {showSearch
            && (
<div className={styles.search__top}>
                <div className={styles.input__wrap}>
                    <TextField
                      className="search__topInput"
                      id="searchTop"
                      autoComplete="off"
                      value={searchText}
                      onChange={onSearchChange}
                      variant="outlined"
                    />
                    <img
                      src={searchDark}
                      alt="search"
                      className={styles.search__topIcon}
                    />
                </div>
</div>
            )}
            <div className={styles.search}>
                <TextField
                  className="search__input"
                  id="search"
                  autoFocus
                  autoComplete="off"
                  value={searchText}
                  onChange={onSearchChange}
                  placeholder={intl.formatMessage({ id: 'header.search' })}
                />
                <img
                  onClick={onDeleteSearch}
                  src={del}
                  alt="delete"
                  className={styles.search__delete}
                />
                <img
                  onClick={onSearchShow}
                  src={search}
                  alt="search"
                  className={styles.search__icon}
                />
            </div>
        </div>
  );
};
