import React, { FC } from 'react';
import italy from 'Assets/image/italy.png';
import { Link } from 'react-router-dom';
import ratingImg from '../../../../assets/image/rating.svg';
import styles from './Card.module.css';

type propsType = {
  name: string
  rating: null | number
  capital: string
  iso: string
};
export const Card: FC<propsType> = (props) => {
  const {
    iso, name, rating, capital,
  } = props;
  return (
    <Link to={`countries/${iso}`}>
      <div className={styles.card}>
        <img src={italy} alt="country" className={styles.card__img} />
        <div className={styles.card__desc}>
          <div className={styles.card__country}>
            <div className={styles.card__countryName}>{name}</div>
            <div className={styles.card__rating}>
              {rating}
              <img src={ratingImg} alt="star" className={styles.rating__img} />
            </div>
          </div>
          <div className={styles.card__capital}>{capital}</div>
        </div>
      </div>
    </Link>
  );
};
