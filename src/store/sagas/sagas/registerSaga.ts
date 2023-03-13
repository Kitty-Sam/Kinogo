import { RegisterUserType } from '~store/sagas/sagasActions';
import { UserCredential } from '@firebase/auth';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../../../firebase-config';
import { database } from '~src/helpers/getDataBaseURL';
import { Alert } from 'react-native';
import { put } from 'redux-saga/effects';
import { loadingUser, loadingUserSuccess } from '~store/reducers/userSlice';

export function* registerWorker({ payload }: RegisterUserType) {
    const { name, password, surname, email } = payload;

    try {
        yield put(loadingUser());
        const userCredential: UserCredential = yield createUserWithEmailAndPassword(auth, email, password);

        const { user } = userCredential;

        yield database.ref('/users/').child(`${user.uid}`).set({
            userName: name,
            userSurname: surname,
            userEmail: email,
            userId: user.uid,
            photo: 'https://us.123rf.com/450wm/alcarrera/alcarrera2005/alcarrera200500001/148861725-orangutan-tanjung-puting-national-park-borneo-indonesia.jpg?ver=6',
        });
        yield put(loadingUserSuccess());
        Alert.alert('Please, login');
    } catch (e: any) {
        console.log('register error', e.message);
        Alert.alert('Please, try again');
    }
}
