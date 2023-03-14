import { AddNewOrderType } from '~store/sagas/sagasActions';
import { database } from '~src/helpers/getDataBaseURL';
import { Alert } from 'react-native';
import { put, select } from 'redux-saga/effects';
import { loadingUser, loadingUserSuccess, setCurrentOrder } from '~store/reducers/userSlice';
import { getCurrentUserId } from '~store/selectors/getUserInfo';

export function* addNewOrderWorker({ payload }: AddNewOrderType) {
    const { film, session, quantity, markedDate, id } = payload;
    const currentUserId: string = yield select(getCurrentUserId);

    try {
        yield put(loadingUser());

        yield database.ref(`/users/${currentUserId}`).child('order').child(`${id}`).set({
            date: markedDate,
            session,
            film,
            tickets: quantity,
        });
        yield put(setCurrentOrder(payload));
        yield put(loadingUserSuccess());
    } catch (e: any) {
        console.log('add new order error', e.message);
        Alert.alert('Please, try again');
        yield put(loadingUserSuccess());
    }
}
