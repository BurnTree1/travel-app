import React from "react";
import rating from '../../../../assets/image/rating.svg'
import styles from './Card.module.css'
import italy from 'Assets/image/italy.png'

export const Card = (props) => {
    return (
        <div className={styles.card}>
            <img src={italy} alt="country" className={styles.card__img}/>
            <div className={styles.card__desc}>
                <div className={styles.card__country}>
                    <div className={styles.card__countryName}>{props.name}</div>
                    <div className={styles.card__rating}>
                        {props.rating}
                        <img src={rating} alt="star" className={styles.rating__img}/>
                    </div>
                </div>
                <div className={styles.card__capital}>{props.capital}</div>
            </div>
        </div>
    )
}