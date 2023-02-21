import React, { FC, useState } from 'react';
import { ProfileTabScreenProps } from '~screens/ProfileScreen/type';
import {
    Avatar,
    ButtonsContainer,
    ProfileButtonContainer,
    ProfileButtonText,
    ProfileIDText,
    ProfileNameText,
    ProfileSexText,
    ScreenContainer,
    SmallLogo,
    ThemeButtonContainer,
    ThemeButtonText,
} from '~screens/ProfileScreen/style';
import { EditProfileModal } from '~components/EditProfileModal';
import { SettingsModal } from '~components/SettingsModal';
import { StatusBar } from 'react-native';

export const ProfileScreen: FC<ProfileTabScreenProps> = () => {
    const [editModalOpen, setIsEditModalOpen] = useState(false);
    const [settingsModalOpen, setSettingsModalOpen] = useState(false);

    const buttons = [
        {
            title: 'Edit profile info',
            onPress: () => {
                setIsEditModalOpen(true);
            },
        },
        {
            title: 'Settings',
            onPress: () => {
                setSettingsModalOpen(true);
            },
        },
        { title: 'Private policy', onPress: () => {} },
        { title: 'Log out', onPress: () => {} },
    ];
    return (
        <ScreenContainer bgColor={'#1e1f27'}>
            <StatusBar barStyle={'light-content'} />
            <Avatar source={require('~assets/icons/avatar.png')} />

            {editModalOpen && <EditProfileModal editModalOpen={editModalOpen} setEditModalOpen={setIsEditModalOpen} />}
            {settingsModalOpen && (
                <SettingsModal setSettingsModalOpen={setSettingsModalOpen} settingsModalOpen={settingsModalOpen} />
            )}

            <ProfileNameText textColor={'#fff'}>Name Surname</ProfileNameText>
            <ProfileIDText textColor={'#fff'}>User ID: 123</ProfileIDText>
            <ProfileSexText textColor={'#fff'}>Female</ProfileSexText>

            {buttons.map(({ onPress, title }) => (
                <ProfileButtonContainer onPress={onPress} key={title}>
                    <ProfileButtonText>{title}</ProfileButtonText>
                </ProfileButtonContainer>
            ))}

            <ButtonsContainer>
                <ThemeButtonContainer bgColor={'#fff'}>
                    <ThemeButtonText textColor={'#000'}>White</ThemeButtonText>
                </ThemeButtonContainer>
                <ThemeButtonContainer bgColor={'#383838'}>
                    <ThemeButtonText textColor={'#fff'}>Black</ThemeButtonText>
                </ThemeButtonContainer>
            </ButtonsContainer>

            <SmallLogo source={require('~assets/icons/small_logo.png')} />
        </ScreenContainer>
    );
};
