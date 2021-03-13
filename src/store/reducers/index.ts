import { combineReducers } from 'redux';
import countries from './countries';
import lang from './language';
import widgets from './widgets';

export default combineReducers({
  countries,
  lang,
  widgets,
});
