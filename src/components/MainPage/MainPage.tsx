import React, {FC, useState} from "react";
import {Header} from "../Header/Header";
import {Footer} from "../Footer/Footer";
import {Cards} from "./Cards/Cards";
import {connect} from "react-redux";
import {AppRootReducer} from "../../store";
import {countriesType} from "../../types/types";
import {filterCountries} from "../../store/actions";

type mapStateToPropsType = {
    countries: Array<countriesType>
    foundCountries: Array<countriesType>
}
type mapDispatchToPropsType = {
    filterCountries: (text: string)=> void
}
type propsType = {
    countries: Array<countriesType>
    findCountries: ()=> void
}
type props = propsType & mapStateToPropsType & mapDispatchToPropsType
const MainPage: FC<props> = (props) => {
    const findCountries = (searchText: string): void => {
        props.filterCountries(searchText)
    }
    return (
        <div>
            <Header findCountries={findCountries}/>
            <Cards cardsArr={props.foundCountries[0] ? props.foundCountries : props.countries}/>
            <Footer/>
        </div>
    )
}

const mapStateToProps = (state: AppRootReducer) => ({
    countries: state.countries.countries,
    foundCountries: state.countries.foundCountries
})

export default connect<mapStateToPropsType, mapDispatchToPropsType, AppRootReducer>(mapStateToProps, {filterCountries},)(MainPage)