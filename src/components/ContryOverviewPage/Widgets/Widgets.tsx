import React from 'react';
import { Info } from './Info/Info';
import { Dates } from './Dates/Dates';
import './Widgets.scss';

const Widgets = () => (
    <div className="widgets">
        <Dates />
        <Info />
    </div>
);

export default Widgets;
