import React from 'react';
import { RootStackNavigationName, RootStackParamList } from '~navigation/RootStack/type';
import { HomeStack } from '~navigation/HomeStack';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { FilmDetailsScreen } from '~screens/HomeSreens/FilmDetailsScreen';
import { CinemaScreen } from '~screens/HomeSreens/CinemaScreen';

const Stack = createNativeStackNavigator<RootStackParamList>();

export const RootStack = () => {
    return (
        <Stack.Navigator
            screenOptions={{
                headerShown: false,
            }}
        >
            <Stack.Screen name={RootStackNavigationName.HOME} component={HomeStack} />
            <Stack.Screen
                name={RootStackNavigationName.FILM_DETAILS}
                component={FilmDetailsScreen}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name={RootStackNavigationName.CINEMA}
                component={CinemaScreen}
                options={{ headerShown: false }}
            />
        </Stack.Navigator>
    );
};
