import React, { FC, useContext } from 'react';
import { Modal } from 'react-native';

import { ModalInput } from '~components/ModalInput';
import { SignInModalPropsType } from '~components/SignInModal/type';
import {
    ButtonSignUpContainer,
    ButtonSignUpText,
    CentredView,
    FormContainer,
    ModalTitle,
    ModalTitleContainer,
    ModalView,
} from '~components/SignInModal/style';
import { ThemeContext } from '~context/ThemeContext';
import { THEME_COLORS } from '~constants/theme';

export const SignInModal: FC<SignInModalPropsType> = ({ signInModalOpen, setSignInModalOpen }) => {
    const { theme } = useContext(ThemeContext);
    const textColor = theme === 'light' ? THEME_COLORS.light.text : THEME_COLORS.dark.text;
    const bgColor = theme === 'light' ? THEME_COLORS.light.themeButton : THEME_COLORS.dark.themeButton;

    return (
        <Modal animationType="slide" transparent={true} visible={signInModalOpen}>
            <CentredView>
                <ModalView bgColor={bgColor}>
                    <ModalTitleContainer>
                        <ModalTitle textColor={textColor}>Sign in to an account</ModalTitle>
                        <ModalTitle textColor={textColor} onPress={() => setSignInModalOpen()}>
                            x
                        </ModalTitle>
                    </ModalTitleContainer>
                    <FormContainer>
                        <ModalInput icon={require('~assets/icons/email.png')} placeholder="example@gmail" />
                        <ModalInput icon={require('~assets/icons/password.png')} placeholder="*****" />
                        <ButtonSignUpContainer onPress={() => {}}>
                            <ButtonSignUpText>Sign in</ButtonSignUpText>
                        </ButtonSignUpContainer>
                    </FormContainer>
                </ModalView>
            </CentredView>
        </Modal>
    );
};
