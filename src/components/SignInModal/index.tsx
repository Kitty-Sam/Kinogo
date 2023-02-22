import React, { FC } from 'react';
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

export const SignInModal: FC<SignInModalPropsType> = ({ signInModalOpen, setSignInModalOpen }) => {
    return (
        <Modal animationType="slide" transparent={true} visible={signInModalOpen}>
            <CentredView>
                <ModalView bgColor={'#2E2E2E'}>
                    <ModalTitleContainer>
                        <ModalTitle>Sign in to an account</ModalTitle>
                        <ModalTitle onPress={() => setSignInModalOpen()}>x</ModalTitle>
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
