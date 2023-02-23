import React, { FC, useContext } from 'react';
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
import { Image, TouchableOpacity } from 'react-native';
import { SignUpModal } from '~components/SignUpModal';
import { SignInModal } from '~components/SignInModal';
import { useOpen } from '~hooks/useOpen';
import { ThemeContext } from '~context/ThemeContext';
import { THEME_COLORS } from '~constants/theme';
import { studios } from '~constants/studios';

export const WelcomeScreen: FC<WelcomeTabScreenProps> = () => {
    const signInModal = useOpen(false);
    const signUpModal = useOpen(false);

    const buttons = [
        {
            icon: require('~assets/icons/person.png'),
            title: 'Create an Account',
            onPress: () => {
                signUpModal.onOpen();
            },
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
    const { theme } = useContext(ThemeContext);
    const textColor = theme === 'light' ? THEME_COLORS.light.text : THEME_COLORS.dark.text;
    const bgColor = theme === 'light' ? THEME_COLORS.light.background : THEME_COLORS.dark.background;

    return (
        <ScreenContainer bgColor={bgColor}>
            <Logo source={require('~assets/icons/logo.png')} />

            {signUpModal.isOpen && (
                <SignUpModal setSignUpModalOpen={signUpModal.onClose} signUpModalOpen={signUpModal.isOpen} />
            )}
            {signInModal.isOpen && (
                <SignInModal setSignInModalOpen={signInModal.onClose} signInModalOpen={signInModal.isOpen} />
            )}

            <Title textColor={textColor}>Great Movies in the best cinema! We care about your comfort.</Title>

            {buttons.map(({ title, onPress, icon, bgColor, color }) => (
                <Button title={title} onPress={onPress} icon={icon} key={title} bgColor={bgColor} textColor={color} />
            ))}

            <TextContainer>
                <Text textColor={textColor}>Already has an account?</Text>
                <TouchableOpacity onPress={() => signInModal.onOpen()}>
                    <LinkText textColor={textColor}> Login please.</LinkText>
                </TouchableOpacity>
            </TextContainer>

            <StudiosContainer>
                {studios.map((studio) => (
                    <Image key={studio.icon} source={studio.icon} />
                ))}
            </StudiosContainer>

            <VersionText textColor={textColor}>2023 Version 0.0.1</VersionText>
        </ScreenContainer>
    );
};
