export type sight = {
  _id: string;
  description: string;
  imageUrl: string;
  name: string;
  scores: any[];
};

export type countriesType = {
  id: number
  name: string
  capital: string
  description: string
  mapPoint: {
    coordinates: [number, number]
  }
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

export interface IScoreData {
  user: string;
  name: string;
  img: any;
  score: number;
}
