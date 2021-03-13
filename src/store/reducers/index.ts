import { combineReducers } from 'redux';
import countries from './countries';
import lang from './language';
import user from './user';

export default combineReducers({
  countries,
  lang,
  user,
});
