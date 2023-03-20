import React, { FC } from 'react';
import { Modal } from 'react-native';

import { ModalInput } from '~components/ModalInput';
import { EditProfilePropsType } from '~components/EditProfileModal/type';
import {
    AdditionalText,
    ButtonContainer,
    ButtonText,
    CentredView,
    FormContainer,
    ModalTitle,
    ModalTitleContainer,
    ModalView,
} from '~components/EditProfileModal/style';
import Icon from 'react-native-vector-icons/Ionicons';
import { useColor } from '~hooks/useColor';
import { Formik } from 'formik';
import { updateUser } from '~store/sagas/sagasActions';
import { useAppDispatch, useAppSelector } from '~store/hooks';
import { getCurrentUserId } from '~store/selectors/getUserInfo';

// const inputDataEnd = [
//     { icon: require('~assets/icons/password.png'), placeholder: 'Enter strong password', type: 'password' },
//     { icon: require('~assets/icons/password.png'), placeholder: 'Enter current password', type: 'password' },
// ];

const inputDataStart = [
    { icon: require('~assets/icons/name.png'), placeholder: 'Enter your new name', type: 'name' },
    { icon: require('~assets/icons/surname.png'), placeholder: 'Enter your new surname', type: 'surname' },
];

export const EditProfileModal: FC<EditProfilePropsType> = ({ editModalOpen, setEditModalOpen }) => {
    const { bgColorModal, textColor } = useColor();

    const onCloseIconPress = () => {
        setEditModalOpen();
    };

    const currentUserId = useAppSelector(getCurrentUserId);

    const dispatch = useAppDispatch();
    const editPress = (values: { name: string; surname: string }) => {
        dispatch(updateUser({ currentUserId: currentUserId, newName: values.name, newSurname: values.surname }));
        setEditModalOpen();
    };

    return (
        <Modal animationType="slide" transparent={true} visible={editModalOpen}>
            <CentredView>
                <ModalView bgColor={bgColorModal}>
                    <ModalTitleContainer>
                        <ModalTitle textColor={textColor}>Edit your profile</ModalTitle>
                        <Icon name={'close-circle-sharp'} onPress={onCloseIconPress} color={textColor} size={24} />
                    </ModalTitleContainer>
                    <Formik initialValues={{ name: '', surname: '' }} onSubmit={editPress}>
                        {({ handleChange, handleSubmit }) => (
                            <FormContainer>
                                <AdditionalText textColor={textColor}>Change your personal data</AdditionalText>
                                {inputDataStart.map((input) => (
                                    <ModalInput
                                        icon={input.icon}
                                        placeholder={input.placeholder}
                                        key={input.placeholder}
                                        name={input.type}
                                        onChangeText={handleChange(input.type)}
                                    />
                                ))}
                                {/*<AdditionalText textColor={textColor}>Change your password</AdditionalText>*/}
                                {/*{inputDataEnd.map((input) => (*/}
                                {/*    <ModalInput*/}
                                {/*        icon={input.icon}*/}
                                {/*        placeholder={input.placeholder}*/}
                                {/*        key={input.placeholder}*/}
                                {/*        name={input.type}*/}
                                {/*        onChangeText={handleChange(input.type)}*/}
                                {/*    />*/}
                                {/*))}*/}

                                <ButtonContainer onPress={handleSubmit}>
                                    <ButtonText>Edit</ButtonText>
                                </ButtonContainer>
                            </FormContainer>
                        )}
                    </Formik>
                </ModalView>
            </CentredView>
        </Modal>
    );
};
