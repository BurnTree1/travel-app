import React, {FC, useEffect, useState} from "react";
import {Header} from "../Header/Header";
import {Footer} from "../Footer/Footer";
import {Cards} from "./Cards/Cards";
import {connect, useDispatch} from "react-redux";
import {AppRootReducer} from "../../store";
import {countriesType} from "../../types/types";
import {filterCountries} from "../../store/actions";
import {setCountries} from "../../store/reducers/countries";

type mapStateToPropsType = {
    countries: Array<countriesType>
    foundCountries: Array<countriesType>
}
type mapDispatchToPropsType = {
    filterCountries: (text: string) => void
}
type propsType = {
    countries: Array<countriesType>
    findCountries: () => void
}
type props = propsType & mapStateToPropsType & mapDispatchToPropsType
const MainPage: FC<props> = (props) => {
    const [showFoundCountries, setshowFoundCountries] = useState<boolean>(false)
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(setCountries())
    }, [])
    const findCountries = (searchText: string): void => {
        props.filterCountries(searchText)
        searchText ? setshowFoundCountries(true) : setshowFoundCountries(false)
    }
    return (
        <div>
            <Header findCountries={findCountries} search={true}/>
            <Cards cardsArr={showFoundCountries ? props.foundCountries : props.countries}/>
            <Footer/>
        </div>
    )
}

const mapStateToProps = (state: AppRootReducer) => ({
    countries: state.countries.countries,
    foundCountries: state.countries.foundCountries
})

export default connect<mapStateToPropsType, mapDispatchToPropsType, AppRootReducer>(mapStateToProps, {filterCountries},)(MainPage)