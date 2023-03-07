import { createNativeStackNavigator } from '@react-navigation/native-stack';

import React from 'react';
import { RatingStackNavigationName, RatingStackParamList } from '~navigation/RatingsStack/type';
import { TopScreen } from '~screens/TopScreens/TopScreen';
import { FilmRatingScreen } from '~screens/TopScreens/FilmRatingScreen';

const Stack = createNativeStackNavigator<RatingStackParamList>();
export const RatingStack = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name={RatingStackNavigationName.TOP} component={TopScreen} options={{ headerShown: false }} />
            <Stack.Screen
                name={RatingStackNavigationName.FILM_RATING}
                component={FilmRatingScreen}
                options={{ headerShown: false }}
            />
        </Stack.Navigator>
    );
};
