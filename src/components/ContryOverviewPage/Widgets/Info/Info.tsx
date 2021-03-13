import React from 'react';
import { Currency } from './Currency/Currency';
import { Weather } from './Weather/Weather';
import styles from './Info.module.scss';

export const Info = () => (
        <div className={styles.info}>
            <Weather />
            <Currency />
        </div>
);
