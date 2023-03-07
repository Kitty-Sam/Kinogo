import React, { FC, useCallback, useContext } from 'react';
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
import { Alert, Linking } from 'react-native';
import { useOpen } from '~hooks/useOpen';
import { ThemeContext, THEMES } from '~context/ThemeContext';
import { useTheme } from '~hooks/useTheme';
import { useColor } from '~hooks/useColor';

const url = 'https://www.modsen-software.com/';
export const ProfileScreen: FC<ProfileTabScreenProps> = () => {
    const editModal = useOpen(false);
    const settingsModal = useOpen(false);

    const { setTheme } = useContext(ThemeContext);
    const { theme, themeButtonWhite, themeButtonBlack, textColorWhite, bgColor, textColorBlack, textColor, statusBar } =
        useColor();
    const { storeTheme } = useTheme(theme);

    const toggleAndStore = (value: string) => {
        setTheme(value);
        storeTheme(theme === THEMES.LIGHT ? THEMES.DARK : THEMES.LIGHT);
    };

    const turnOnLightTheme = () => {
        toggleAndStore(THEMES.LIGHT);
    };

    const turnOnDarkTheme = () => {
        toggleAndStore(THEMES.DARK);
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
        {
            title: 'Private policy',
            onPress: useCallback(async () => {
                const supported = await Linking.canOpenURL(url);
                if (supported) {
                    await Linking.openURL(url);
                } else {
                    Alert.alert(`Don't know how to open this URL: ${url}`);
                }
            }, [url]),
        },
        { title: 'Log out', onPress: () => {} },
    ];

    return (
        <ScreenContainer bgColor={bgColor}>
            {/*<StatusBar barStyle={statusBar} />*/}
            <Avatar source={require('~assets/icons/avatar.png')} />

            {editModal.isOpen && (
                <EditProfileModal editModalOpen={editModal.isOpen} setEditModalOpen={editModal.onClose} />
            )}
            {settingsModal.isOpen && (
                <SettingsModal setSettingsModalOpen={settingsModal.onClose} settingsModalOpen={settingsModal.isOpen} />
            )}

            <ProfileNameText textColor={textColor}>Name Surname</ProfileNameText>
            <ProfileIDText textColor={textColor}>User ID: 123</ProfileIDText>
            <ProfileSexText textColor={textColor}>Female</ProfileSexText>

            {buttons.map(({ onPress, title }) => (
                <ProfileButtonContainer onPress={onPress} key={title}>
                    <ProfileButtonText>{title}</ProfileButtonText>
                </ProfileButtonContainer>
            ))}

            <ButtonsContainer>
                <ThemeButtonContainer bgColor={themeButtonWhite} onPress={turnOnLightTheme}>
                    <ThemeButtonText textColor={textColorWhite}>White</ThemeButtonText>
                </ThemeButtonContainer>
                <ThemeButtonContainer bgColor={themeButtonBlack} onPress={turnOnDarkTheme}>
                    <ThemeButtonText textColor={textColorBlack}>Black</ThemeButtonText>
                </ThemeButtonContainer>
            </ButtonsContainer>

            <SmallLogo source={require('~assets/icons/small_logo.png')} />
        </ScreenContainer>
    );
};
