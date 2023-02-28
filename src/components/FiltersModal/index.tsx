import React, { FC, useContext } from 'react';
import { Modal } from 'react-native';
import { ThemeContext } from '~context/ThemeContext';
import { THEME_COLORS } from '~constants/theme';
import { FiltersModalPropsType } from '~components/FiltersModal/type';
import {
    AdditionalText,
    BackDrop,
    CentredView,
    ModalTitle,
    ModalTitleContainer,
    ModalView,
} from '~components/FiltersModal/style';

export const FiltersModal: FC<FiltersModalPropsType> = ({ filtersModalOpen, setFiltersModalOpen }) => {
    const { theme } = useContext(ThemeContext);
    const textColor = theme === 'light' ? THEME_COLORS.light.text : THEME_COLORS.dark.text;
    const bgColor = theme === 'light' ? THEME_COLORS.light.themeButton : THEME_COLORS.dark.themeButton;

    const closeModal = () => setFiltersModalOpen();

    return (
        <Modal animationType="slide" transparent={true} visible={filtersModalOpen}>
            <BackDrop onPress={closeModal}>
                <CentredView>
                    <ModalView bgColor={bgColor}>
                        <ModalTitleContainer>
                            <ModalTitle textColor={textColor}>Filters</ModalTitle>
                            <ModalTitle textColor={textColor} onPress={closeModal}>
                                x
                            </ModalTitle>
                        </ModalTitleContainer>

                        <AdditionalText textColor={textColor}>Year</AdditionalText>
                        <AdditionalText textColor={textColor}>Rating</AdditionalText>
                    </ModalView>
                </CentredView>
            </BackDrop>
        </Modal>
    );
};
