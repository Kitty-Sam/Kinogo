import { put, select } from 'redux-saga/effects';
import { fetchOrders, loadingUserSuccess } from '~store/reducers/userSlice';
import { FirebaseDatabaseTypes } from '@react-native-firebase/database';
import { database } from '~src/helpers/getDataBaseURL';
import { getCurrentUserId } from '~store/selectors/getUserInfo';
import { AddNewOrderPayloadType } from '~store/sagas/sagasActions';

export function* fetchOrdersWorker() {
    const currentUserId: string = yield select(getCurrentUserId);
    try {
        const reference: FirebaseDatabaseTypes.Reference = yield database.ref(`/users/${currentUserId}/orders`);
        const snapshot: FirebaseDatabaseTypes.DataSnapshot = yield reference.once('value');

        if (snapshot.val()) {
            const ordersFB: AddNewOrderPayloadType[] = Object.values(snapshot.val());
            yield put(loadingUserSuccess());
            yield put(fetchOrders(ordersFB));
        } else {
            yield put(loadingUserSuccess());
            yield put(fetchOrders([]));
        }
    } catch (e: any) {
        yield put(loadingUserSuccess());
        console.warn(e);
    }
}
