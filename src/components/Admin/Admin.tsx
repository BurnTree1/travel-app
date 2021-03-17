import React, { FC, useState } from 'react';
import { Footer } from '../Footer/Footer';
import { Header } from '../Header/Header';
import AdminNav from './AdminNav/AdminNav';
import CountryPanel from './CountryPanel/CountryPanel';
import './Admin.scss';
import SightsPanel from './SightsPanel/SightsPanel';

const Admin: FC = () => {
  const [isCountryAdd, setIsCountryAdd] = useState(true);
  const [isSightsAdd, setIsSightsAdd] = useState(false);
  const addCountry = () => {
    setIsSightsAdd(false);
    setIsCountryAdd(true);
  };
  const addSights = () => {
    setIsCountryAdd(false);
    setIsSightsAdd(true);
  };
  return (
        <div className="admin__wrap">
            <Header search={false} />
            <main className="admin">
                <AdminNav addCountry={addCountry} addSights={addSights} />
                {isCountryAdd && <CountryPanel />}
                {isSightsAdd && <SightsPanel />}
            </main>
            <Footer />
        </div>
  );
};

export default Admin;
