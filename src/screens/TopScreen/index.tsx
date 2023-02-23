import React, { FC, useContext } from 'react';
import { Text } from 'react-native';
import { TopTabScreenProps } from '~screens/TopScreen/type';
import { ScreenContainer, Title } from '~screens/TopScreen/style';
import { ThemeContext } from '~context/ThemeContext';
import { THEME_COLORS } from '~constants/theme';

export const TopScreen: FC<TopTabScreenProps> = () => {
    const { theme } = useContext(ThemeContext);
    const textColor = theme === 'light' ? THEME_COLORS.light.text : THEME_COLORS.dark.text;
    const bgColor = theme === 'light' ? THEME_COLORS.light.background : THEME_COLORS.dark.background;

    return (
        <ScreenContainer bgColor={bgColor}>
            <Title textColor={textColor}>Top</Title>
        </ScreenContainer>
    );
};
