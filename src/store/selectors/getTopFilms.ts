import { RootState } from '~store/store';

export const getTopFilms = (state: RootState) => state.topFilms;
export const getOnlyTopFilms = (state: RootState) => state.topFilms.topFilms;
