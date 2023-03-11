import React, { FC } from 'react';
import { Text } from 'react-native';
import { CinemaScreenProps } from '~navigation/HomeStack/type';

export const CinemaScreen: FC<CinemaScreenProps> = ({ route }) => {
    const { film } = route.params;
    return <Text>{film.title}</Text>;
};
