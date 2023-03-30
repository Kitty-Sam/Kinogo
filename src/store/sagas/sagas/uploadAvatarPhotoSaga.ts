import { Alert } from 'react-native';
import { put, select } from 'redux-saga/effects';
import { IUser, loadingUserSuccess, updateUserAvatar } from '~store/reducers/userSlice';
import { openPicker } from 'react-native-image-crop-picker';
import storage from '@react-native-firebase/storage';
import { getPhotoFromStorage } from '~src/helpers/getPhotoFromStorage';
import { database } from '~src/helpers/getDataBaseURL';
import { getCurrentUserId, getUsers } from '~store/selectors/getUserInfo';

const metadata = {
    contentType: 'image/jpeg',
};

export function* uploadAvatarPhotoWorker() {
    const users: IUser[] = yield select(getUsers);
    const currentUserId: string = yield select(getCurrentUserId);
    const currentUser: IUser = users.filter((user) => user.userId === currentUserId)[0];

    try {
        // @ts-ignore
        const image = yield openPicker({
            saveToPhotos: true,
            includeBase64: true,
            mediaType: 'photo',
        });

        // setAvatar(image.path);

        const reference = storage().ref().child(`${currentUserId}`).child('avatar');
        try {
            yield reference.putFile(image.path, metadata);
            const resultedPhotos: string[] = yield getPhotoFromStorage(currentUserId);

            yield database.ref(`/users/${currentUserId}`).update({
                ...currentUser,
                photo: resultedPhotos[0],
            });
            yield put(updateUserAvatar({ currentUserId, newPhoto: resultedPhotos[0] }));
        } catch (e) {
            console.log(e);
        }
    } catch (error: any) {
        console.log('upload avatar photo', error.message);
        Alert.alert('Please, try again');
        yield put(loadingUserSuccess());
    }
}
