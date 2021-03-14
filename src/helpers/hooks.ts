export const useToOffsetDate = (offset) => {
  const countryDate = new Date(new Date().getTime() + (offset * 3600 * 1000));
  const hrs = countryDate.getUTCHours();
  const mins = countryDate.getUTCMinutes();
  const secs = countryDate.getUTCSeconds();
  return `${hrs}:${mins}:${secs}`;
};

export const useLocalLang = (lang: string) => {
  if (!localStorage.getItem('lang')) {
    localStorage.setItem('lang', lang);
  }
  const localLang = localStorage.getItem('lang');
  return localLang;
};

export const useSetLocalLang = (value: string) => {
  localStorage.setItem('lang', value);
};
