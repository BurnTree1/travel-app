import React, { FC } from 'react';
import { Button } from '@material-ui/core';
import './AdminNav.scss';

type propsType = {
  addCountry: ()=> void
  addSights: ()=> void
};
const AdminNav: FC<propsType> = ({ addCountry, addSights }) => {
  const onCountryAdd = () => {
    addCountry();
  };
  const onSightsAdd = () => {
    addSights();
  };
  return (
        <div className="admin__nav">
            <Button className="nav__btn" onClick={onCountryAdd} variant="contained" size="large" color="primary">
                Add country
            </Button>
            <Button className="nav__btn" onClick={onSightsAdd} variant="contained" size="large" color="primary">
                Add sights
            </Button>
        </div>
  );
};

export default AdminNav;
