import React, { FC, useContext } from 'react';
import { Modal } from 'react-native';
import {
    ButtonSignUpContainer,
    ButtonSignUpText,
    CentredView,
    FormContainer,
    ModalTitle,
    ModalTitleContainer,
    ModalView,
} from '~components/SignUpModal/style';
import { ModalInput } from '~components/ModalInput';
import { SignUpModalPropsType } from '~components/SignUpModal/type';
import { ThemeContext } from '~context/ThemeContext';
import { THEME_COLORS } from '~constants/theme';

export const SignUpModal: FC<SignUpModalPropsType> = ({ signUpModalOpen, setSignUpModalOpen }) => {
    const { theme } = useContext(ThemeContext);
    const textColor = theme === 'light' ? THEME_COLORS.light.text : THEME_COLORS.dark.text;
    const bgColor = theme === 'light' ? THEME_COLORS.light.themeButton : THEME_COLORS.dark.themeButton;

    return (
        <Modal animationType="slide" transparent={true} visible={signUpModalOpen}>
            <CentredView>
                <ModalView bgColor={bgColor}>
                    <ModalTitleContainer>
                        <ModalTitle textColor={textColor}>Create an account</ModalTitle>
                        <ModalTitle textColor={textColor} onPress={() => setSignUpModalOpen()}>
                            x
                        </ModalTitle>
                    </ModalTitleContainer>
                    <FormContainer>
                        <ModalInput icon={require('~assets/icons/name.png')} placeholder="Enter your name" />
                        <ModalInput icon={require('~assets/icons/surname.png')} placeholder="Enter your surname" />
                        <ModalInput icon={require('~assets/icons/email.png')} placeholder="Enter your email" />
                        <ModalInput icon={require('~assets/icons/password.png')} placeholder="Enter strong password" />

                        <ButtonSignUpContainer onPress={() => {}}>
                            <ButtonSignUpText>Sign up</ButtonSignUpText>
                        </ButtonSignUpContainer>
                    </FormContainer>
                </ModalView>
            </CentredView>
        </Modal>
    );
};
