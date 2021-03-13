import React from 'react';
import { useSelector } from 'react-redux';
import { countriesType } from 'Types';
import styles from './HeroSection.module.scss';
import { AppRootReducer } from '../../../store';

const HeroSection = () => {
  const countryData = useSelector<AppRootReducer, countriesType>((state) => state.countries.country);

  return (
      <section className={styles.heroSection}>
              <div className={styles.heroDescription}>
                  <div className={styles.heroFlag}>
                      <img src={countryData.flagImageUrl} alt="flag img" />
                  </div>
                  <p>{countryData.name}</p>
                  <p>{countryData.capital}</p>
              </div>
          <div className={styles.heroImage}>
              <img src={countryData.imageUrl} alt="full img" />
          </div>
          <div className={styles.blackout} />
      </section>
  );
};

export default HeroSection;
