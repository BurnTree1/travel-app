import React, { FC } from 'react';
import { Header } from '../Header/Header';
import HeroSection from './HeroSection/HeroSection';
import DescriptionSection from './DescriptionSection/DescriptionSection';
import GallerySection from './GallerySection/GallerySection';
import MediaSection from './MediaSection/MediaSection';
import MapSection from './MapSection/MapSection';
import { Footer } from '../Footer/Footer';
import Widgets from './Widgets/Widgets';

export const CountryOverviewPage: FC = () => {
  console.log('rendered countryOverview yepo');
  return (
    <div>
      <Header search={false} />
      <HeroSection />
      <Widgets />
      <DescriptionSection />
      <GallerySection />
      <MediaSection />
      <MapSection />
      <Footer />
    </div>
  );
};
