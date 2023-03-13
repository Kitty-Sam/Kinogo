import { call, put } from 'redux-saga/effects';
import { callAPI } from '~src/api/api';
import { fetchFilms, fetchFilmsError, fetchFilmsSuccess } from '~store/reducers/filmSlice';
import { IFilm } from '~store/models/IFilm';
import { config } from '~src/api/defaultRequest';
import Config from 'react-native-config';

export function* fetchFilmsWorker() {
    console.log('api key', Config.API_KEY);
    yield put(fetchFilms());
    try {
        // @ts-ignore
        let result = yield call(() =>
            callAPI({
                url: Config.API_URL!,
                config,
            }),
        );

        console.log('result', result);

        const data: IFilm[] = result.data.results;
        yield put(fetchFilmsSuccess(data));
    } catch (e: any) {
        console.log('error Films', e.message);
        yield put(fetchFilmsError(e.message));
    }
}
