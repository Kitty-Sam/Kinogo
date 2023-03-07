import React, { FC } from 'react';
import { RatingScreenProps } from '~navigation/RatingsStack/type';
import Icon from 'react-native-vector-icons/Ionicons';
import { THEME_COLORS } from '~constants/theme';
import {
    FilmTextContainer,
    Image,
    ImageContainer,
    RatingContainer,
    ScreenContainer,
    TitleText,
} from '~screens/TopScreens/FilmRatingScreen/style';
import { useColor } from '~hooks/useColor';

export const FilmRatingScreen: FC<RatingScreenProps> = ({ navigation, route }) => {
    const { film } = route.params;
    const { bgColor, textColor } = useColor();

    return (
        <ScreenContainer bgColor={bgColor}>
            <ImageContainer>
                <Image source={{ uri: film.image }} />
            </ImageContainer>
            <FilmTextContainer>
                <TitleText textColor={textColor}>{film.title}</TitleText>
                <RatingContainer>
                    <TitleText textColor={textColor}>{film.rating}</TitleText>
                    <Icon name="star" color={THEME_COLORS.button} size={16} />
                </RatingContainer>
            </FilmTextContainer>
        </ScreenContainer>
    );
};
