import { LoginUserType } from '~store/sagas/sagasActions';
import { UserCredential } from '@firebase/auth';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../../../firebase-config';
import { Alert } from 'react-native';
import { put } from 'redux-saga/effects';
import { isLogged, loadingUser, loadingUserSuccess, setCurrentUser } from '~store/reducers/userSlice';

export function* loginWorker({ payload }: LoginUserType) {
    const { password, email } = payload;

    try {
        yield put(loadingUser());
        const userCredential: UserCredential = yield signInWithEmailAndPassword(auth, email, password);

        yield put(setCurrentUser({ id: userCredential.user.uid }));
        yield put(loadingUserSuccess());
        yield put(isLogged(true));
    } catch (e: any) {
        console.log('register login', e.message);
        Alert.alert('Please, try again');
        yield put(loadingUserSuccess());
    }
}
