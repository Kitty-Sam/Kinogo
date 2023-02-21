import React, { FC, useState } from 'react';
import { WelcomeTabScreenProps } from '~screens/WelcomeScreen/type';
import {
    LinkText,
    Logo,
    ScreenContainer,
    StudiosContainer,
    Text,
    TextContainer,
    Title,
} from '~screens/WelcomeScreen/style';
import { Button } from '~components/Button';
import { Image, TouchableOpacity } from 'react-native';
import { SignUpModal } from '~components/SignUpModal';
import { SignInModal } from '~components/SignInModal';

const studios = [
    { icon: require('~assets/icons/marvel.png') },
    { icon: require('~assets/icons/DC.png') },
    { icon: require('~assets/icons/warner.png') },
    { icon: require('~assets/icons/netflix.png') },
];

export const WelcomeScreen: FC<WelcomeTabScreenProps> = () => {
    const [signInModalOpen, setSignInModalOpen] = useState(false);
    const [signUpModalOpen, setSignUpModalOpen] = useState(false);

    const buttons = [
        {
            icon: require('~assets/icons/person.png'),
            title: 'Create an Account',
            onPress: () => {
                setSignUpModalOpen(true);
            },
            bgColor: '#404040',
            color: '#FFFFFF',
        },
        {
            icon: require('~assets/icons/google.png'),
            title: 'Continue with google',
            onPress: () => {},
            bgColor: '#FFFFFF',
            color: '#808080',
        },
        {
            icon: require('~assets/icons/fb.png'),
            title: 'Sign up with Facebook',
            onPress: () => {},
            bgColor: '#1877F2',
            color: '#FFFFFF',
        },
        {
            icon: require('~assets/icons/github.png'),
            title: 'Sign up with Github',
            onPress: () => {},
            bgColor: '#000000',
            color: '#FFFFFF',
        },
    ];

    return (
        <ScreenContainer bgColor={'#1e1f27'}>
            <Logo source={require('~assets/icons/logo.png')} />
            {signUpModalOpen && (
                <SignUpModal setSignUpModalOpen={setSignUpModalOpen} signUpModalOpen={signUpModalOpen} />
            )}
            {signInModalOpen && (
                <SignInModal setSignInModalOpen={setSignInModalOpen} signInModalOpen={signInModalOpen} />
            )}
            <Title textColor={'#fff'}>Great Movies in the best cinema! We care about your comfort.</Title>
            {buttons.map(({ title, onPress, icon, bgColor, color }) => (
                <Button title={title} onPress={onPress} icon={icon} key={title} bgColor={bgColor} textColor={color} />
            ))}
            <TextContainer>
                <Text textColor={'#fff'}>Already has an account?</Text>
                <TouchableOpacity onPress={() => setSignInModalOpen(true)}>
                    <LinkText textColor={'#fff'}> Login please.</LinkText>
                </TouchableOpacity>
            </TextContainer>
            <StudiosContainer>
                {studios.map((studio) => (
                    <Image key={studio.icon} source={studio.icon} />
                ))}
            </StudiosContainer>
            <Text textColor={'#fff'}>2023 Version 0.0.1</Text>
        </ScreenContainer>
    );
};
