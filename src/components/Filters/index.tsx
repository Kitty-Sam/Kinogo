import React from 'react';

import { RangeSlider } from '~components/RangeSlider';
import Icon from 'react-native-vector-icons/Ionicons';
import { useColor } from '~hooks/useColor';
import { useAppDispatch } from '~store/hooks';
import { useRange } from '~components/RangeSlider/useRange';
import { filterTopFilms } from '~store/sagas/sagasActions';
import { removeModalType } from '~store/reducers/modalSlice';
import { SimpleButton } from '~components/SimpleButton';
import { AdditionalText, CentredSimpleView, ModalTitle, ModalTitleContainer } from '~components/style';
import { THEME_COLORS } from '~constants/theme';
import { initFilterConfig } from '~components/Filters/config';

export const Filters = () => {
    const { textColor } = useColor();
    const { lowYear, lowRating, highYear, highRating, ratingStep, yearStep } = initFilterConfig;

    const year = useRange(lowYear, highYear);
    const rating = useRange(lowRating, highRating);

    const dispatch = useAppDispatch();

    const closeModal = () => dispatch(removeModalType());

    const filterPress = () => {
        dispatch(
            filterTopFilms({
                filters: {
                    lowYear: year.low,
                    highYear: year.high,
                    lowRating: rating.low,
                    highRating: rating.high,
                },
            }),
        );
        dispatch(removeModalType());
    };

    return (
        <>
            <ModalTitleContainer>
                <ModalTitle textColor={textColor}>Filters</ModalTitle>
                <Icon name={'close-circle-sharp'} onPress={closeModal} color={textColor} size={24} />
            </ModalTitleContainer>

            <AdditionalText textColor={textColor}>Year</AdditionalText>

            <RangeSlider
                low={year.low}
                high={year.high}
                step={yearStep}
                handleValueChange={year.handleValueChange}
                from={year.from}
                to={year.to}
            />

            <AdditionalText textColor={textColor}>Rating</AdditionalText>

            <RangeSlider
                low={rating.low}
                high={rating.high}
                step={ratingStep}
                handleValueChange={rating.handleValueChange}
                from={rating.from}
                to={rating.to}
            />
            <CentredSimpleView>
                <SimpleButton
                    title={'Filter'}
                    onPress={filterPress}
                    backgroundColor={THEME_COLORS.button}
                    textColor={THEME_COLORS.lightColor}
                />
            </CentredSimpleView>
        </>
    );
};
