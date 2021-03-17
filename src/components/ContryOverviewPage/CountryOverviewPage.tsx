import React, { FC, useEffect, useState } from 'react';
import { connect, useDispatch } from 'react-redux';
import { useLocation, useParams } from 'react-router-dom';
import { countriesType } from 'Types';
import { setCountry } from 'Actions';
import burger from 'Assets/image/burger.svg';
import close from 'Assets/image/close.svg';
import { Header } from '../Header/Header';
import HeroSection from './HeroSection/HeroSection';
import DescriptionSection from './DescriptionSection/DescriptionSection';
import GallerySection from './GallerySection/GallerySection';
import MediaSection from './MediaSection/MediaSection';
import MapSection from './MapSection/MapSection';
import { Footer } from '../Footer/Footer';
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

const CountryOverviewPage: FC<mapStateToPropsType> = ({ lang, loading }) => {
  const [widgetsStyle, setWidgetsStyle] = useState<string>('');
  const { pathname } = useLocation<Location>();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  const dispatch = useDispatch();
  const { id } = useParams<Params>();
  useEffect(() => {
    dispatch(setCountry(id, lang));
  }, [id, lang]);
  const onWidgetsShow = () => {
    if (widgetsStyle) {
      setWidgetsStyle('');
    } else {
      setWidgetsStyle('widgets__mobile');
    }
  };
  const onWidgetsClose = () => {
    setWidgetsStyle('');
  };
  return (
        <div>
            <Header search={false} />
            <button
              type="button"
              onClick={onWidgetsShow}
              className={styles.burger}
            >
                <img
                  src={burger}
                  alt="menu"
                />
            </button>
            {loading
              ? <Loader />
              : (
                    <>
                        <div className={widgetsStyle}>
                            <HeroSection />
                            <button
                              type="button"
                              onClick={onWidgetsClose}
                              className="widgets__close"
                            >
                                <img
                                  src={close}
                                  alt="close"
                                />
                            </button>
                        </div>
                        <DescriptionSection />
                        <GallerySection />
                        <MediaSection />
                        <MapSection />
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
