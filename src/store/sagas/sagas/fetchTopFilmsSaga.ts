import { call, put } from 'redux-saga/effects';
import { callAPI } from '~src/api/api';
import { fetchTopFilms, fetchTopFilmsError, fetchTopFilmsSuccess } from '~store/reducers/topFilmSlice';
import { ITopFilm } from '~store/models/ITopFilm';
import Config from 'react-native-config';

export function* fetchTopFilmsWorker() {
    yield put(fetchTopFilms());
    try {
        // @ts-ignore
        let result: any = yield call(() =>
            callAPI({
                url: Config.API_TOP_URL!,
                config: {
                    headers: {
                        'X-RapidAPI-Key': '6f9f1c21bbmsh38598045e1cf883p17ea6ejsneaa66e5d9136',
                        'X-RapidAPI-Host': 'imdb-top-100-movies.p.rapidapi.com',
                    },
                },
            }),
        );

        const data: ITopFilm[] = result.data;
        yield put(fetchTopFilmsSuccess(data));
    } catch (e: any) {
        console.log('error Top', e.message);
        yield put(fetchTopFilmsError(e.message));
    }
}
