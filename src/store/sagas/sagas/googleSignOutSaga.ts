import auth from '@react-native-firebase/auth';
import { Alert } from 'react-native';
import { put } from 'redux-saga/effects';
import { isLogged, loadingUserSuccess } from '~store/reducers/userSlice';
import { GoogleSignin } from '@react-native-google-signin/google-signin';

export function* googleSignOutWorker() {
    try {
        yield GoogleSignin.signOut();
        yield auth().signOut();
        yield put(isLogged(false));
    } catch (e: any) {
        console.log('google logout', e.message);
        Alert.alert('Please, try again');
        yield put(loadingUserSuccess());
    }
}
