import React, { FC, useCallback, useEffect, useState } from 'react';
import { Modal, Text } from 'react-native';
import { FiltersModalPropsType } from '~components/FiltersModal/type';
import {
    AdditionalText,
    CentredView,
    ModalTitle,
    ModalTitleContainer,
    ModalView,
} from '~components/FiltersModal/style';
import { RangeSlider } from '~components/RangeSlider';
import Icon from 'react-native-vector-icons/Ionicons';
import { useColor } from '~hooks/useColor';
import { useAppDispatch } from '~store/hooks';

export const FiltersModal: FC<FiltersModalPropsType> = ({ filtersModalOpen, setFiltersModalOpen }) => {
    const { bgColorModal, textColor } = useColor();

    const dispatch = useAppDispatch();

    const closeModal = () => setFiltersModalOpen();

    return (
        <Modal animationType="slide" transparent={true} visible={filtersModalOpen}>
            <CentredView>
                <ModalView bgColor={bgColorModal}>
                    <ModalTitleContainer>
                        <ModalTitle textColor={textColor}>Filters</ModalTitle>
                        <Icon name={'close-circle-sharp'} onPress={closeModal} color={textColor} size={24} />
                    </ModalTitleContainer>

                    <AdditionalText textColor={textColor}>Year</AdditionalText>

                    <RangeSlider from={1996} to={2023} step={1} />

                    <AdditionalText textColor={textColor}>Rating</AdditionalText>

                    <RangeSlider from={6} to={9} step={0.5} />

                    {/*<Text onPress={() => dispatch(filterTopFilms({ lowYear, highYear, lowRating: 6, highRating: 6 }))}>*/}
                    {/*    Filter*/}
                    {/*</Text>*/}
                </ModalView>
            </CentredView>
        </Modal>
    );
};
