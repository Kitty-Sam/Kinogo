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
import Icon from 'react-native-vector-icons/Ionicons';
import { useColor } from '~hooks/useColor';

const inputsData = [
    { icon: require('~assets/icons/email.png'), placeholder: 'example@gmail' },
    { icon: require('~assets/icons/password.png'), placeholder: '*****' },
];

export const SignInModal: FC<SignInModalPropsType> = ({ signInModalOpen, setSignInModalOpen }) => {
    const { textColor, bgColorModal } = useColor();

    const closeIconPress = () => {
        setSignInModalOpen();
    };

    const signInPress = () => {};

    return (
        <Modal animationType="slide" transparent={true} visible={signInModalOpen}>
            <CentredView>
                <ModalView bgColor={bgColorModal}>
                    <ModalTitleContainer>
                        <ModalTitle textColor={textColor}>Sign in to an account</ModalTitle>
                        <Icon name={'close-circle-sharp'} onPress={closeIconPress} color={textColor} size={24} />
                    </ModalTitleContainer>
                    <FormContainer>
                        {inputsData.map((input) => (
                            <ModalInput icon={input.icon} placeholder={input.placeholder} key={input.placeholder} />
                        ))}
                        <ButtonSignUpContainer onPress={signInPress}>
                            <ButtonSignUpText>Sign in</ButtonSignUpText>
                        </ButtonSignUpContainer>
                    </FormContainer>
                </ModalView>
            </CentredView>
        </Modal>
    );
};
