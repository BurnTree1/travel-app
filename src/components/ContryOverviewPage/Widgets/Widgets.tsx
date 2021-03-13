import React from 'react';
import { Info } from './Info/Info';
import { Date } from './Date/Date';

const Widgets = ({ country }) => (
        <div>
            {country.name}
            <Date />
            <Info />
        </div>
);

export default Widgets;
