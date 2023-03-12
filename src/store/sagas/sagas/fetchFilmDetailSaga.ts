import { call, put } from 'redux-saga/effects';
import { callAPI } from '~src/api/api';
import Config from 'react-native-config';
import { fetchFilmDetailsType } from '~store/sagas/sagasActions';
import { IFilmDetails } from '~store/models/IFilmDetails';
import { fetchFilmDetails, fetchFilmsError } from '~store/reducers/filmSlice';

export function* fetchFilmDetailWorker({ payload }: fetchFilmDetailsType) {
    const { id } = payload;
    try {
        // @ts-ignore
        let result = yield call(() =>
            callAPI({
                url: Config.API_DETAIL_URL!,
                config: {
                    params: { id: id },
                    headers: {
                        'X-RapidAPI-Key': Config.API_KEY,
                        'X-RapidAPI-Host': 'movie-details1.p.rapidapi.com',
                    },
                },
            }),
        );

        const data: IFilmDetails = result.data;
        yield put(fetchFilmDetails(data));
    } catch (e: any) {
        yield put(fetchFilmsError(e.message));
    }
}
