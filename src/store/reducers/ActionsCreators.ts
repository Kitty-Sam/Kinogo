import { AppDispatch } from '../store';
import axios from 'axios';
import { fetchFilmsError, fetchFilmsSuccess, fetchFilms } from './filmSlice';
import { IFilm } from '../models/IFilm';

export const fetchingFilms = () => async (dispatch: AppDispatch) => {
    try {
        dispatch(fetchFilms());
        const response = await axios.get<IFilm[]>('https://jsonplaceholder.typicode.com/todos');
        const data = response.data;
        dispatch(fetchFilmsSuccess(data));
    } catch (e: any) {
        dispatch(fetchFilmsError(e.message));
    }
};
