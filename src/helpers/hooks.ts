export const useToOffsetDate = (offset) => {
  function addZero(i) {
    if (i < 10) {
      i = `0${i}`;
    }
    return i;
  }
  const countryDate = new Date(new Date().getTime() + (offset * 3600 * 1000));
  const hrs = countryDate.getUTCHours();
  const mins = addZero(countryDate.getUTCMinutes());
  const secs = addZero(countryDate.getUTCSeconds());
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
