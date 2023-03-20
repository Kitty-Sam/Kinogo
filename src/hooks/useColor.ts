import { useContext } from 'react';
import { ThemeContext, THEMES } from '~context/ThemeContext';
import { THEME_COLORS } from '~constants/theme';
import { StatusBarStyle } from 'react-native';

export const useColor = () => {
    const { theme } = useContext(ThemeContext);
    const bgColor = theme === THEMES.LIGHT ? THEME_COLORS.light.background : THEME_COLORS.dark.background;
    const bgColorModal = theme === THEMES.LIGHT ? THEME_COLORS.light.themeButton : THEME_COLORS.dark.themeButton;
    const textColor = theme === THEMES.LIGHT ? THEME_COLORS.light.text : THEME_COLORS.dark.text;
    const themeButtonWhite = theme === THEMES.LIGHT ? THEME_COLORS.dark.themeButton : THEME_COLORS.light.themeButton;
    const themeButtonBlack = theme === THEMES.LIGHT ? THEME_COLORS.light.themeButton : THEME_COLORS.dark.themeButton;
    const textColorBlack = theme === THEMES.LIGHT ? THEME_COLORS.dark.themeButton : THEME_COLORS.light.themeButton;
    const textColorWhite = theme === THEMES.LIGHT ? THEME_COLORS.light.themeButton : THEME_COLORS.dark.themeButton;
    const statusBar = theme === THEMES.LIGHT ? ('dark-content' as StatusBarStyle) : ('light-content' as StatusBarStyle);
    const color = theme === THEMES.LIGHT ? THEME_COLORS.light.text : THEME_COLORS.dark.text;

    return {
        bgColor,
        textColor,
        textColorWhite,
        textColorBlack,
        themeButtonWhite,
        themeButtonBlack,
        statusBar,
        theme,
        color,
        bgColorModal,
    };
};
