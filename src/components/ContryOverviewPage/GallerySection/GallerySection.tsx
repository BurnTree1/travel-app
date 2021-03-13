import React from 'react';
import ImageGallery from 'react-image-gallery';
import { connect } from 'react-redux';
import { sight, IReduxState } from 'Types';
import styles from './GallerySection.module.scss';
import './gallerySection.css';

interface IImage {
  original: string;
  thumbnail: string;
  description: string;
}

const GallerySection = (props: any) => {
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
        <section className={styles.gallerySection}>
          <div className={styles.galleryWrapper}>
            {images && (
              <ImageGallery
                items={images}
                autoPlay={false}
                thumbnailPosition="left"
                showPlayButton={false}
              />
            )}
          </div>
        </section>
  );
};

const mapStateToProps = (state: { countries: IReduxState }) => ({
  country: state.countries.country,
});

export default connect(mapStateToProps)(GallerySection);
