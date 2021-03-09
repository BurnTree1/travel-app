import React, {FC} from "react";
import {Card} from "./Card/Card";
import styles from './Cards.module.css'
import {countriesType} from "../../../types/types";

type propsType = {
    cardsArr: Array<countriesType>
}
export const Cards: FC<propsType> = (props) => {
    const cards = props.cardsArr.map(card =>
            <Card key={card.id} name={card.name} capital={card.capital} rating={card.rating} iso={card.iso}/>)
    return (
        <div className={styles.cards}>
            {cards}
        </div>
    )
}