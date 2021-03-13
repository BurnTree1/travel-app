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

type mapStateToPropsType = {
  country: countriesType
  lang: string
};

type Params = {
  id: string
};

export const CountryOverviewPage: FC<mapStateToPropsType> = ({ country, lang }) => {
  console.log('rendered countryOverview ');
  const dispatch = useDispatch();
  const { id } = useParams<Params>();
  useEffect(() => {
    dispatch(setCountry(id, lang));
  }, [id, lang]);
  return (
        <div>
            <Header search={false} />
            <HeroSection />
            <DescriptionSection />
            <GallerySection />
            <MediaSection />
            <MapSection />
            <Widgets country={country} />
            <Footer />
        </div>
  );
};

const mapStateToProps = (state) => ({
  country: state.countries.country,
  lang: state.lang.lang,
});

export default connect<mapStateToPropsType, AppRootReducer>(mapStateToProps)(CountryOverviewPage);
