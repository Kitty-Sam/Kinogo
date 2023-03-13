import { IFilm } from '../models/IFilm';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IFilmDetails } from '~store/models/IFilmDetails';
import { ITopFilm } from '~store/models/ITopFilm';

interface FilmState {
    films: IFilm[];
    isLoading: boolean;
    error: string;
    filmDetails: IFilmDetails;
}

const initialState: FilmState = {
    films: [],
    isLoading: false,
    error: '',
    filmDetails: {} as IFilmDetails,
};

export const filmSlice = createSlice({
    name: 'films',
    initialState,
    reducers: {
        fetchFilms(state) {
            state.isLoading = true;
        },
        fetchFilmsSuccess(state, { payload }: PayloadAction<IFilm[]>) {
            state.error = '';
            state.films = payload;
            state.isLoading = false;
        },
        fetchFilmsError(state, { payload }: PayloadAction<string>) {
            state.isLoading = false;
            state.error = payload;
        },
        fetchFilmDetails(state, { payload }: PayloadAction<IFilmDetails>) {
            state.filmDetails = payload;
        },
    },
});

export default filmSlice.reducer;
export const { fetchFilms, fetchFilmsSuccess, fetchFilmsError, fetchFilmDetails } = filmSlice.actions;
