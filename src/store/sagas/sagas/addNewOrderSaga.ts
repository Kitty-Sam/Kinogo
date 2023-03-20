import { AddNewOrderType } from '~store/sagas/sagasActions';
import { database } from '~src/helpers/getDataBaseURL';
import { Alert } from 'react-native';
import { put, select } from 'redux-saga/effects';
import { addOrder, loadingUser, loadingUserSuccess } from '~store/reducers/userSlice';
import { getCurrentUserId } from '~store/selectors/getUserInfo';

export function* addNewOrderWorker({ payload }: AddNewOrderType) {
    const { film, session, quantity, markedDate, id } = payload;
    const currentUserId: string = yield select(getCurrentUserId);

    try {
        yield put(loadingUser());

        yield database.ref(`/users/${currentUserId}`).child('orders').child(`${id}`).set({
            id,
            markedDate,
            session,
            film,
            quantity,
        });
        yield put(addOrder(payload));
        yield put(loadingUserSuccess());
    } catch (e: any) {
        console.log('add new order error', e.message);
        Alert.alert('Please, try again');
        yield put(loadingUserSuccess());
    }
}
