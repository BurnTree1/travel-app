import React from 'react';
import './App.css';
import { Route, Switch } from 'react-router-dom';
import MainPage from './MainPage/MainPage.tsx';
import CountryOverviewPage from './ContryOverviewPage/CountryOverviewPage.tsx';
import Admin from './Admin/Admin';

const App = () => (
    <div className="app">
        <Switch>
            <Route path="/countries/:id" render={() => <CountryOverviewPage />} />
            <Route exact path="/admin" render={() => <Admin />} />
            <Route exact path="/" render={() => <MainPage />} />
            <Route render={() => (<div>404 Not Found</div>)} />
        </Switch>
    </div>
);

export default App;
