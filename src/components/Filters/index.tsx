import React from 'react';

import { RangeSlider } from '~components/RangeSlider';
import Icon from 'react-native-vector-icons/Ionicons';
import { useColor } from '~hooks/useColor';
import { useAppDispatch } from '~store/hooks';
import { useRange } from '~components/RangeSlider/useRange';
import { filterTopFilms } from '~store/sagas/sagasActions';
import { removeModalType } from '~store/reducers/modalSlice';
import { SimpleButton } from '~components/SimpleButton';
import { AdditionalText, ModalTitle, ModalTitleContainer } from '~components/style';
import { THEME_COLORS } from '~constants/theme';
import { View } from 'react-native';

export const Filters = () => {
    const { textColor } = useColor();

    const yearFilter = useRange(1996, 2023);
    const ratingFilter = useRange(6, 9);

    const dispatch = useAppDispatch();

    const closeModal = () => dispatch(removeModalType());

    const filterPress = () => {
        dispatch(
            filterTopFilms({
                filters: {
                    lowYear: yearFilter.low,
                    highYear: yearFilter.high,
                    lowRating: ratingFilter.low,
                    highRating: ratingFilter.high,
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
            <View style={{ alignItems: 'center' }}>
                <SimpleButton
                    title={'Filter'}
                    onPress={filterPress}
                    backgroundColor={THEME_COLORS.button}
                    textColor={THEME_COLORS.lightColor}
                />
            </View>
        </>
    );
};
