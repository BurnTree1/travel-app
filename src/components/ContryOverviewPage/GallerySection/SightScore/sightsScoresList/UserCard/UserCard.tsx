import React from 'react';
import { Avatar, MenuItem } from '@material-ui/core';
import Rating from '@material-ui/lab/Rating';
import StarBorderIcon from '@material-ui/icons/StarBorder';
import { IScoreData } from 'Types';
import styles from './UserCard.module.scss';
import './userCard.css';

const UserCard = (props: { scoreData: IScoreData }) => {
  const { scoreData } = props;

  return (
    <MenuItem className="custom-material-li">
      <section className={styles.userCard}>
        <div className={styles.userCard__imageWrapper}>
          <Avatar src={scoreData.img} className={styles.userCard__image} />
        </div>
        <div className={styles.userCard__inner}>
          <h3 className={styles.userCard__name}>{scoreData.name}</h3>
          <div className={styles.userCard__rating}>
            <Rating
              name="customized-empty"
              value={scoreData.score}
              emptyIcon={<StarBorderIcon fontSize="inherit" />}
              readOnly
            />
          </div>
        </div>
      </section>
    </MenuItem>
  );
};

export default UserCard;
