import { createNativeStackNavigator } from '@react-navigation/native-stack';

import React from 'react';
import { RatingStackNavigationName, RatingStackParamList } from '~navigation/RatingsStack/type';
import { TopScreen } from '~screens/TopScreens/TopScreen';
import { FilmRatingScreen } from '~screens/TopScreens/FilmRatingScreen';
import Icon from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';
import { useColor } from '~hooks/useColor';

const Stack = createNativeStackNavigator<RatingStackParamList>();
export const RatingStack = () => {
    const navigation = useNavigation<any>();
    const { textColor, bgColor } = useColor();

    const goBackPress = () => {
        navigation.navigate(RatingStackNavigationName.TOP);
    };

    return (
        <Stack.Navigator
            screenOptions={{
                headerLeft: () => <Icon name={'arrow-back'} onPress={goBackPress} size={24} color={textColor} />,
                headerStyle: {
                    backgroundColor: bgColor,
                },
                headerTitleStyle: {
                    color: textColor,
                },
                headerShadowVisible: false,
            }}
        >
            <Stack.Screen name={RatingStackNavigationName.TOP} component={TopScreen} options={{ headerShown: false }} />
            <Stack.Screen
                name={RatingStackNavigationName.FILM_RATING}
                component={FilmRatingScreen}
                options={{ headerShown: true }}
            />
        </Stack.Navigator>
    );
};
