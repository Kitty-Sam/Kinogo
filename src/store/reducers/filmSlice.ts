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
        fetchUsers(state) {
            state.isLoading = true;
        },
        fetchUsersSuccess(state, action: PayloadAction<IFilm[]>) {
            state.isLoading = false;
            state.error = '';
            state.films = action.payload;
        },
        fetchUsersError(state, action: PayloadAction<string>) {
            state.isLoading = false;
            state.error = action.payload;
        },
    },
});

export default filmSlice.reducer;
export const { fetchUsers, fetchUsersSuccess, fetchUsersError } = filmSlice.actions;
