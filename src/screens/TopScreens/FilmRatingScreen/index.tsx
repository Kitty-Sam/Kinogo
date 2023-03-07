import React, { FC, useEffect, useMemo, useRef } from 'react';
import { RatingScreenProps } from '~navigation/RatingsStack/type';

import {
    Image,
    ImageContainer,
    ScreenContainer,
    TextCommonContainer,
} from '~screens/TopScreens/FilmRatingScreen/style';
import { useColor } from '~hooks/useColor';
import { BottomSheetModal } from '@gorhom/bottom-sheet';
import { FilmAdditionalInfo } from '~components/FilmAdditionalInfo';
import { StatusBar } from 'react-native';

export const FilmRatingScreen: FC<RatingScreenProps> = ({ navigation, route }) => {
    const { film } = route.params;
    const { bgColor, textColor } = useColor();

    const bottomSheetModalRef = useRef<any>(null);
    const snapPoints = useMemo(() => ['20%', '90%'], []);

    const openModal = () => () => {
        bottomSheetModalRef.current.present();
    };

    useEffect(() => {
        bottomSheetModalRef.current.present();
    }, []);

    return (
        <ScreenContainer bgColor={bgColor}>
            <StatusBar hidden />
            <ImageContainer>
                <Image source={{ uri: film.image }} />
            </ImageContainer>
            <TextCommonContainer>
                <BottomSheetModal
                    ref={bottomSheetModalRef}
                    index={0}
                    snapPoints={snapPoints}
                    backgroundStyle={{
                        backgroundColor: bgColor,
                    }}
                >
                    <FilmAdditionalInfo film={film} openModal={openModal} textColor={textColor} />
                </BottomSheetModal>
            </TextCommonContainer>
        </ScreenContainer>
    );
};
