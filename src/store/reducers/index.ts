import { combineReducers } from 'redux';
import countries from './countries';
import lang from './language';

export default combineReducers({
  countries,
  lang,
});
