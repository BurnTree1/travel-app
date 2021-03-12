import React, { FC } from 'react';
import { countriesType } from 'Types';
import { Card } from './Card/Card';
import styles from './Cards.module.css';

type propsType = {
  cardsArr: Array<countriesType>
};
export const Cards: FC<propsType> = (props) => {
  const { cardsArr } = props;
  const cards = cardsArr.map((card) => (
<Card
  key={card.id}
  name={card.name}
  capital={card.capital}
  iso={card.ISO}
  imageUrl={card.imageUrl}
/>
  ));
  return (
        <div className={styles.cards}>
            {cards}
        </div>
  );
};
