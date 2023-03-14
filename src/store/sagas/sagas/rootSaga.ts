import { takeEvery, takeLatest } from 'redux-saga/effects';

import { fetchFilmsWorker } from '~store/sagas/sagas/fetchFilmsSaga';
import { fetchTopFilmsWorker } from '~store/sagas/sagas/fetchTopFilmsSaga';
import { filterTopFilmsWorker } from '~store/sagas/sagas/filterTopFilmsSaga';
import {
    ADD_NEW_ORDER,
    FETCH_FILM_DETAILS,
    FETCH_FILMS,
    FETCH_TOP_FILMS,
    FETCH_USERS,
    FILTER_TOP_FILMS,
    LOGIN_USER,
    LOGOUT_USER,
    REGISTER_USER,
} from '~store/sagas/sagasActionTypes';
import { fetchFilmDetailWorker } from '~store/sagas/sagas/fetchFilmDetailSaga';
import { registerWorker } from '~store/sagas/sagas/registerSaga';
import { loginWorker } from '~store/sagas/sagas/loginSaga';
import { logOutWorker } from '~store/sagas/sagas/logOutSaga';
import { fetchUsersWorker } from '~store/sagas/sagas/fetchUsersSaga';
import { addNewOrderWorker } from '~store/sagas/sagas/addNewOrderSaga';

export function* watchClickSaga() {
    yield takeEvery(FETCH_FILMS, fetchFilmsWorker);
    yield takeEvery(FETCH_TOP_FILMS, fetchTopFilmsWorker);
    yield takeLatest(FILTER_TOP_FILMS, filterTopFilmsWorker);
    yield takeLatest(FETCH_FILM_DETAILS, fetchFilmDetailWorker);
    yield takeLatest(REGISTER_USER, registerWorker);
    yield takeLatest(LOGIN_USER, loginWorker);
    yield takeLatest(LOGOUT_USER, logOutWorker);
    yield takeLatest(FETCH_USERS, fetchUsersWorker);
    yield takeLatest(ADD_NEW_ORDER, addNewOrderWorker);
}

export default function* rootSaga() {
    yield watchClickSaga();
}
