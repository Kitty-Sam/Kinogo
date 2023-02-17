import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { HomeScreen } from '~screens/HomeScreen';
import { FilmsScreen } from '~screens/FilmsScreen';
import { RootStackNavigationName, RootStackParamList } from '~navigation/RootStack/type';

const Tab = createBottomTabNavigator<RootStackParamList>();

export const RootStack = () => {
    return (
        <NavigationContainer>
            <Tab.Navigator>
                <Tab.Screen name={RootStackNavigationName.HOME} component={HomeScreen} />
                <Tab.Screen name={RootStackNavigationName.FILMS} component={FilmsScreen} />
            </Tab.Navigator>
        </NavigationContainer>
    );
};
