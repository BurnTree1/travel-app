export type sight = {
  description: string;
  imageUrl: string;
  name: string;
  score: any[];
};

export type countriesType = {
  id: number
  name: string
  capital: string
  description: string
  mapPoint: any
  imageUrl: string
  videoUrl: string
  flagImageUrl: string
  currency: string
  ISO: string
  sights: sight[]
  timeZone: string
};

export interface IReduxStateCountries {
  countries: countriesType[];
  foundCountries: countriesType[];
  country: countriesType;
  countryLoading: boolean;
  countriesLoading: boolean;
}

export interface IReduxStateLanguage {
  lang: string;
}

export interface IReduxState extends IReduxStateCountries, IReduxStateLanguage {
  error?: Error;
}
