import React, { FC, useEffect, useMemo, useRef, useState } from 'react';
import { RatingScreenProps } from '~navigation/RatingsStack/type';

import {
    BackContainer,
    BackText,
    Image,
    ImageContainer,
    TextCommonContainer,
} from '~screens/TopScreens/FilmRatingScreen/style';
import { useColor } from '~hooks/useColor';
import { BottomSheetModal } from '@gorhom/bottom-sheet';
import { FilmAdditionalInfo } from '~components/FilmAdditionalInfo';
import { StatusBar, Text } from 'react-native';
import ImageColors from 'react-native-image-colors';
import LinearGradient from 'react-native-linear-gradient';
import { THEME_COLORS } from '~constants/theme';
import Icon from 'react-native-vector-icons/Ionicons';

const initState = {
    color: THEME_COLORS.lightColor,
};

export const FilmRatingScreen: FC<RatingScreenProps> = ({ navigation, route }) => {
    const { film } = route.params;
    const { bgColor, textColor } = useColor();

    const getBgColor = async () => {
        const result = await ImageColors.getColors(film.image, {
            fallback: THEME_COLORS.placeholder,
            cache: true,
            key: film.imdbid,
        });

        switch (result.platform) {
            case 'android':
                setColor({ color: result.vibrant! });
                break;

            case 'ios':
                setColor({ color: result.secondary });
                break;

            default:
                setColor({ color: THEME_COLORS.lightColor });
        }
    };

    const [color, setColor] = useState(initState);

    useEffect(() => {
        getBgColor();
    }, []);

    const bottomSheetModalRef = useRef<any>(null);
    const snapPoints = useMemo(() => ['25%', '100%'], []);

    const openModal = () => () => {
        bottomSheetModalRef.current.present();
    };

    useEffect(() => {
        bottomSheetModalRef.current.present();
    }, []);

    const goBackPress = () => {
        navigation.goBack();
    };

    return (
        <LinearGradient colors={[THEME_COLORS.lightColor, color.color]} style={{ flex: 1 }}>
            <BackContainer>
                <Icon name={'arrow-back'} size={18} color={THEME_COLORS.placeholder} onPress={goBackPress} />
                <BackText>{route.name}</BackText>
            </BackContainer>

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
        </LinearGradient>
    );
};
