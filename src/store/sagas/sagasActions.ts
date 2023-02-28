import { sagasAction } from '~store/sagas/sagasActionTypes';

export const fetchFilms = () => {
    return { type: sagasAction.FETCH_FILMS };
};

export const fetchTopFilms = () => {
    return { type: sagasAction.FETCH_TOP_FILMS };
};
