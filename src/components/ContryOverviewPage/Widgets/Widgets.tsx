import React from 'react';
import { Info } from './Info/Info';
import { Dates } from './Dates/Dates';

const Widgets = ({ country }) => (
    <div>
        {country.name}
        <Dates />
        <Info />
    </div>
);

export default Widgets;
