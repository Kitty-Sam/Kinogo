import React, { useState } from 'react';
import { RootStack } from '~navigation/RootStack';
import { AuthStack } from '~navigation/AuthStack';
import { NavigationContainer } from '@react-navigation/native';

export const App = () => {
    const [isLogged, setIsLogged] = useState(false);
    return <NavigationContainer>{isLogged ? <RootStack /> : <AuthStack />}</NavigationContainer>;
};
