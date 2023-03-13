import { call, put } from 'redux-saga/effects';
import { callAPI } from '~src/api/api';
import Config from 'react-native-config';
import { FetchFilmDetailsType } from '~store/sagas/sagasActions';
import { IFilmDetails } from '~store/models/IFilmDetails';
import { fetchFilmDetails, fetchFilmsError } from '~store/reducers/filmSlice';

export function* fetchFilmDetailWorker({ payload }: FetchFilmDetailsType) {
    const { id } = payload;
    try {
        // @ts-ignore
        let result = yield call(() =>
            callAPI({
                url: Config.API_DETAIL_URL!,
                config: {
                    params: { id: id },
                    headers: {
                        'X-RapidAPI-Key': '6f9f1c21bbmsh38598045e1cf883p17ea6ejsneaa66e5d9136',
                        'X-RapidAPI-Host': 'movie-details1.p.rapidapi.com',
                    },
                },
            }),
        );

        const data: IFilmDetails = result.data;
        yield put(fetchFilmDetails(data));
    } catch (e: any) {
        console.log('error Detail', e.message);
        yield put(fetchFilmsError(e.message));
    }
}
