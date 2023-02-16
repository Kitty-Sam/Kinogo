import { AppDispatch } from '../store';
import axios from 'axios';
import { filmSlice } from './filmSlice';
import { IFilm } from '../models/IFilm';

export const fetchFilms = () => async (dispatch: AppDispatch) => {
    try {
        dispatch(filmSlice.actions.fetchUsers());
        const response = await axios.get<IFilm[]>('https://jsonplaceholder.typicode.com/todos');
        const data = response.data;
        dispatch(filmSlice.actions.fetchUsersSuccess(data));
    } catch (e: any) {
        dispatch(filmSlice.actions.fetchUsersError(e.message));
    }
};
