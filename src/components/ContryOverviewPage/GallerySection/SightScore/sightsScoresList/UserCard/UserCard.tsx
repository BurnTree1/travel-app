import React from 'react';
import { MenuItem } from '@material-ui/core';
import Rating from '@material-ui/lab/Rating';
import StarBorderIcon from '@material-ui/icons/StarBorder';
import { IScoreData } from 'Types';
import avatar from 'Assets/image/avatar.svg';
import styles from './UserCard.module.scss';
import './userCard.css';

const UserCard = (props: { scoreData: IScoreData }) => {
  const { scoreData } = props;

  return (
    <MenuItem className="custom-material-li">
      <section className={styles.userCard}>
        <p className={styles.userCard__imageWrapper}>
          <img className={styles.userCard__image} src={avatar} alt="img" />
        </p>
        <div className={styles.userCard__inner}>
          <h3 className={styles.userCard__name}>{scoreData.name}</h3>
          <div className={styles.userCard__rating}>
            <Rating
              name="customized-empty"
              defaultValue={scoreData.score}
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
