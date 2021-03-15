import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { HashRouter } from 'react-router-dom';
import { IntlProvider } from 'react-intl';
import store from './store';
import App from './components/App';
import English from './lang/en.json';
import Dutch from './lang/de.json';
import Russian from './lang/ru.json';

const dictionary = { en: English, de: Dutch, ru: Russian };

const Root = () => {
  const state = store.getState();
  const [locale, setLocale] = useState(state.lang.lang);
  let subscription;

  function changeLocale() {
    const newLocale = store.getState().lang.lang;
    if (locale !== newLocale) {
      setLocale(newLocale);
    }
  }

  useEffect(() => {
    store.subscribe(() => {
      subscription = changeLocale();
    });

    return () => {
      if (subscription) {
        subscription();
      }
    };
  });

  return (
    <Provider store={store}>
        <HashRouter>
            <IntlProvider locale={locale} defaultLocale="en" messages={dictionary[locale]}>
                <App />
            </IntlProvider>
        </HashRouter>
    </Provider>
  );
};

ReactDOM.render(<Root />, document.getElementById('root'));
