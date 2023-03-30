import { database } from '~src/helpers/getDataBaseURL';
import { Alert } from 'react-native';
import { put, select } from 'redux-saga/effects';
import { loadingUser, loadingUserSuccess, removeOrder } from '~store/reducers/userSlice';
import { getCurrentUserId } from '~store/selectors/getUserInfo';
import { RemoveOrderType } from '~store/sagas/sagasActions';

export function* removeOrderWorker({ payload }: RemoveOrderType) {
    const { id } = payload;
    const currentUserId: string = yield select(getCurrentUserId);

    try {
        yield put(loadingUser());
        yield database.ref(`/users/${currentUserId}`).child('orders').child(`${id}`).remove();
        yield put(removeOrder(payload));
        yield put(loadingUserSuccess());
    } catch (e: any) {
        console.log('remove new order error', e.message);
        Alert.alert('Please, try again');
        yield put(loadingUserSuccess());
    }
}
