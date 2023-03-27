import React, { FC } from 'react';
import { WelcomeTabScreenProps } from '~screens/WelcomeScreen/type';
import {
    LinkText,
    Logo,
    ScreenContainer,
    StudiosContainer,
    Text,
    TextContainer,
    Title,
    VersionText,
} from '~screens/WelcomeScreen/style';
import { Button } from '~components/Button';
import { Image, Modal, TouchableOpacity } from 'react-native';
import { SignInModal } from '~components/SignIn';
import { THEME_COLORS } from '~constants/theme';
import { studios } from '~constants/studios';
import { useTranslation } from 'react-i18next';
import { useColor } from '~hooks/useColor';
import { useAppDispatch, useAppSelector } from '~store/hooks';
import { getModalType } from '~store/selectors/getModalType';

import { setModalType } from '~store/reducers/modalSlice';
import { SignUpModal } from '~components/SignUp';
import { year } from '~src/helpers/getDateNow';
import { CentredView, ModalView } from '~components/style';

export const WelcomeScreen: FC<WelcomeTabScreenProps> = () => {
    const type = useAppSelector(getModalType);

    const { t: translate } = useTranslation();

    const buttons = [
        {
            icon: require('~assets/icons/person.png'),
            title: 'Create an Account',
            onPress: () => dispatch(setModalType({ type: 'signUp' })),
            bgColor: THEME_COLORS.welcomeButtons.bgCrAcc,
            color: THEME_COLORS.welcomeButtons.textCrAcc,
        },
        {
            icon: require('~assets/icons/google.png'),
            title: 'Continue with google',
            onPress: () => {},
            bgColor: THEME_COLORS.welcomeButtons.bgGoogle,
            color: THEME_COLORS.welcomeButtons.textGoogle,
        },
        {
            icon: require('~assets/icons/fb.png'),
            title: 'Sign up with Facebook',
            onPress: () => {},
            bgColor: THEME_COLORS.welcomeButtons.bgFb,
            color: THEME_COLORS.welcomeButtons.textFb,
        },
        {
            icon: require('~assets/icons/github.png'),
            title: 'Sign up with Github',
            onPress: () => {},
            bgColor: THEME_COLORS.welcomeButtons.bgGitHub,
            color: THEME_COLORS.welcomeButtons.textGitHub,
        },
    ];

    const { bgColor, textColor, bgColorModal } = useColor();

    const dispatch = useAppDispatch();

    return (
        <ScreenContainer bgColor={bgColor}>
            <Logo source={require('~assets/icons/logo.png')} />

            {type === 'login' && (
                <Modal animationType="slide" transparent={true} visible={!!type}>
                    <CentredView>
                        <ModalView bgColor={bgColorModal}>
                            <SignInModal />
                        </ModalView>
                    </CentredView>
                </Modal>
            )}
            {type === 'signUp' && (
                <Modal animationType="slide" transparent={true} visible={!!type}>
                    <CentredView>
                        <ModalView bgColor={bgColorModal}>
                            <SignUpModal />
                        </ModalView>
                    </CentredView>
                </Modal>
            )}

            <Title textColor={textColor}>{translate('welcomeScreen.title')}</Title>

            {buttons.map(({ title, onPress, icon, bgColor, color }) => (
                <Button title={title} onPress={onPress} icon={icon} key={title} bgColor={bgColor} textColor={color} />
            ))}

            <TextContainer>
                <Text textColor={textColor}>{translate('welcomeScreen.hasAccount')}</Text>
                <TouchableOpacity onPress={() => dispatch(setModalType({ type: 'login' }))}>
                    <LinkText textColor={textColor}>{translate('welcomeScreen.login')}</LinkText>
                </TouchableOpacity>
            </TextContainer>

            <StudiosContainer>
                {studios.map((studio) => (
                    <Image key={studio.icon} source={studio.icon} />
                ))}
            </StudiosContainer>

            <VersionText textColor={textColor}>
                {year}
                {translate('welcomeScreen.version')}
            </VersionText>
        </ScreenContainer>
    );
};
