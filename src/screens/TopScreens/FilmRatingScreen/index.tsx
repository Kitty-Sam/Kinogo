import React, { FC, useMemo, useRef } from 'react';
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
import { BottomSheetModal } from '@gorhom/bottom-sheet';
import { Text, View } from 'react-native';

export const FilmRatingScreen: FC<RatingScreenProps> = ({ navigation, route }) => {
    const { film } = route.params;
    const { bgColor, textColor } = useColor();

    const bottomSheetModalRef = useRef<any>(null);
    const snapPoints = useMemo(() => ['50%'], []);

    const openModal = () => {
        console.log('press bottom sheet');
        bottomSheetModalRef.current.present();
    };

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
                <Icon name={'home'} onPress={() => openModal()} color="red" />
            </FilmTextContainer>
            <BottomSheetModal ref={bottomSheetModalRef} index={0} snapPoints={snapPoints} style={{ flex: 1 }}>
                <View style={{ flex: 1, alignItems: 'center' }}>
                    <Text style={{ color: 'white' }}>Hello</Text>
                </View>
            </BottomSheetModal>
        </ScreenContainer>
    );
};
