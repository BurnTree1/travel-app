import { combineReducers } from 'redux';
import countries from './countries';
import lang from './language';
import widgets from './widgets';
import user from './user';

export default combineReducers({
  countries,
  lang,
  widgets,
  user,
});
