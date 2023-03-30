import { UserCredential } from '@firebase/auth';
import auth from '@react-native-firebase/auth';
import { Alert } from 'react-native';
import { put } from 'redux-saga/effects';
import { isLogged, IUser, loadingUserSuccess, setCurrentUser } from '~store/reducers/userSlice';
import { GoogleSignin } from '@react-native-google-signin/google-signin';
import { database } from '~src/helpers/getDataBaseURL';
import { FirebaseDatabaseTypes } from '@react-native-firebase/database';

export function* googleSignInWorker() {
    try {
        yield GoogleSignin.hasPlayServices();
        const { idToken } = yield GoogleSignin.signIn();
        const credential = auth.GoogleAuthProvider.credential(idToken);
        const userCred: UserCredential = yield auth().signInWithCredential(credential);

        const { uid: userId, displayName: userName, email: userEmail, photoURL: photo } = userCred.user;

        yield put(setCurrentUser({ id: userId }));

        const reference: FirebaseDatabaseTypes.Reference = yield database.ref(`/users/`);
        const snapshot: FirebaseDatabaseTypes.DataSnapshot = yield reference.once('value');

        if (snapshot.val()) {
            const users: IUser[] = Object.values(snapshot.val());
            const currentUser = users.find((user) => user.userId === userId);

            if (!currentUser) {
                yield database
                    .ref('/users/')
                    .child(`${userId}`)
                    .set({ userId, userEmail, userName, photo, userSurname: '' });
            }
        }

        yield put(loadingUserSuccess());
        yield put(isLogged(true));
    } catch (e: any) {
        console.log('google login', e.message);
        Alert.alert('Please, try again');
        yield put(loadingUserSuccess());
    }
}
