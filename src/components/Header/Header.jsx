import React from "react";
//import logo from '../../assets/image/logo.svg'
//import avatar from '../../assets/image/avatar.svg'
import styles from './Header.module.css'
import './Header.css'
import {Search} from "./Search/Search";
import {LanguageSelect} from "./LanguageSelect/LanguageSelect";


export const Header = () => {
    return (
        <div>
            <div className={styles.header}>
                <a href="/" className="header__link">
                    <img src='' alt="" className="logo"/>
                </a>
                <div className={styles.header__right}>
                    <Search/>
                    <div className={styles.language}>
                        <span className={styles.language__text}>Language</span>
                        <LanguageSelect/>
                    </div>
                    <div className="avatar">
                        <img src="" alt="" className="avatar__img"/>
                    </div>
                </div>
            </div>
        </div>
    )
}