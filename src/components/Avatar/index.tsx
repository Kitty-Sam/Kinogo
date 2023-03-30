import React, { FC } from 'react';
import { RowContainer } from '~screens/TicketsScreens/style';
import Icon from 'react-native-vector-icons/Ionicons';
import { Avatar } from '~screens/ProfileScreen/style';

interface IAvatarPhoto {
    avatar: string;
    onOpenChangePhotoMenu: () => void;
}

export const AvatarPhoto: FC<IAvatarPhoto> = ({ avatar, onOpenChangePhotoMenu }) => {
    return (
        <RowContainer>
            <Avatar source={{ uri: avatar }} />
            <Icon name={'pencil'} onPress={onOpenChangePhotoMenu} color={'grey'} size={24} />
        </RowContainer>
    );
};
