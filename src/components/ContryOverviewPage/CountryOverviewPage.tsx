import React, { FC, useEffect } from 'react';
import { connect, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { Header } from '../Header/Header';
import HeroSection from './HeroSection/HeroSection';
import DescriptionSection from './DescriptionSection/DescriptionSection';
import GallerySection from './GallerySection/GallerySection';
import MediaSection from './MediaSection/MediaSection';
import MapSection from './MapSection/MapSection';
import { Footer } from '../Footer/Footer';
import Widgets from './Widgets/Widgets';
import { AppRootReducer } from '../../store';
import { countriesType } from '../../types/types';
import { setCountry } from '../../store/reducers/countries';

type mapStateToPropsType = {
  country: countriesType
  lang: string
};
export const CountryOverviewPage: FC<mapStateToPropsType> = ({ country, lang }) => {
  console.log('rendered countryOverview ');
  const dispatch = useDispatch();
  const { id } = useParams();
  useEffect(() => {
    dispatch(setCountry(id, lang));
  }, [id, lang]);
  return (
        <div>
            <Header search={false} />
            <HeroSection />
            <Widgets country={country} />
            <DescriptionSection />
            <GallerySection />
            <MediaSection />
            <MapSection />
            <Footer />
        </div>
  );
};

const mapStateToProps = (state) => ({
  country: state.countries.country,
  lang: state.lang.lang,
});

export default connect<mapStateToPropsType, AppRootReducer>(mapStateToProps)(CountryOverviewPage);
