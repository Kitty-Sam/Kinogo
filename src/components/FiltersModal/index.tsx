import React, { FC } from 'react';
import { Modal } from 'react-native';
import { FiltersModalPropsType } from '~components/FiltersModal/type';
import {
    AdditionalText,
    ButtonContainer,
    ButtonText,
    CentredView,
    ModalTitle,
    ModalTitleContainer,
    ModalView,
} from '~components/FiltersModal/style';
import { RangeSlider } from '~components/RangeSlider';
import Icon from 'react-native-vector-icons/Ionicons';
import { useColor } from '~hooks/useColor';
import { useAppDispatch } from '~store/hooks';
import { useRange } from '~components/RangeSlider/useRange';
import { filterTopFilms } from '~store/sagas/sagasActions';

export const FiltersModal: FC<FiltersModalPropsType> = ({ filtersModalOpen, setFiltersModalOpen }) => {
    const { bgColorModal, textColor } = useColor();

    const yearFilter = useRange(1996, 2023);
    const ratingFilter = useRange(6, 9);

    const dispatch = useAppDispatch();

    const closeModal = () => setFiltersModalOpen();

    const filterPress = () => {
        dispatch(
            filterTopFilms({
                lowYear: yearFilter.low,
                highYear: yearFilter.high,
                lowRating: ratingFilter.low,
                highRating: ratingFilter.high,
            }),
        );
        setFiltersModalOpen();
    };

    return (
        <Modal animationType="slide" transparent={true} visible={filtersModalOpen}>
            <CentredView>
                <ModalView bgColor={bgColorModal}>
                    <ModalTitleContainer>
                        <ModalTitle textColor={textColor}>Filters</ModalTitle>
                        <Icon name={'close-circle-sharp'} onPress={closeModal} color={textColor} size={24} />
                    </ModalTitleContainer>

                    <AdditionalText textColor={textColor}>Year</AdditionalText>

                    <RangeSlider
                        low={yearFilter.low}
                        high={yearFilter.high}
                        step={1}
                        handleValueChange={yearFilter.handleValueChange}
                        from={yearFilter.from}
                        to={yearFilter.to}
                    />

                    <AdditionalText textColor={textColor}>Rating</AdditionalText>

                    <RangeSlider
                        low={ratingFilter.low}
                        high={ratingFilter.high}
                        step={0.5}
                        handleValueChange={ratingFilter.handleValueChange}
                        from={ratingFilter.from}
                        to={ratingFilter.to}
                    />

                    <ButtonContainer onPress={filterPress}>
                        <ButtonText>Filter</ButtonText>
                    </ButtonContainer>
                </ModalView>
            </CentredView>
        </Modal>
    );
};
