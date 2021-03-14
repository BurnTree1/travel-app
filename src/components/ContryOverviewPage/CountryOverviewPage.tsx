import React, { FC, useEffect } from 'react';
import { connect, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { countriesType } from 'Types';
import { setCountry } from 'Actions';
import { Header } from '../Header/Header';
import HeroSection from './HeroSection/HeroSection';
import DescriptionSection from './DescriptionSection/DescriptionSection';
import GallerySection from './GallerySection/GallerySection';
import MediaSection from './MediaSection/MediaSection';
import MapSection from './MapSection/MapSection';
import { Footer } from '../Footer/Footer';
import Widgets from './Widgets/Widgets';
import { AppRootReducer } from '../../store';
import styles from './CountryOverviewPage.module.scss';
import { Loader } from '../Loader/Loader';

type mapStateToPropsType = {
  country: countriesType
  lang: string
  loading: boolean
};

type Params = {
  id: string
};

const CountryOverviewPage: FC<mapStateToPropsType> = ({ country, lang, loading }) => {
  console.log('rendered countryOverview ');
  const dispatch = useDispatch();
  const { id } = useParams<Params>();
  useEffect(() => {
    console.log(id);
    dispatch(setCountry(id, lang));
  }, [id, lang]);
  return (
        <div>
          <Header search={false} />
          {loading
            ? <Loader />
            : (
                <>
                  <HeroSection />
                  <DescriptionSection />
                  <GallerySection />
                  <MediaSection />
                  <MapSection />
                  <Widgets country={country} />
                  <div className={styles.blackout} />
                </>
            )}
          <Footer />
        </div>
  );
};

const mapStateToProps = (state) => ({
  country: state.countries.country,
  lang: state.lang.lang,
  loading: state.countries.countryLoading,
});

export default connect<mapStateToPropsType, AppRootReducer>(mapStateToProps)(CountryOverviewPage);
