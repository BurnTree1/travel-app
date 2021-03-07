import { combineReducers } from 'redux';
import countries from './countries';
import {countryCards} from "./countryCards";

export default combineReducers({
  countries,
  countryCards,
});
