import { AppDispatch } from '../store';
import axios from 'axios';
import { fetchFilms, fetchFilmsError, fetchFilmsSuccess } from './filmSlice';
import { IFilm } from '../models/IFilm';

export const fetchingFilms = () => async (dispatch: AppDispatch) => {
    try {
        dispatch(fetchFilms());
        const response = await axios.get('https://ott-details.p.rapidapi.com/advancedsearch', {
            params: {
                start_year: '2022',
                end_year: '2023',
                min_imdb: '7',
                max_imdb: '9',
                language: 'english',
                type: 'movie',
                sort: 'latest',
            },
            headers: {
                'X-RapidAPI-Key': 'd5752dff17msh6c77d8672258d0fp155180jsn28f162bf846b',
                'X-RapidAPI-Host': 'ott-details.p.rapidapi.com',
            },
        });

        const data: IFilm[] = response.data.results;

        dispatch(fetchFilmsSuccess(data));
    } catch (e: any) {
        dispatch(fetchFilmsError(e.message));
    }
};
