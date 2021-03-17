export module Apimodels {
  export interface Result {
    name: string;
    height: string;
    mass: string;
    hair_color: string;
    skin_color: string;
    eye_color: string;
    birth_year: string;
    gender: string;
    homeworld: string;
    films: string[];
    species: string[];
    vehicles: string[];
    starships: string[];
    created: Date;
    edited: Date;
    url: string;
  }

  export interface ISWData {
    count: number;
    next: string;
    previous?: string;
    results: Result[];

  }
}
