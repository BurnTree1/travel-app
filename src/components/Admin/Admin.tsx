import React, { useState } from 'react';
import { Footer } from '../Footer/Footer';
import { Header } from '../Header/Header';
import AdminNav from './AdminNav/AdminNav';
import AdminPanel from './AdminPanel/AdminPanel';
import './Admin.scss';

const Admin = () => {
  const [isCountryAdd, setIsCountryAdd] = useState(true);
  const addCountry = () => {
    setIsCountryAdd(true);
  };
  return (
        <div className="admin__wrap">
            <Header search={false} />
            <main className="admin">
                <AdminNav addCountry={addCountry} />
                {isCountryAdd && <AdminPanel />}
            </main>
            <Footer />
        </div>
  );
};

export default Admin;
