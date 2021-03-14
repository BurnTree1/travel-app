import React, { FC } from 'react';
import { FormattedMessage } from 'react-intl';
import { Link } from 'react-router-dom';
import logo from 'Assets/image/logo.svg';
import avatar from 'Assets/image/avatar.svg';
import styles from './Header.module.css';
import './Header.css';
import { Search } from './Search/Search';
import LanguageSelect from './LanguageSelect/LanguageSelect';

type propsType = {
  findCountries?: (text: string) => void
  search: boolean
};
export const Header: FC<propsType> = (props) => {
  const { findCountries, search } = props;
  return (
    <div>
      <div className={styles.header}>
        <Link to="/" className="header__link">
          <img src={logo} alt="logo" className={styles.logo} />
        </Link>
        <div className={styles.header__right}>
          {search && <Search findCountries={findCountries!} />}
          <div className={styles.language}>
            <span className={styles.language__text}>
              <FormattedMessage id="language.lang" />
            </span>
            <LanguageSelect />
          </div>
          <div className={styles.avatar}>
            <img src={avatar} alt="avatar" className={styles.avatar__img} />
          </div>
        </div>
      </div>
    </div>
  );
};
