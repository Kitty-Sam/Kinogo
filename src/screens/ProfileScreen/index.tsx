import React, { FC, useCallback, useContext, useEffect } from 'react';

import {
    Avatar,
    ButtonsContainer,
    ProfileButtonContainer,
    ProfileButtonText,
    ProfileNameText,
    ScreenContainer,
    SmallLogo,
    ThemeButtonContainer,
    ThemeButtonText,
} from '~screens/ProfileScreen/style';
import { EditProfileModal } from '~components/EditProfileModal';
import { SettingsModal } from '~components/SettingsModal';
import { Alert, Linking, StatusBar } from 'react-native';
import { useOpen } from '~hooks/useOpen';
import { ThemeContext, THEMES } from '~context/ThemeContext';
import { useTheme } from '~hooks/useTheme';
import { useColor } from '~hooks/useColor';
import { ProfileScreenProps } from '~navigation/HomeStack/type';
import { fetchUsers, logOutUser } from '~store/sagas/sagasActions';
import { useAppDispatch, useAppSelector } from '~store/hooks';
import { getUserInfo } from '~store/selectors/getUserInfo';

const url = 'https://www.modsen-software.com/';
export const ProfileScreen: FC<ProfileScreenProps> = () => {
    const editModal = useOpen(false);
    const settingsModal = useOpen(false);

    const dispatch = useAppDispatch();

    const { setTheme } = useContext(ThemeContext);
    const { theme, themeButtonWhite, themeButtonBlack, textColorWhite, bgColor, textColorBlack, textColor, statusBar } =
        useColor();
    const { storeTheme } = useTheme(theme);

    useEffect(() => {
        dispatch(fetchUsers());
    }, []);

    const toggleAndStore = (value: THEMES) => {
        setTheme(value);
        storeTheme(theme === THEMES.LIGHT ? THEMES.DARK : THEMES.LIGHT);
    };

    const turnOnLightTheme = () => {
        toggleAndStore(THEMES.LIGHT);
    };

    const turnOnDarkTheme = () => {
        toggleAndStore(THEMES.DARK);
    };

    const { users, user } = useAppSelector(getUserInfo);

    const currentUser = users.find((userFb) => userFb.userId === user.id);

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
        {
            title: 'Log out',
            onPress: () => {
                dispatch(logOutUser());
            },
        },
    ];

    return (
        <ScreenContainer bgColor={bgColor}>
            <StatusBar barStyle={statusBar} />
            {currentUser ? (
                <Avatar source={{ uri: currentUser.photo }} />
            ) : (
                <Avatar source={require('~assets/icons/avatar.png')} />
            )}

            {editModal.isOpen && (
                <EditProfileModal editModalOpen={editModal.isOpen} setEditModalOpen={editModal.onClose} />
            )}
            {settingsModal.isOpen && (
                <SettingsModal setSettingsModalOpen={settingsModal.onClose} settingsModalOpen={settingsModal.isOpen} />
            )}

            <ProfileNameText textColor={textColor}>
                {currentUser ? currentUser.userName + ' ' + currentUser.userSurname : 'user name'}
            </ProfileNameText>

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
