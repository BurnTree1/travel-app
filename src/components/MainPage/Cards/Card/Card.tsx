import React, { FC } from 'react';
import { Link } from 'react-router-dom';
import styles from './Card.module.css';

type propsType = {
  name: string
  capital: string
  iso: string
  imageUrl: string
};
export const Card: FC<propsType> = ({
  name, capital, iso, imageUrl,
}) => (
    <Link to={`countries/${iso}`}>
        <div className={styles.card}>
            <img
              src={imageUrl}
              alt="country"
              className={styles.card__img}
            />
            <div className={styles.card__desc}>
                <div className={styles.card__country}>
                    <div
                      className={styles.card__countryName}
                    >
{name}
                    </div>
                </div>
                <div className={styles.card__capital}>{capital}</div>
            </div>
        </div>
    </Link>
);
