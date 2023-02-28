import React, { useEffect, useState } from 'react';
import { RootStack } from '~navigation/RootStack';
import { AuthStack } from '~navigation/AuthStack';
import { NavigationContainer } from '@react-navigation/native';
import { ThemeContext, THEMES } from '~context/ThemeContext';
import { useTheme } from '~hooks/useTheme';
import { useAppDispatch } from '~store/hooks';
import { fetchingFilms } from '~store/reducers/ActionsCreators';

export const App = () => {
    const [isLogged, setIsLogged] = useState(true);

    const dispatch = useAppDispatch();

    useEffect(() => {
        // dispatch(fetchingFilms());
    }, []);

    const { theme, setTheme, getTheme } = useTheme(THEMES.light);

    useEffect(() => {
        getTheme();
    }, []);

    return (
        <ThemeContext.Provider value={{ theme, setTheme }}>
            <NavigationContainer>{isLogged ? <RootStack /> : <AuthStack />}</NavigationContainer>
        </ThemeContext.Provider>
    );
};
