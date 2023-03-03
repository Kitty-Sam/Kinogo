import { takeEvery } from 'redux-saga/effects';
import { sagasAction } from '~store/sagas/sagasActionTypes';
import { fetchFilmsWorker } from '~store/sagas/sagas/fetchFilmsSaga';
import { fetchTopFilmsWorker } from '~store/sagas/sagas/fetchTopFilmsSaga';

export function* watchClickSaga() {
    yield takeEvery(sagasAction.FETCH_FILMS, fetchFilmsWorker);
    yield takeEvery(sagasAction.FETCH_TOP_FILMS, fetchTopFilmsWorker);
}

export default function* rootSaga() {
    yield watchClickSaga();
}
