import { createContext } from 'react';

export enum THEMES {
    DARK = 'dark',
    LIGHT = 'light',
}

export const ThemeContext = createContext<{
    theme: THEMES;
    setTheme: (value: THEMES) => void;
}>({
    theme: THEMES.LIGHT,
    setTheme: () => {},
});
