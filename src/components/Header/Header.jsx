import React from "react";
import logo from 'Assets/image/logo.svg'
import avatar from 'Assets/image/avatar.svg'
import styles from './Header.module.css'
import './Header.css'
import {Search} from "./Search/Search";
import {LanguageSelect} from "./LanguageSelect/LanguageSelect";


export const Header = () => {
    return (
        <div>
            <div className={styles.header}>
                <a href="/" className="header__link">
                    <img src={logo} alt="logo" className="logo"/>
                </a>
                <div className={styles.header__right}>
                    <Search/>
                    <div className={styles.language}>
                        <span className={styles.language__text}>Language</span>
                        <LanguageSelect/>
                    </div>
                    <div className={styles.avatar}>
                        <img src={avatar} alt="avatar" className={styles.avatar__img}/>
                    </div>
                </div>
            </div>
        </div>
    )
}