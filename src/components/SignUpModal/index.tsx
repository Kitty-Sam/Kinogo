import React, { FC } from 'react';
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

export const SignUpModal: FC<SignUpModalPropsType> = ({ signUpModalOpen, setSignUpModalOpen }) => {
    return (
        <Modal animationType="slide" transparent={true} visible={signUpModalOpen}>
            <CentredView>
                <ModalView bgColor={'#2E2E2E'}>
                    <ModalTitleContainer>
                        <ModalTitle>Create an account</ModalTitle>
                        <ModalTitle onPress={() => setSignUpModalOpen()}>x</ModalTitle>
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
