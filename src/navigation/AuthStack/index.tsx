import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { AuthStackNavigationName, AuthStackParamList } from '~navigation/AuthStack/type';
import { WelcomeScreen } from '~screens/WelcomeScreen';

const Stack = createNativeStackNavigator<AuthStackParamList>();
export const AuthStack = () => {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name={AuthStackNavigationName.WELCOME} component={WelcomeScreen} />
        </Stack.Navigator>
    );
};
