export interface TypeCountryGlobal {
  TotalConfirmed: number;
  TotalDeaths: number;
  TotalRecovered: number;
  Country?: string;
}

export interface GlobalPropsType {
  globalData?: any;
  country?: any;
}

export interface TypeSummaryData {
  Global: TypeCountryGlobal;
  Countries: any[];
}
