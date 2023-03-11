import { width } from '~constants/dimensions';
import React, { memo } from 'react';
import Animated, { Extrapolation, interpolate, useAnimatedStyle, useSharedValue } from 'react-native-reanimated';
import { FilmCarouselItemProps } from '~components/FilmCarouselItem/type';
import { FilmContainer, FilmTitleText, ImageContainer, styles } from '~components/FilmCarouselItem/style';
import { useColor } from '~hooks/useColor';
import { poster } from '~constants/posters';
import { useAppDispatch } from '~store/hooks';
import { fetchFilmDetails } from '~store/sagas/sagasActions';
import { useNavigation } from '@react-navigation/native';
import { HomeStackNavigationName } from '~navigation/HomeStack/type';

export const WIDTH = width;
export const CARD_LEN = WIDTH * 0.6;
export const SPACING = WIDTH * 0.04;
export const SIDE_CARD_LEN = (WIDTH * 0.04) / 2;

export const FilmCarouselItem = memo(({ index, scrollX, item }: FilmCarouselItemProps) => {
    const size = useSharedValue(0.8);
    const { textColor } = useColor();

    const navigation = useNavigation<any>();

    const inputRange = [(index - 1) * CARD_LEN, index * CARD_LEN, (index + 1) * CARD_LEN];
    size.value = interpolate(scrollX, inputRange, [0.8, 1, 0.8], Extrapolation.CLAMP);

    const filmStyle = useAnimatedStyle(() => {
        return {
            transform: [{ scaleY: size.value }],
        };
    });

    return (
        <FilmContainer
            onLongPress={() => {
                navigation.navigate(HomeStackNavigationName.FILM_DETAILS, { film: item });
            }}
        >
            <Animated.View
                style={[
                    styles.root,
                    filmStyle,
                    {
                        marginLeft: index == 0 ? SIDE_CARD_LEN : SPACING,
                        marginRight: index == 2 ? SIDE_CARD_LEN : SPACING,
                    },
                ]}
            >
                <ImageContainer
                    source={{
                        uri: item.imageurl.length ? item.imageurl[0] : poster,
                    }}
                />
            </Animated.View>
            <FilmTitleText textColor={textColor}>{item.title}</FilmTitleText>
        </FilmContainer>
    );
});
