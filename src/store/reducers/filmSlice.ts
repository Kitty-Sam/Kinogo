import { IFilm } from '../models/IFilm';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface FilmState {
    films: IFilm[];
    isLoading: boolean;
    error: string;
}

const initialState: FilmState = {
    films: [],
    isLoading: false,
    error: '',
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
    },
});

export default filmSlice.reducer;
export const { fetchFilms, fetchFilmsSuccess, fetchFilmsError } = filmSlice.actions;
