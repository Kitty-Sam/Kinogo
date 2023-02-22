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

export const EditProfileModal: FC<EditProfilePropsType> = ({ editModalOpen, setEditModalOpen }) => {
    return (
        <Modal animationType="slide" transparent={true} visible={editModalOpen}>
            <CentredView>
                <ModalView bgColor={'#2E2E2E'}>
                    <ModalTitleContainer>
                        <ModalTitle>Edit your profile</ModalTitle>
                        <ModalTitle onPress={() => setEditModalOpen()}>x</ModalTitle>
                    </ModalTitleContainer>
                    <FormContainer>
                        <AdditionalText textColor={'#fff'}>Change your personal data</AdditionalText>
                        <ModalInput icon={require('~assets/icons/name.png')} placeholder="Enter your new name" />
                        <ModalInput icon={require('~assets/icons/surname.png')} placeholder="Enter your new surname" />
                        <AdditionalText textColor={'#fff'}>Change your password</AdditionalText>
                        <ModalInput icon={require('~assets/icons/password.png')} placeholder="Enter strong password" />
                        <ModalInput icon={require('~assets/icons/password.png')} placeholder="Enter current password" />

                        <ButtonContainer onPress={() => {}}>
                            <ButtonText>Edit</ButtonText>
                        </ButtonContainer>
                    </FormContainer>
                </ModalView>
            </CentredView>
        </Modal>
    );
};
