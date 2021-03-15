import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setWeather } from 'Actions';
import styles from './Weather.module.scss';
import { AppRootReducer } from '../../../../../store';

export const Weather = () => {
  const temp = useSelector((state: AppRootReducer) => state.widgets.weather.temp);
  const desc = useSelector((state: AppRootReducer) => state.widgets.weather.desc);
  const icon = useSelector((state: AppRootReducer) => state.widgets.weather.icon);
  const city = useSelector((state: AppRootReducer) => state.countries.country.capital);
  const lang = useSelector((state: AppRootReducer) => state.lang.lang);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(setWeather(city, lang));
  }, [city, lang]);
  return (
        <div className={styles.weather}>
            <img
              src={`http://openweathermap.org/img/wn/${icon}.png`}
              alt="icon"
            />
            <div className={styles.weather__inner}>
                <span className="weather__temp">
{temp}
                    {' '}
                    C
                </span>
                <span className={styles.weather__desc}>{desc}</span>
            </div>
        </div>
  );
};
