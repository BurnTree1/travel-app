import React from 'react';
import { connect } from 'react-redux';
import YouTube from 'react-youtube';
import { countriesType, IReduxState } from 'Types';
import styles from './MediaSection.module.scss';

const MediaSection = (props: { country: countriesType }) => {
  const { country } = props;

  return (
        <section className={styles.mediaSection}>
          <div className={styles.mediaWrapper}>
            {country && (
              <YouTube
                videoId={country.videoUrl}
                containerClassName={styles.playerContainer}
              />
            )}
          </div>
        </section>
  );
};

const mapStateToProps = (state: { countries: IReduxState }) => ({
  country: state.countries.country,
});

export default connect(mapStateToProps)(MediaSection);
