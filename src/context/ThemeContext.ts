import { createContext } from 'react';

export const THEMES = {
    dark: 'light',
    light: 'dark',
};

export const ThemeContext = createContext<{
    theme: string;
    setTheme: (value: string) => void;
}>({
    theme: THEMES.light,
    setTheme: () => {},
});
