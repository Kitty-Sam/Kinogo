import React, { FC, useContext } from 'react';
import { TicketsTabScreenProps } from '~screens/TicketsScreen/type';
import { ThemeContext } from '~context/ThemeContext';
import { THEME_COLORS } from '~constants/theme';
import { ScreenContainer, Title } from '~screens/TicketsScreen/style';

export const TicketsScreen: FC<TicketsTabScreenProps> = () => {
    const { theme } = useContext(ThemeContext);
    const textColor = theme === 'light' ? THEME_COLORS.light.text : THEME_COLORS.dark.text;
    const bgColor = theme === 'light' ? THEME_COLORS.light.background : THEME_COLORS.dark.background;

    return (
        <ScreenContainer bgColor={bgColor}>
            <Title textColor={textColor}>Tickets</Title>
        </ScreenContainer>
    );
};
