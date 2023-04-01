import { database } from '~src/helpers/getDataBaseURL';
import { Alert } from 'react-native';
import { put, select } from 'redux-saga/effects';
import { IUser, loadingUser, loadingUserSuccess, updateUser } from '~store/reducers/userSlice';
import { getUsers } from '~store/selectors/getUserInfo';
import { UpdateUserType } from '~store/sagas/sagasActions';

export function* updateUserInfoWorker({ payload }: UpdateUserType) {
    const { newName, newSurname, currentUserId } = payload;
    const users: IUser[] = yield select(getUsers);

    const currentUser: IUser = users.filter((user) => user.userId === currentUserId)[0];

    try {
        yield put(loadingUser());

        yield database.ref(`/users/${currentUserId}`).update({
            ...currentUser,
            userName: newName,
            userSurname: newSurname,
        });
        yield put(updateUser({ currentUserId: currentUserId, newName: newName, newSurname: newSurname }));
        yield put(loadingUserSuccess());
    } catch (e: any) {
        console.log('update user error', e.message);
        Alert.alert('Please, try again');
        yield put(loadingUserSuccess());
    }
}
