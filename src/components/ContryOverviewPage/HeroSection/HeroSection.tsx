import React from 'react';
import styles from './HeroSection.module.scss';

const HeroSection = () => {
  console.log('HeroSection has rendered');

  return (
        <section className={styles.heroSection} />
  );
};

export default HeroSection;
