import { takeEvery, takeLatest } from 'redux-saga/effects';

import { fetchFilmsWorker } from '~store/sagas/sagas/fetchFilmsSaga';
import { fetchTopFilmsWorker } from '~store/sagas/sagas/fetchTopFilmsSaga';
import { filterTopFilmsWorker } from '~store/sagas/sagas/filterTopFilmsSaga';
import { FETCH_FILM_DETAILS, FETCH_FILMS, FETCH_TOP_FILMS, FILTER_TOP_FILMS } from '~store/sagas/sagasActionTypes';
import { fetchFilmDetailWorker } from '~store/sagas/sagas/fetchFilmDetailSaga';

export function* watchClickSaga() {
    yield takeEvery(FETCH_FILMS, fetchFilmsWorker);
    yield takeEvery(FETCH_TOP_FILMS, fetchTopFilmsWorker);
    yield takeLatest(FILTER_TOP_FILMS, filterTopFilmsWorker);
    yield takeLatest(FETCH_FILM_DETAILS, fetchFilmDetailWorker);
}

export default function* rootSaga() {
    yield watchClickSaga();
}
