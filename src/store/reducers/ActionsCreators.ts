import { AppDispatch } from '../store';
import axios from 'axios';
import { IFilm } from '../models/IFilm';
import { filmSlice } from './filmSlice';

export const fetchFilms = () => async (dispatch: AppDispatch) => {
    try {
        dispatch(filmSlice.actions.fetchUsers());
        const response = await axios.get<IFilm[]>('https://jsonplaceholder.typicode.com/todos');
        dispatch(filmSlice.actions.fetchUsersSuccess(response.data));
    } catch (e: any) {
        dispatch(filmSlice.actions.fetchUsersError(e.message));
    }
};
