import { call, put } from 'redux-saga/effects';
import { callAPI } from '~src/api/api';
import { fetchTopFilms, fetchTopFilmsError, fetchTopFilmsSuccess } from '~store/reducers/topFilmSlice';
import { ITopFilm } from '~store/models/ITopFilm';

export function* fetchTopFilmsWorker() {
    yield put(fetchTopFilms());
    try {
        // @ts-ignore
        let result: any = yield call(() =>
            callAPI({
                url: 'https://imdb-top-100-movies.p.rapidapi.com/',
                config: {
                    headers: {
                        'X-RapidAPI-Key': 'd5752dff17msh6c77d8672258d0fp155180jsn28f162bf846b',
                        'X-RapidAPI-Host': 'imdb-top-100-movies.p.rapidapi.com',
                    },
                },
            }),
        );

        const data: ITopFilm[] = result.data;
        yield put(fetchTopFilmsSuccess(data));
    } catch (e: any) {
        yield put(fetchTopFilmsError(e.message));
    }
}
