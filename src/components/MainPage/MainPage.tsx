import React, { FC, useEffect, useState } from 'react';
import { connect, useDispatch } from 'react-redux';
import { countriesType } from 'Types';
import { filterCountries, setCountries } from 'Actions';
import { Header } from '../Header/Header';
import { Footer } from '../Footer/Footer';
import { Cards } from './Cards/Cards';
import { Loader } from '../Loader/Loader';

type mapStateToPropsType = {
  countries: Array<countriesType>
  foundCountries: Array<countriesType>
  lang: string
  loading: boolean
  deletedCountryId: number
};
type propsType = {
  countries: Array<countriesType>
  findCountries: () => void
};
type props = propsType & mapStateToPropsType;
const MainPage: FC<props> = (props) => {
  const {
    foundCountries, countries, lang, loading, deletedCountryId,
  } = props;
  const [showFoundCountries, setshowFoundCountries] = useState<boolean>(false);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(setCountries(lang));
  }, [lang, deletedCountryId]);
  const findCountries = (searchText: string): void => {
    dispatch(filterCountries(searchText));
    if (searchText) {
      setshowFoundCountries(true);
    } else {
      setshowFoundCountries(false);
    }
  };
  return (
        <div>
            <Header findCountries={findCountries} search />
            {loading
              ? <Loader />
              : (
                <Cards cardsArr={showFoundCountries ? foundCountries : countries} />
              )}
            <Footer />
        </div>
  );
};

const mapStateToProps = (state) => ({
  countries: state.countries.countries,
  foundCountries: state.countries.foundCountries,
  lang: state.lang.lang,
  loading: state.countries.countriesLoading,
  deletedCountryId: state.admin.deletedCountryId,
});

export default connect<mapStateToPropsType>(mapStateToProps)(MainPage);
