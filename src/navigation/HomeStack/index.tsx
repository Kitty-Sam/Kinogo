import { createNativeStackNavigator } from '@react-navigation/native-stack';

import React from 'react';
import { HomeStackNavigationName, HomeStackParamList } from '~navigation/HomeStack/type';
import { HomeScreen } from '~screens/HomeSreens/HomeScreen';
import { FilmDetailsScreen } from '~screens/HomeSreens/FilmDetailsScreen';
import { CinemaScreen } from '~screens/HomeSreens/CinemaScreen';

const Stack = createNativeStackNavigator<HomeStackParamList>();
export const HomeStack = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name={HomeStackNavigationName.HOME} component={HomeScreen} options={{ headerShown: false }} />
            <Stack.Screen
                name={HomeStackNavigationName.FILM_DETAILS}
                component={FilmDetailsScreen}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name={HomeStackNavigationName.CINEMA}
                component={CinemaScreen}
                // options={{ headerShown: false }}
            />
        </Stack.Navigator>
    );
};
