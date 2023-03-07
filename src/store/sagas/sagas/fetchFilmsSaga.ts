import { call, put } from 'redux-saga/effects';
import { callAPI } from '~src/api/api';
import { fetchFilms, fetchFilmsError, fetchFilmsSuccess } from '~store/reducers/filmSlice';
import { IFilm } from '~store/models/IFilm';
import { API_URL, config } from '~src/api/defaultRequest';
import Config from 'react-native-config';

export function* fetchFilmsWorker() {
    yield put(fetchFilms());
    try {
        // @ts-ignore
        let result: any = yield call(() =>
            callAPI({
                url: API_URL,
                config: config,
            }),
        );

        const data: IFilm[] = result.data.results;
        yield put(fetchFilmsSuccess(data));
    } catch (e: any) {
        yield put(fetchFilmsError(e.message));
    }
}
