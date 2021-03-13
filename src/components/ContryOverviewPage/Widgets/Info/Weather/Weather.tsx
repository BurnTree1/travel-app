import React from 'react';
import cloud from 'Assets/image/cloud.svg';
import styles from './Weather.module.scss';

export const Weather = () => (
        <div className={styles.weather}>
            <img src={cloud} alt="cloud" className={styles.weather__icon} />
            <div className={styles.weather__inner}>
                <span className="weather__temp">19 C</span>
                <span className="weather__desc">clouds</span>
            </div>
        </div>
);
