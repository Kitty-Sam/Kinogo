import React from 'react';

import { ModalInput } from '~components/ModalInput';
import { inputsData } from '~components/SignIn/inputs';
import Icon from 'react-native-vector-icons/Ionicons';
import { useColor } from '~hooks/useColor';
import { Formik } from 'formik';
import { loginUser } from '~store/sagas/sagasActions';
import { useAppDispatch } from '~store/hooks';
import { removeModalType } from '~store/reducers/modalSlice';
import { SimpleButton } from '~components/SimpleButton';
import { FormContainer, ModalTitle, ModalTitleContainer } from '~components/style';
import { ISignIn } from '~components/SignIn/type';
import { THEME_COLORS } from '~constants/theme';

export const SignInModal = () => {
    const { textColor } = useColor();

    const dispatch = useAppDispatch();

    const signInPress = (values: ISignIn) => {
        dispatch(loginUser(values));
    };

    const closeIconPress = () => {
        dispatch(removeModalType());
    };

    return (
        <>
            <ModalTitleContainer>
                <ModalTitle textColor={textColor}>Sign in to an account</ModalTitle>
                <Icon name={'close-circle-sharp'} onPress={closeIconPress} color={textColor} size={24} />
            </ModalTitleContainer>
            <Formik initialValues={{ email: '', password: '' }} onSubmit={signInPress}>
                {({ handleChange, handleSubmit }) => (
                    <FormContainer>
                        {inputsData.map((input) => (
                            <ModalInput
                                icon={input.icon}
                                placeholder={input.placeholder}
                                key={input.placeholder}
                                name={input.type}
                                secureTextEntry={input.type === 'password'}
                                onChangeText={handleChange(input.type)}
                            />
                        ))}
                        <SimpleButton
                            title={'Sign in'}
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
