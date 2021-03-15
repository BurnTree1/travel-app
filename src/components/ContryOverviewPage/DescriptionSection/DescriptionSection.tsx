import React from 'react';
import { FormattedMessage } from 'react-intl';
import { useSelector } from 'react-redux';
import { countriesType } from 'Types';
import styles from './DescriptionSection.module.scss';
import { AppRootReducer } from '../../../store';

const DescriptionSection = () => {
  const countryData = useSelector<AppRootReducer, countriesType>((state) => state.countries.country);

  return (
        <section className={styles.descriptionSection}>
            <div className={styles.descriptionBlock}>
                <p className={styles.title}>
                    <FormattedMessage
                      id="description.about"
                      defaultMessage="About the country"
                    />
                </p>
                <p className={styles.descriptionText}>
                    {countryData.description}
                </p>
                <div className={styles.descriptionImage}>
                    <img src="http://surl.li/nlqk" alt="description img" />
                </div>
            </div>
        </section>
  );
};

export default DescriptionSection;
