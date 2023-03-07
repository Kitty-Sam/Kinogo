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
import Icon from 'react-native-vector-icons/Ionicons';
import { useColor } from '~hooks/useColor';

const inputsData = [
    { icon: require('~assets/icons/name.png'), placeholder: 'Enter your name' },
    { icon: require('~assets/icons/surname.png'), placeholder: 'Enter your surname' },
    { icon: require('~assets/icons/email.png'), placeholder: 'Enter your email' },
    { icon: require('~assets/icons/password.png'), placeholder: 'Enter your password' },
];

export const SignUpModal: FC<SignUpModalPropsType> = ({ signUpModalOpen, setSignUpModalOpen }) => {
    const { textColor, bgColorModal } = useColor();

    const closeIconPress = () => {
        setSignUpModalOpen();
    };

    const signUpPress = () => {};

    return (
        <Modal animationType="slide" transparent={true} visible={signUpModalOpen}>
            <CentredView>
                <ModalView bgColor={bgColorModal}>
                    <ModalTitleContainer>
                        <ModalTitle textColor={textColor}>Create an account</ModalTitle>
                        <Icon name={'close-circle-sharp'} onPress={closeIconPress} color={textColor} size={24} />
                    </ModalTitleContainer>
                    <FormContainer>
                        {inputsData.map((input) => (
                            <ModalInput icon={input.icon} placeholder={input.placeholder} key={input.placeholder} />
                        ))}

                        <ButtonSignUpContainer onPress={signUpPress}>
                            <ButtonSignUpText>Sign up</ButtonSignUpText>
                        </ButtonSignUpContainer>
                    </FormContainer>
                </ModalView>
            </CentredView>
        </Modal>
    );
};
