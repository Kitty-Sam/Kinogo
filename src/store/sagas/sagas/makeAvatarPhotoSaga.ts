import { Alert } from 'react-native';
import { put, select } from 'redux-saga/effects';
import { IUser, loadingUserSuccess, updateUserAvatar } from '~store/reducers/userSlice';
import { openCamera } from 'react-native-image-crop-picker';
import storage from '@react-native-firebase/storage';
import { getPhotoFromStorage } from '~src/helpers/getPhotoFromStorage';
import { database } from '~src/helpers/getDataBaseURL';
import { getCurrentUserId, getUsers } from '~store/selectors/getUserInfo';

const metadata = {
    contentType: 'image/jpeg',
};

export function* makeAvatarPhotoWorker() {
    const users: IUser[] = yield select(getUsers);
    const currentUserId: string = yield select(getCurrentUserId);
    const currentUser: IUser = users.filter((user) => user.userId === currentUserId)[0];

    try {
        // @ts-ignore
        const image = yield openCamera({
            saveToPhotos: true,
            includeBase64: true,
            mediaType: 'photo',
        });

        console.log('image', image);

        // setAvatar(image.path);

        const referenceAll = storage().ref().child(`${currentUserId}`).child('avatar');
        try {
            yield referenceAll.putFile(image.path, metadata);
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
        console.log('make avatar photo', error.message);
        Alert.alert('Please, try again');
        yield put(loadingUserSuccess());
    }
}
