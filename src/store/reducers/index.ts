import { combineReducers } from 'redux';
import countries from './countries';
import lang from './language';
import widgets from './widgets';
import user from './user';
import admin from './admin';

export default combineReducers({
  countries,
  lang,
  widgets,
  user,
  admin,
});
