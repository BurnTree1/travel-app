import React from 'react';
import ImageGallery from 'react-image-gallery';
import { connect } from 'react-redux';
import { sight, IReduxState, countriesType } from 'Types';
import styles from './GallerySection.module.scss';
import './gallerySection.css';
import SightScore from './SightScore/SightScore';

interface IImage {
  original: string;
  thumbnail: string;
  description: string;
}

const GallerySection = (props: { country: countriesType }) => {
  const { country } = props;
  let images: IImage[] | null = null;
  if (country) {
    images = country.sights
      .map((item: sight) => ({
        original: item.imageUrl,
        thumbnail: item.imageUrl,
        description: item.description,
      }));
  }

  return (
    images && images.length > 0
      ? (
          <section className={styles.gallerySection}>
            <SightScore />
            <div className={styles.galleryWrapper}>
              {images && (
                <ImageGallery
                  items={images}
                  autoPlay={false}
                  thumbnailPosition="left"
                  showPlayButton={false}
                  onSlide={(...arg) => console.log(arg)}
                />
              )}
            </div>
          </section>
      )
      : <div />
  );
};

const mapStateToProps = (state: { countries: IReduxState }) => ({
  country: state.countries.country,
});

export default connect(mapStateToProps)(GallerySection);
