import React, { FC } from 'react';
import logo from 'Assets/image/logo.svg';
import avatar from 'Assets/image/avatar.svg';
import styles from './Header.module.css';
import './Header.css';
import { Search } from './Search/Search';
import { LanguageSelect } from './LanguageSelect/LanguageSelect';

type propsType = {
  findCountries?: (text: string) => void
  search: boolean
};
export const Header: FC<propsType> = (props) => (
        <div>
            <div className={styles.header}>
                <a href="/" className="header__link">
                    <img src={logo} alt="logo" className={styles.logo} />
                </a>
                <div className={styles.header__right}>
                    {props.search && <Search findCountries={props.findCountries!} />}
                    <div className={styles.language}>
                        <span className={styles.language__text}>Language</span>
                        <LanguageSelect />
                    </div>
                    <div className={styles.avatar}>
                        <img src={avatar} alt="avatar" className={styles.avatar__img} />
                    </div>
                </div>
            </div>
        </div>
);
