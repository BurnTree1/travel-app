import React from "react";
import {Card} from "./Card/Card";
import styles from './Cards.module.css'

export const Cards = (props) => {
    const cards = props.cardsArr.map(card => <Card key={card.id} name={card.name} capital={card.capital} rating={card.rating}/>)
    return (
        <div className={styles.cards}>
                {cards}
        </div>
    )
}