import React from 'react';
import { MenuItem } from '@material-ui/core';
import Rating from '@material-ui/lab/Rating';
import StarBorderIcon from '@material-ui/icons/StarBorder';
import avatar from 'Assets/image/avatar.svg';
import styles from './UserCard.module.scss';
import './userCard.css';

const UserCard = () => {
  console.log();

  return (
    <MenuItem className="custom-material-li">
      {/* <ListItemText primary="Sent mail" /> */}
      <section className={styles.userCard}>
        <p className={styles.userCard__imageWrapper}>
          <img className={styles.userCard__image} src={avatar} alt="img" />
        </p>
        <div className={styles.userCard__inner}>
          <h3 className={styles.userCard__name}>Name</h3>
          <div className={styles.userCard__rating}>
            <Rating
              name="customized-empty"
              defaultValue={2}
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
