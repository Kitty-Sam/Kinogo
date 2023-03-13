import React, { FC } from 'react';
import { Modal, View } from 'react-native';
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
import { Formik } from 'formik';
import { validationSchema } from '~constants/validationShema';
import { registerUser } from '~store/sagas/sagasActions';
import { useAppDispatch } from '~store/hooks';

const inputsData = [
    { icon: require('~assets/icons/name.png'), placeholder: 'Enter your name', type: 'name' },
    { icon: require('~assets/icons/surname.png'), placeholder: 'Enter your surname', type: 'surname' },
    { icon: require('~assets/icons/email.png'), placeholder: 'Enter your email', type: 'email' },
    { icon: require('~assets/icons/password.png'), placeholder: 'Enter your password', type: 'password' },
];

export interface IPersonalData {
    email: string;
    name: string;
    surname: string;
    password: string;
}
export const SignUpModal: FC<SignUpModalPropsType> = ({ signUpModalOpen, setSignUpModalOpen }) => {
    const { textColor, bgColorModal } = useColor();

    const closeIconPress = () => {
        setSignUpModalOpen();
    };

    const dispatch = useAppDispatch();

    const signUpPress = (values: IPersonalData) => {
        dispatch(registerUser(values));
        setSignUpModalOpen();
    };

    return (
        <Modal animationType="slide" transparent={true} visible={signUpModalOpen}>
            <CentredView>
                <ModalView bgColor={bgColorModal}>
                    <ModalTitleContainer>
                        <ModalTitle textColor={textColor}>Create an account</ModalTitle>
                        <Icon name={'close-circle-sharp'} onPress={closeIconPress} color={textColor} size={24} />
                    </ModalTitleContainer>
                    <Formik
                        initialValues={{ name: '', surname: '', email: '', password: '' }}
                        onSubmit={signUpPress}
                        validationSchema={validationSchema}
                    >
                        {({ handleChange, handleSubmit, touched, errors }) => (
                            <FormContainer>
                                {inputsData.map((input, index) => (
                                    <View key={input.type} style={{ width: '85%' }}>
                                        <ModalInput
                                            icon={input.icon}
                                            placeholder={input.placeholder}
                                            key={input.placeholder}
                                            onChangeText={handleChange(input.type)}
                                            name={input.type}
                                            secureTextEntry={input.type === 'password'}
                                        />
                                        {/*{touched[input.type] && errors[input.type] && (*/}
                                        {/*    <ErrorText>{errors[input.type]}</ErrorText>*/}
                                        {/*)}*/}
                                    </View>
                                ))}

                                <ButtonSignUpContainer onPress={handleSubmit}>
                                    <ButtonSignUpText>Sign up</ButtonSignUpText>
                                </ButtonSignUpContainer>
                            </FormContainer>
                        )}
                    </Formik>
                </ModalView>
            </CentredView>
        </Modal>
    );
};
