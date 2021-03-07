import React from "react";
import {Header} from "../Header/Header";
import {Footer} from "../Footer/Footer";
import {Cards} from "./Cards/Cards";

export const MainPage = () => {
    return (
        <div>
            <Header/>
            <Cards/>
            <Footer/>
        </div>
    )
}