import lang from './language';
import { changeLanguage } from '../actions/language';

test('change language', () => {
  const state = {
    lang: 'en',
  };
  const newState = lang(state, changeLanguage('ru'));
  expect(newState.lang).toBe('ru');
});
