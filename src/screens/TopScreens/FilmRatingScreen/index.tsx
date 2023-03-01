import React, { FC } from 'react';
import { SafeAreaView, Text } from 'react-native';
import { RatingScreenProps } from '~navigation/RatingsStack/type';

export const FilmRatingScreen: FC<RatingScreenProps> = ({ navigation, route }) => {
    const { film } = route.params;

    return (
        <SafeAreaView>
            <Text style={{ color: 'black' }}>{film.title}</Text>
        </SafeAreaView>
    );
};
