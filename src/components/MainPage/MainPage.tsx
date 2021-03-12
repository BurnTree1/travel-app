import React, { FC, useEffect, useState } from 'react';
import { connect, useDispatch } from 'react-redux';
import { Header } from '../Header/Header';
import { Footer } from '../Footer/Footer';
import { Cards } from './Cards/Cards';
import { AppRootReducer } from '../../store';
import { countriesType } from '../../types/types';
import { filterCountries } from '../../store/actions';
import { setCountries } from '../../store/reducers/countries';

type mapStateToPropsType = {
  countries: Array<countriesType>
  foundCountries: Array<countriesType>
};
type propsType = {
  countries: Array<countriesType>
  findCountries: () => void
};
type props = propsType & mapStateToPropsType;
const MainPage: FC<props> = (props) => {
  const { foundCountries, countries } = props;
  const [showFoundCountries, setshowFoundCountries] = useState<boolean>(false);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(setCountries());
  }, []);
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
            <Cards cardsArr={showFoundCountries ? foundCountries : countries} />
            <Footer />
        </div>
  );
};

const mapStateToProps = (state) => ({
  countries: state.countries.countries,
  foundCountries: state.countries.foundCountries,
});

export default connect<mapStateToPropsType, AppRootReducer>(mapStateToProps)(MainPage);
