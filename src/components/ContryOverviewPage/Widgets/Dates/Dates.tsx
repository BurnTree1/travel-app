import React, { useEffect, useState } from 'react';
import clock from 'Assets/image/clock.svg';
import { useSelector } from 'react-redux';
import styles from './Dates.module.scss';
import { AppRootReducer } from '../../../../store';
import { useToOffsetDate } from '../../../../helpers/hooks';

export const Dates = () => {
  const [offset, setOffset] = useState('0');
  const timeZone = useSelector((state: AppRootReducer) => state.countries.country.timeZone);
  const lang = useSelector((state: AppRootReducer) => state.lang.lang);
  const [time, setTime] = useState(useToOffsetDate(offset));
  const [date, setdate] = useState(new Date().toLocaleDateString(lang, {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  }));
  const [weekDay, setWeekDay] = useState(new Date().toLocaleDateString(lang, { weekday: 'long' }));
  useEffect(() => {
    setOffset(timeZone);
    const tick = () => {
      setTime(useToOffsetDate(offset));
    };
    const intervalID = setInterval(() => tick(), 1000);
    return () => {
      clearInterval(intervalID);
    };
  }, [offset]);
  useEffect(() => {
    setdate(new Date().toLocaleDateString(lang, {
      day: 'numeric',
      month: 'long',
      year: 'numeric',
    }));
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
