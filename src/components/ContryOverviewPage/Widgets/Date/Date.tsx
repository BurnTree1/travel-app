import React from 'react';
import clock from 'Assets/image/clock.svg';
import styles from './Date.module.scss';

export const Date = () => (
        <div className={styles.date}>
            <img src={clock} alt="clock" className={styles.date__icon} />
            <div className={styles.date__inner}>
                <div className="date__info">22 Февраля 2021</div>
                <div className="date__day">Понедельник</div>
                <div className="date__time">19:32:49</div>
            </div>
        </div>
);
