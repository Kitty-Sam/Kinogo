import React, { FC } from 'react';
import { Actionsheet } from 'native-base';

export interface IChangeAvatarPhotoBlock {
    isOpen: boolean;
    onClose: () => void;
    makeImage: () => void;
    uploadImage: () => void;
}
export const ChangeAvatarPhotoBlock: FC<IChangeAvatarPhotoBlock> = ({ isOpen, onClose, makeImage, uploadImage }) => {
    return (
        <Actionsheet isOpen={isOpen} onClose={onClose}>
            <Actionsheet.Content>
                <Actionsheet.Item onPress={makeImage}>Take photo</Actionsheet.Item>
                <Actionsheet.Item onPress={uploadImage}>Upload photo from gallery</Actionsheet.Item>
            </Actionsheet.Content>
        </Actionsheet>
    );
};
