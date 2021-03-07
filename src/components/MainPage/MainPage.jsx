import React from "react";
import {Header} from "../Header/Header";
import {Footer} from "../Footer/Footer";
import {Cards} from "./Cards/Cards";
import {connect} from "react-redux";

const MainPage = (props) => {
    return (
        <div>
            <Header/>
            <Cards cardsArr={props.countries}/>
            <Footer/>
        </div>
    )
}

const mapStateToProps = (state) => ({
    countries: state.countryCards.countries
})

export default connect(mapStateToProps, null,)(MainPage)