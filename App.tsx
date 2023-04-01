import React, { useEffect } from 'react';
import { RootStack } from '~navigation/RootStack';
import { AuthStack } from '~navigation/AuthStack';
import { NavigationContainer } from '@react-navigation/native';
import { ThemeContext, THEMES } from '~context/ThemeContext';
import { useTheme } from '~hooks/useTheme';
import { useAppDispatch, useAppSelector } from '~store/hooks';
import { getUserInfo } from '~store/selectors/getUserInfo';
import { fetchFilms, fetchTopFilms } from '~src/store/sagas/sagasActions';
import { GoogleSignin } from '@react-native-google-signin/google-signin';
import Config from 'react-native-config';

export const App = () => {
    const { theme, setTheme, getTheme } = useTheme(THEMES.LIGHT);

    const { isLogged } = useAppSelector(getUserInfo);

    const dispatch = useAppDispatch();

    useEffect(() => {
        // dispatch(fetchFilms());
        // dispatch(fetchTopFilms());
    }, []);

    useEffect(() => {
        getTheme();
    }, []);

    useEffect(() => {
        GoogleSignin.configure({
            webClientId: Config.WEB_CLIENT_ID!,
        });
    }, []);

    return (
        <ThemeContext.Provider value={{ theme, setTheme }}>
            <NavigationContainer>{isLogged ? <RootStack /> : <AuthStack />}</NavigationContainer>
        </ThemeContext.Provider>
    );
};
