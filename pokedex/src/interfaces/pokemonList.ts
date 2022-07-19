export interface IPokemonListResultsObjeto {
  name: string;
  url: string;
}

export interface IPokemonList {
  count?: number;
  next?: string;
  previous?: string;
  results: IPokemonListResultsObjeto[];
}
