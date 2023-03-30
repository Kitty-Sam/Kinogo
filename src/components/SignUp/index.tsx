import React from 'react';
import { View } from 'react-native';

import { ModalInput } from '~components/ModalInput';
import Icon from 'react-native-vector-icons/Ionicons';
import { useColor } from '~hooks/useColor';
import { Formik } from 'formik';
import { validationSchema } from '~constants/validationShema';
import { registerUser } from '~store/sagas/sagasActions';
import { useAppDispatch } from '~store/hooks';
import { removeModalType } from '~store/reducers/modalSlice';
import { ISignUp } from '~components/SignUp/type';
import { inputsData } from '~components/SignUp/inputs';
import { SimpleButton } from '~components/SimpleButton';
import { ErrorText, FormContainer, ModalTitle, ModalTitleContainer } from '~components/style';
import { THEME_COLORS } from '~constants/theme';

export const SignUpModal = () => {
    const { textColor } = useColor();

    const closeIconPress = () => {
        dispatch(removeModalType());
    };

    const dispatch = useAppDispatch();

    const signUpPress = (values: ISignUp) => {
        dispatch(registerUser(values));
        dispatch(removeModalType());
    };

    return (
        <>
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
                            <View key={input.type}>
                                <ModalInput
                                    icon={input.icon}
                                    placeholder={input.placeholder}
                                    onChangeText={handleChange(input.type)}
                                    name={input.type}
                                    secureTextEntry={input.type === 'password'}
                                />
                                {/*{touched[input.type] && errors[input.type] && (*/}
                                {/*    <ErrorText>{errors[input.type]}</ErrorText>*/}
                                {/*)}*/}
                            </View>
                        ))}

                        <SimpleButton
                            title={'Sign up'}
                            onPress={handleSubmit}
                            backgroundColor={THEME_COLORS.button}
                            textColor={THEME_COLORS.lightColor}
                        />
                    </FormContainer>
                )}
            </Formik>
        </>
    );
};
