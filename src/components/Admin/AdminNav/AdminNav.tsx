import React from 'react';
import { Button } from '@material-ui/core';
import './AdminNav.scss';

const AdminNav = (props) => {
  const onCountryAdd = () => {
    props.addCountry();
  };
  return (
        <div className="admin__nav">
            <Button className="nav__btn" onClick={onCountryAdd} variant="contained" size="large" color="primary">
                Add country
            </Button>
        </div>
  );
};

export default AdminNav;
