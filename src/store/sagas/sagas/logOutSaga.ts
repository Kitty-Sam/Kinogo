import { signOut } from 'firebase/auth';
import { auth } from '../../../../firebase-config';
import { Alert } from 'react-native';
import { put } from 'redux-saga/effects';
import { isLogged } from '~store/reducers/userSlice';

export function* logOutWorker() {
    try {
        yield signOut(auth);
        yield put(isLogged(false));
    } catch (e) {
        Alert.alert('Please, try again');
    }
}
