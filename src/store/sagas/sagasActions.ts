import { FETCH_FILM_DETAILS, FETCH_FILMS, FETCH_TOP_FILMS, FILTER_TOP_FILMS } from '~store/sagas/sagasActionTypes';

export const fetchFilms = () => {
    return { type: FETCH_FILMS };
};

export const fetchTopFilms = () => {
    return { type: FETCH_TOP_FILMS };
};

export interface FilterTopFilmPayloadType {
    lowYear: number;
    highYear: number;
    lowRating: number;
    highRating: number;
}
export const filterTopFilms = (payload: FilterTopFilmPayloadType) => {
    return { type: FILTER_TOP_FILMS, payload };
};

export type FilterTopFilmsType = ReturnType<typeof filterTopFilms>;

export interface FetchFilmDetailsPayloadType {
    id: string;
}
export const fetchFilmDetails = (payload: FetchFilmDetailsPayloadType) => {
    return { type: FETCH_FILM_DETAILS, payload };
};

export type fetchFilmDetailsType = ReturnType<typeof fetchFilmDetails>;
