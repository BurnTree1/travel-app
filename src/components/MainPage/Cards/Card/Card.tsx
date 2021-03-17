import React, { FC } from 'react';
import { Link } from 'react-router-dom';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import { useDispatch, useSelector } from 'react-redux';
import styles from './Card.module.css';
import { deleteCountry } from '../../../../store/actions/admin';
import { AppRootReducer } from '../../../../store';

type propsType = {
  name: string
  capital: string
  iso: string
  imageUrl: string
  custom: boolean | undefined
  id: number
};
export const Card: FC<propsType> = ({
  id, name, capital, iso, imageUrl, custom,
}) => {
  const dispatch = useDispatch();
  const isAuth = useSelector((state: AppRootReducer) => state.user.isAuth);
  const onCountryDelete = () => {
    dispatch(deleteCountry(id));
  };
  return (
            <div className={styles.card__wrap}>
                <Link to={`countries/${iso}`}>
                    <div
                      className={styles.card}
                      style={{ backgroundImage: `url(${imageUrl})` }}
                    >
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
                {custom
                && isAuth && (
<IconButton
  onClick={onCountryDelete}
  aria-label="delete"
  className={styles.delete}
>
                    <DeleteIcon fontSize="large" />
</IconButton>
                )}
            </div>
  );
};
