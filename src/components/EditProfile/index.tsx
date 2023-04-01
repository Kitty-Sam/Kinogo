import React from 'react';

import { ModalInput } from '~components/ModalInput';

import Icon from 'react-native-vector-icons/Ionicons';
import { useColor } from '~hooks/useColor';
import { Formik } from 'formik';
import { updateUser } from '~store/sagas/sagasActions';
import { useAppDispatch, useAppSelector } from '~store/hooks';
import { getCurrentUserId } from '~store/selectors/getUserInfo';
import { inputDataEnd, inputDataStart } from '~components/EditProfile/inputs';
import { SimpleButton } from '~components/SimpleButton';
import { removeModalType } from '~store/reducers/modalSlice';
import { AdditionalText, FormContainer, ModalTitle, ModalTitleContainer } from '~components/style';
import { IEdit } from '~components/EditProfile/type';
import { THEME_COLORS } from '~constants/theme';
import { EmailAuthProvider, reauthenticateWithCredential, updatePassword } from 'firebase/auth';
import { auth } from '../../../firebase-config';

export const EditProfile = () => {
    const { textColor } = useColor();
    const currentUserId = useAppSelector(getCurrentUserId);

    const onCloseIconPress = () => {
        dispatch(removeModalType());
    };

    const dispatch = useAppDispatch();

    const editPress = async (values: IEdit) => {
        dispatch(updateUser({ currentUserId: currentUserId, newName: values.name, newSurname: values.surname }));
        const credential = EmailAuthProvider.credential(currentUserId, values.oldPassword);
        const user = auth.currentUser;
        console.log('user', user);

        try {
            if (user) {
                await reauthenticateWithCredential(user, credential);
                await updatePassword(user, values.newPassword);
            }
        } catch (e: any) {
            console.log('e', e.message);
        }
        dispatch(removeModalType());
    };

    return (
        <>
            <ModalTitleContainer>
                <ModalTitle textColor={textColor}>Edit your profile</ModalTitle>
                <Icon name={'close-circle-sharp'} onPress={onCloseIconPress} color={textColor} size={24} />
            </ModalTitleContainer>
            <Formik initialValues={{ name: '', surname: '', newPassword: '', oldPassword: '' }} onSubmit={editPress}>
                {({ handleChange, handleSubmit }) => (
                    <FormContainer>
                        <AdditionalText textColor={textColor}>Change your personal data</AdditionalText>
                        {inputDataStart.map((input) => (
                            <ModalInput
                                icon={input.icon}
                                placeholder={input.placeholder}
                                key={input.placeholder}
                                name={input.id}
                                onChangeText={handleChange(input.type)}
                            />
                        ))}
                        <AdditionalText textColor={textColor}>Change your password</AdditionalText>
                        {inputDataEnd.map((input) => (
                            <ModalInput
                                icon={input.icon}
                                placeholder={input.placeholder}
                                key={input.placeholder}
                                name={input.id}
                                onChangeText={handleChange(input.type)}
                            />
                        ))}

                        <SimpleButton
                            title={'Edit'}
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
