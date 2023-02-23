import React, { useContext } from 'react';
import { StatusBar, Text } from 'react-native';
import { ThemeContext } from '~context/ThemeContext';
import { THEME_COLORS } from '~constants/theme';
import { ScreenContainer, Title } from '~screens/TicketsScreens/style';

export const MissedScreen = () => {
    const { theme } = useContext(ThemeContext);
    const statusBar = theme === 'light' ? 'dark-content' : 'light-content';
    const bgColor = theme === 'light' ? THEME_COLORS.light.background : THEME_COLORS.dark.background;
    const textColor = theme === 'light' ? THEME_COLORS.light.text : THEME_COLORS.dark.text;

    return (
        <ScreenContainer bgColor={bgColor}>
            <StatusBar barStyle={statusBar} />
            <Title textColor={textColor}>missed</Title>
        </ScreenContainer>
    );
};
