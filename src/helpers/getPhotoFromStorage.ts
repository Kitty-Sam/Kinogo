import storage from '@react-native-firebase/storage';

export const getPhotoFromStorage = async (currentUserId: string) => {
    const url = await storage().ref().child(`${currentUserId}`);
    const res = await url.listAll();
    const promises = res.items.map((itemRef) => itemRef.getDownloadURL());
    return await Promise.all(promises);
};
