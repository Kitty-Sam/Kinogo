import { call, put } from 'redux-saga/effects';
import { callAPI } from '~src/api/api';
import { fetchFilms, fetchFilmsError, fetchFilmsSuccess } from '~store/reducers/filmSlice';
import { IFilm } from '~store/models/IFilm';
import Config from 'react-native-config';

export function* fetchFilmsWorker() {
    yield put(fetchFilms());
    try {
        // @ts-ignore
        let result: any = yield call(() =>
            callAPI({
                url: 'https://ott-details.p.rapidapi.com/advancedsearch',
                config: {
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
                        'X-RapidAPI-Key': Config.API_KEY,
                        'X-RapidAPI-Host': 'ott-details.p.rapidapi.com',
                    },
                },
            }),
        );

        const data: IFilm[] = result.data.results;
        yield put(fetchFilmsSuccess(data));
    } catch (e: any) {
        yield put(fetchFilmsError(e.message));
    }
}
