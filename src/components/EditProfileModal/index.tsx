import React, { FC, useContext } from 'react';
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
import { ThemeContext } from '~context/ThemeContext';
import { THEME_COLORS } from '~constants/theme';

export const EditProfileModal: FC<EditProfilePropsType> = ({ editModalOpen, setEditModalOpen }) => {
    const { theme } = useContext(ThemeContext);
    const textColor = theme === 'light' ? THEME_COLORS.light.text : THEME_COLORS.dark.text;
    const bgColor = theme === 'light' ? THEME_COLORS.light.themeButton : THEME_COLORS.dark.themeButton;

    return (
        <Modal animationType="slide" transparent={true} visible={editModalOpen}>
            <CentredView>
                <ModalView bgColor={bgColor}>
                    <ModalTitleContainer>
                        <ModalTitle textColor={textColor}>Edit your profile</ModalTitle>
                        <ModalTitle textColor={textColor} onPress={() => setEditModalOpen()}>
                            x
                        </ModalTitle>
                    </ModalTitleContainer>
                    <FormContainer>
                        <AdditionalText textColor={textColor}>Change your personal data</AdditionalText>
                        <ModalInput icon={require('~assets/icons/name.png')} placeholder="Enter your new name" />
                        <ModalInput icon={require('~assets/icons/surname.png')} placeholder="Enter your new surname" />
                        <AdditionalText textColor={textColor}>Change your password</AdditionalText>
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
