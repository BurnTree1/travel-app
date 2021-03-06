import _ from 'lodash';
import { FETCH_COUNTRIES } from 'Actions';

const initProcess = {};

const handlers = {
  [FETCH_COUNTRIES]: (state, { countries }) => ({
    ...state,
    countries,
  }),
};

export default (countries = initProcess, { type, payload }) => _.get(handlers, type, () => countries)(countries, payload);
