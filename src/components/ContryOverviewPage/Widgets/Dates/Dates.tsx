import React, { useEffect, useState } from 'react';
import clock from 'Assets/image/clock.svg';
import { useSelector } from 'react-redux';
import styles from './Dates.module.scss';
import { AppRootReducer } from '../../../../store';

export const Dates = () => {
  const [offset] = useState(0);
  const lang = useSelector((state: AppRootReducer) => state.lang.lang);
  const toOffsetDate = () => {
    const countryDate = new Date(new Date().getTime() + (offset * 3600 * 1000));
    const hrs = countryDate.getUTCHours();
    const mins = countryDate.getUTCMinutes();
    const secs = countryDate.getUTCSeconds();
    return `${hrs}:${mins}:${secs}`;
  };
  const [time, setTime] = useState(toOffsetDate(offset));
  const [date, setdate] = useState(new Date().toLocaleDateString(lang, { day: 'numeric', month: 'long', year: 'numeric' }));
  const [weekDay, setWeekDay] = useState(new Date().toLocaleDateString(lang, { weekday: 'long' }));
  useEffect(() => {
    const tick = () => {
      setTime(toOffsetDate(offset));
    };
    const intervalID = setInterval(() => tick(), 1000);
    return () => {
      clearInterval(intervalID);
    };
  }, []);
  useEffect(() => {
    setdate(new Date().toLocaleDateString(lang, { day: 'numeric', month: 'long', year: 'numeric' }));
    setWeekDay(new Date().toLocaleDateString(lang, { weekday: 'long' }));
  }, [lang]);
  return (
        <div className={styles.date}>
            <img src={clock} alt="clock" className={styles.date__icon} />
            <div className={styles.date__inner}>
                <div className="date__info">{date}</div>
                <div className="date__day">{weekDay}</div>
                <div className="date__time">{time}</div>
            </div>
        </div>
  );
};
