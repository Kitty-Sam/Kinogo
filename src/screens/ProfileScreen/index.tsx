import React, { FC, useCallback, useContext, useEffect } from 'react';

import { ButtonsContainer, ProfileNameText, ScreenContainer, SmallLogo } from '~screens/ProfileScreen/style';
import { EditProfile } from '~components/EditProfile';
import { Alert, Linking, StatusBar } from 'react-native';
import { ThemeContext, THEMES } from '~context/ThemeContext';
import { useTheme } from '~hooks/useTheme';
import { useColor } from '~hooks/useColor';
import { ProfileScreenProps } from '~navigation/HomeStack/type';
import { fetchUsers, googleLogOutUser, makeAvatar, uploadAvatar } from '~store/sagas/sagasActions';
import { useAppDispatch, useAppSelector } from '~store/hooks';
import { getUserInfo } from '~store/selectors/getUserInfo';
import { url } from '~src/api/defaultRequest';
import { getModalType } from '~store/selectors/getModalType';
import { setModalType } from '~store/reducers/modalSlice';
import { Settings } from '~components/Settings';
import { SimpleButton } from '~components/SimpleButton';
import { THEME_COLORS } from '~constants/theme';
import { CustomModal } from '~components/CustomModal';
import { useDisclose } from 'native-base';
import { AvatarPhoto } from '~components/Avatar';
import { ChangeAvatarPhotoBlock } from '~components/ChangeAvatarPhotoBlock';
import { poster } from '~constants/posters';

export const ProfileScreen: FC<ProfileScreenProps> = () => {
    const { users, user } = useAppSelector(getUserInfo);
    const type = useAppSelector(getModalType);

    const currentUser = users.find((userFb) => userFb.userId === user.id);
    const photo = currentUser ? currentUser.photo : poster;

    // const [avatar, setAvatar] = useState<string>(photo);

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

    const buttons = [
        {
            title: 'Edit profile info',
            onPress: () => dispatch(setModalType({ type: 'edit' })),
        },
        {
            title: 'Settings',
            onPress: () => dispatch(setModalType({ type: 'settings' })),
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
            onPress: () => dispatch(googleLogOutUser()),
            // onPress: () => {
            //     dispatch(logOutUser());
            // },
        },
    ];

    const { isOpen, onOpen, onClose, onToggle } = useDisclose();

    const makeImage = () => {
        dispatch(makeAvatar());
    };

    const uploadImage = () => {
        onToggle();
        dispatch(uploadAvatar());
    };

    return (
        <ScreenContainer bgColor={bgColor}>
            <StatusBar barStyle={statusBar} />
            <AvatarPhoto avatar={photo} onOpenChangePhotoMenu={onOpen} />

            {type === 'edit' && (
                <CustomModal>
                    <EditProfile />
                </CustomModal>
            )}
            {type === 'settings' && (
                <CustomModal>
                    <Settings />
                </CustomModal>
            )}

            <ProfileNameText textColor={textColor}>
                {currentUser ? currentUser.userName + ' ' + currentUser.userSurname : 'user name'}
            </ProfileNameText>

            {buttons.map(({ onPress, title }) => (
                <SimpleButton
                    title={title}
                    onPress={onPress}
                    key={title}
                    backgroundColor={THEME_COLORS.placeholder}
                    textColor={THEME_COLORS.lightColor}
                />
            ))}

            <ButtonsContainer>
                <SimpleButton
                    title={'White'}
                    onPress={turnOnLightTheme}
                    backgroundColor={themeButtonWhite}
                    textColor={textColorWhite}
                />
                <SimpleButton
                    title={'Black'}
                    onPress={turnOnDarkTheme}
                    backgroundColor={themeButtonBlack}
                    textColor={textColorBlack}
                />
            </ButtonsContainer>

            <SmallLogo source={require('~assets/icons/small_logo.png')} />
            <ChangeAvatarPhotoBlock makeImage={makeImage} isOpen={isOpen} onClose={onClose} uploadImage={uploadImage} />
        </ScreenContainer>
    );
};
