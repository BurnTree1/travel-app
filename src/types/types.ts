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
  custom?: boolean | undefined
};

type customLocalisationsType = {
  lang: string
  name: string
  capital: string
  description: string
};

export type customCountryType = {
  imageUrl: string
  videoUrl: string
  flagImageUrl: string
  currency: string
  ISO: string
  localizations: Array<customLocalisationsType>
  timeZone: string
  custom: boolean
  mapPoint: { coordinates: Array<number> }
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

export interface IReduxStateAdmin {
  deletedCountryId: number;
}

export interface IReduxState extends IReduxStateCountries, IReduxStateLanguage {
  error?: Error;
}
