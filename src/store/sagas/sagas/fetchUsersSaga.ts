import { put } from 'redux-saga/effects';
import { fetchUsers, IUser, loadingUser, loadingUserSuccess } from '~store/reducers/userSlice';
import { FirebaseDatabaseTypes } from '@react-native-firebase/database';
import { database } from '~src/helpers/getDataBaseURL';

export function* fetchUsersWorker() {
    yield put(loadingUser());
    try {
        const reference: FirebaseDatabaseTypes.Reference = yield database.ref(`/users/`);
        const snapshot: FirebaseDatabaseTypes.DataSnapshot = yield reference.once('value');

        if (snapshot.val()) {
            const usersFB: IUser[] = Object.values(snapshot.val());
            yield put(fetchUsers(usersFB));
        }
        yield put(loadingUserSuccess());
    } catch (e: any) {
        yield put(loadingUserSuccess());
        console.warn(e);
    }
}
