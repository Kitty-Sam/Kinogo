import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ITopFilm } from '~store/models/ITopFilm';

interface TopFilmState {
    topFilms: ITopFilm[];
    isLoading: boolean;
    error: string;
}

const initialState: TopFilmState = {
    topFilms: [],
    isLoading: false,
    error: '',
};

export const topFilmSlice = createSlice({
    name: 'topFilms',
    initialState,
    reducers: {
        fetchTopFilms(state) {
            state.isLoading = true;
        },
        fetchTopFilmsSuccess(state, { payload }: PayloadAction<ITopFilm[]>) {
            state.error = '';
            state.topFilms = payload;
            state.isLoading = false;
        },
        fetchTopFilmsError(state, { payload }: PayloadAction<string>) {
            state.isLoading = false;
            state.error = payload;
        },
    },
});

export default topFilmSlice.reducer;
export const { fetchTopFilms, fetchTopFilmsSuccess, fetchTopFilmsError } = topFilmSlice.actions;
