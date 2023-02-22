import React, { FC, useContext } from 'react';
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
import { useOpen } from '~hooks/useOpen';
import { ThemeContext } from '~context/ThemeContext';
import { THEME_COLORS } from '~constants/theme';
import { useTheme } from '~hooks/useTheme';

export const ProfileScreen: FC<ProfileTabScreenProps> = () => {
    const editModal = useOpen(false);
    const settingsModal = useOpen(false);

    const { theme, setTheme } = useContext(ThemeContext);
    const { storeTheme } = useTheme(theme);

    const toggleAndStore = (value: string) => {
        setTheme(value);
        storeTheme(theme === 'light' ? 'dark' : 'light');
    };

    const buttons = [
        {
            title: 'Edit profile info',
            onPress: () => {
                editModal.onOpen();
            },
        },
        {
            title: 'Settings',
            onPress: () => {
                settingsModal.onOpen();
            },
        },
        { title: 'Private policy', onPress: () => {} },
        { title: 'Log out', onPress: () => {} },
    ];

    return (
        <ScreenContainer bgColor={theme === 'light' ? THEME_COLORS.light.background : THEME_COLORS.dark.background}>
            <StatusBar barStyle={'light-content'} />
            <Avatar source={require('~assets/icons/avatar.png')} />

            {editModal.isOpen && (
                <EditProfileModal editModalOpen={editModal.isOpen} setEditModalOpen={editModal.onClose} />
            )}
            {settingsModal.isOpen && (
                <SettingsModal setSettingsModalOpen={settingsModal.onClose} settingsModalOpen={settingsModal.isOpen} />
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
                <ThemeButtonContainer bgColor={'#fff'} onPress={() => toggleAndStore('light')}>
                    <ThemeButtonText textColor={'#000'}>White</ThemeButtonText>
                </ThemeButtonContainer>
                <ThemeButtonContainer bgColor={'#383838'} onPress={() => toggleAndStore('dark')}>
                    <ThemeButtonText textColor={'#fff'}>Black</ThemeButtonText>
                </ThemeButtonContainer>
            </ButtonsContainer>

            <SmallLogo source={require('~assets/icons/small_logo.png')} />
        </ScreenContainer>
    );
};
