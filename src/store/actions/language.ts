export const CHANGE_LANGUAGE = 'CHANGE_LANGUAGE';

type changeLanguageType = {
  type: typeof CHANGE_LANGUAGE
  payload: { lang: string }
};
export const changeLanguage = (lang: string): changeLanguageType => ({
  type: CHANGE_LANGUAGE,
  payload: { lang },
});
