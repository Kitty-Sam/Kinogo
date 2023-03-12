import React, { FC } from 'react';
import { Modal, View } from 'react-native';

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
import { Formik } from 'formik';

const inputsData = [
    { icon: require('~assets/icons/email.png'), placeholder: 'example@gmail.com', type: 'email' },
    { icon: require('~assets/icons/password.png'), placeholder: '*****', type: 'password' },
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
                    <Formik initialValues={{ email: '', password: '' }} onSubmit={(values) => console.log(values)}>
                        {({ handleChange }) => (
                            <FormContainer>
                                {inputsData.map((input) => (
                                    <View key={input.type} style={{ width: '85%' }}>
                                        <ModalInput
                                            icon={input.icon}
                                            placeholder={input.placeholder}
                                            key={input.placeholder}
                                            name={input.type}
                                            secureTextEntry={input.type === 'password'}
                                            onChangeText={handleChange(input.type)}
                                        />
                                    </View>
                                ))}
                                <ButtonSignUpContainer onPress={signInPress}>
                                    <ButtonSignUpText>Sign in</ButtonSignUpText>
                                </ButtonSignUpContainer>
                            </FormContainer>
                        )}
                    </Formik>
                </ModalView>
            </CentredView>
        </Modal>
    );
};
