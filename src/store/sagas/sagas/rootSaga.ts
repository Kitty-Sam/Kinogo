import { takeEvery, takeLatest } from 'redux-saga/effects';

import { fetchFilmsWorker } from '~store/sagas/sagas/fetchFilmsSaga';
import { fetchTopFilmsWorker } from '~store/sagas/sagas/fetchTopFilmsSaga';
import { filterTopFilmsWorker } from '~store/sagas/sagas/filterTopFilmsSaga';
import {
    ADD_NEW_ORDER,
    FETCH_FILM_DETAILS,
    FETCH_FILMS,
    FETCH_ORDERS,
    FETCH_TOP_FILMS,
    FETCH_USERS,
    FILTER_TOP_FILMS,
    GOOGLE_LOGIN_USER,
    GOOGLE_LOGOUT_USER,
    LOGIN_USER,
    LOGOUT_USER,
    REGISTER_USER,
    REMOVE_ORDER,
    UPDATE_USER,
} from '~store/sagas/sagasActionTypes';
import { fetchFilmDetailWorker } from '~store/sagas/sagas/fetchFilmDetailSaga';
import { registerWorker } from '~store/sagas/sagas/registerSaga';
import { loginWorker } from '~store/sagas/sagas/loginSaga';
import { logOutWorker } from '~store/sagas/sagas/logOutSaga';
import { fetchUsersWorker } from '~store/sagas/sagas/fetchUsersSaga';
import { addNewOrderWorker } from '~store/sagas/sagas/addNewOrderSaga';
import { fetchOrdersWorker } from '~store/sagas/sagas/fetchOrdersSaga';
import { removeOrderWorker } from '~store/sagas/sagas/removeOrderSaga';
import { updateUserInfoWorker } from '~store/sagas/sagas/updateUserInfoSaga';
import { googleSignInWorker } from '~store/sagas/sagas/googleSignInSaga';
import { googleSignOutWorker } from '~store/sagas/sagas/googleSignOutSaga';

export function* watchClickSaga() {
    yield takeEvery(FETCH_FILMS, fetchFilmsWorker);
    yield takeEvery(FETCH_TOP_FILMS, fetchTopFilmsWorker);
    yield takeLatest(FILTER_TOP_FILMS, filterTopFilmsWorker);
    yield takeLatest(FETCH_FILM_DETAILS, fetchFilmDetailWorker);
    yield takeLatest(REGISTER_USER, registerWorker);
    yield takeLatest(LOGIN_USER, loginWorker);
    yield takeLatest(LOGOUT_USER, logOutWorker);
    yield takeLatest(UPDATE_USER, updateUserInfoWorker);
    yield takeLatest(FETCH_USERS, fetchUsersWorker);
    yield takeLatest(ADD_NEW_ORDER, addNewOrderWorker);
    yield takeLatest(REMOVE_ORDER, removeOrderWorker);
    yield takeLatest(FETCH_ORDERS, fetchOrdersWorker);
    yield takeLatest(GOOGLE_LOGIN_USER, googleSignInWorker);
    yield takeLatest(GOOGLE_LOGOUT_USER, googleSignOutWorker);
}

export default function* rootSaga() {
    yield watchClickSaga();
}
