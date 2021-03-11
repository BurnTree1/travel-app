import React, {FC} from "react";
import styles from './Card.module.css'
import {Link} from "react-router-dom";

type propsType = {
    name: string
    capital: string
    iso: string
    imageUrl: string
}
export const Card: FC<propsType> = (props) => {
    return (
        <Link to={`countries/${props.iso}`}>
            <div className={styles.card}>
                <img src={props.imageUrl} alt="country" className={styles.card__img}/>
                <div className={styles.card__desc}>
                    <div className={styles.card__country}>
                        <div className={styles.card__countryName}>{props.name}</div>
                    </div>
                    <div className={styles.card__capital}>{props.capital}</div>
                </div>
            </div>
        </Link>
    )
}