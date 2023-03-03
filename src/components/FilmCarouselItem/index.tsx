import { width } from '~constants/dimensions';
import { View } from 'react-native';
import React, { memo, useContext } from 'react';
import Animated, { Extrapolation, interpolate, useAnimatedStyle, useSharedValue } from 'react-native-reanimated';

import { THEME_COLORS } from '~constants/theme';
import { ThemeContext } from '~context/ThemeContext';
import { FilmCarouselItemProps } from '~components/FilmCarouselItem/type';
import { FilmTitleText, ImageContainer, styles } from '~components/FilmCarouselItem/style';

const WIDTH = width;
export const CARD_LEN = WIDTH * 0.6;
export const SPACING = WIDTH * 0.04;
const SIDE_CARD_LEN = (WIDTH * 0.04) / 2;

export const FilmCarouselItem = memo(({ index, scrollX, item }: FilmCarouselItemProps) => {
    const size = useSharedValue(0.8);

    const { theme } = useContext(ThemeContext);
    const textColor = theme === 'light' ? THEME_COLORS.light.text : THEME_COLORS.dark.text;

    const inputRange = [(index - 1) * CARD_LEN, index * CARD_LEN, (index + 1) * CARD_LEN];
    size.value = interpolate(scrollX, inputRange, [0.8, 1, 0.8], Extrapolation.CLAMP);

    const filmStyle = useAnimatedStyle(() => {
        return {
            transform: [{ scaleY: size.value }],
        };
    });

    return (
        <View style={{ flexDirection: 'column', alignItems: 'center' }}>
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
                        uri: item.imageurl.length ? item.imageurl[0] : 'https://picsum.photos/1440/2842?random=7',
                    }}
                />
            </Animated.View>
            <FilmTitleText textColor={textColor}>{item.title}</FilmTitleText>
        </View>
    );
});
