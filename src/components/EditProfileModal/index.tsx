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

const inputDataEnd = [
    { icon: require('~assets/icons/password.png'), placeholder: 'Enter strong password' },
    { icon: require('~assets/icons/password.png'), placeholder: 'Enter current password' },
];

const inputDataStart = [
    { icon: require('~assets/icons/name.png'), placeholder: 'Enter your new name' },
    { icon: require('~assets/icons/surname.png'), placeholder: 'Enter your new surname' },
];

export const EditProfileModal: FC<EditProfilePropsType> = ({ editModalOpen, setEditModalOpen }) => {
    const { bgColorModal, textColor } = useColor();

    const onCloseIconPress = () => {
        setEditModalOpen();
    };

    const editPress = () => {};

    return (
        <Modal animationType="slide" transparent={true} visible={editModalOpen}>
            <CentredView>
                <ModalView bgColor={bgColorModal}>
                    <ModalTitleContainer>
                        <ModalTitle textColor={textColor}>Edit your profile</ModalTitle>
                        <Icon name={'close-circle-sharp'} onPress={onCloseIconPress} color={textColor} size={24} />
                    </ModalTitleContainer>
                    <FormContainer>
                        <AdditionalText textColor={textColor}>Change your personal data</AdditionalText>
                        {inputDataStart.map((input) => (
                            <ModalInput icon={input.icon} placeholder={input.placeholder} key={input.placeholder} />
                        ))}
                        <AdditionalText textColor={textColor}>Change your password</AdditionalText>
                        {inputDataEnd.map((input) => (
                            <ModalInput icon={input.icon} placeholder={input.placeholder} key={input.placeholder} />
                        ))}

                        <ButtonContainer onPress={editPress}>
                            <ButtonText>Edit</ButtonText>
                        </ButtonContainer>
                    </FormContainer>
                </ModalView>
            </CentredView>
        </Modal>
    );
};
