export interface IFilmDetails {
    actors: Array<{
        id: string;
        name: string;
    }>;
    countries: string[];
    creator_names: string[];
    director_names: string[];
    description: string;
    genres: string[];
    languages: string[];
    id: string;
    image: string;
    imdb_type: string;
    popularity: number;
    release_year: null | number;
    runtime?: string;
    title: string;
    version: number;
}
