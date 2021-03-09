import React from 'react';
import './App.css'
import MainPage from "./MainPage/MainPage.tsx";
import {Route, Switch} from "react-router-dom";
import {CountryPage} from "./MainPage/CountryPage/CountryPage";

const App = () => (
    <div className='app'>
        <Switch>
            <Route path="/countries" render={() => <CountryPage/>}/>
            <Route exact path="/" render={() => <MainPage/>}/>
            <Route render={() => (<div>404 Not Found</div>)}/>
        </Switch>
    </div>
);

export default App;
