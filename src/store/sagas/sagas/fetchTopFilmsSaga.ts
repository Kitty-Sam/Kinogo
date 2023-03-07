import { call, put } from 'redux-saga/effects';
import { callAPI } from '~src/api/api';
import { fetchTopFilms, fetchTopFilmsError, fetchTopFilmsSuccess } from '~store/reducers/topFilmSlice';
import { ITopFilm } from '~store/models/ITopFilm';
import Config from 'react-native-config';
import { API_TOP_URL } from '~src/api/defaultRequest';

export function* fetchTopFilmsWorker() {
    yield put(fetchTopFilms());
    try {
        // @ts-ignore
        let result: any = yield call(() =>
            callAPI({
                url: API_TOP_URL,
                config: {
                    headers: {
                        'X-RapidAPI-Key': Config.API_KEY,
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
