import React, {FC} from "react";
import {Header} from "../Header/Header";
import {Footer} from "../Footer/Footer";
import {Cards} from "./Cards/Cards";
import {connect} from "react-redux";
import {AppRootReducer} from "../../store";
import {countriesType} from "../../types/types";

type mapStateToPropsType = {
    countries: Array<countriesType>
}
type propsType = {
    countries: Array<countriesType>
}
const MainPage: FC<propsType> = (props) => {
    return (
        <div>
            <Header/>
            <Cards cardsArr={props.countries}/>
            <Footer/>
        </div>
    )
}

const mapStateToProps = (state: AppRootReducer) => ({
    countries: state.countries.countries
})

export default connect<mapStateToPropsType>(mapStateToProps, null,)(MainPage)