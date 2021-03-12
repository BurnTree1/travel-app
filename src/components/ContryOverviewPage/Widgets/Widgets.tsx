import React from 'react';

const Widgets = ({ country }) => {
  console.log('widgets rendered');

  return (
        <div>
            <p>{country.name}</p>
        </div>
  );
};

export default Widgets;
