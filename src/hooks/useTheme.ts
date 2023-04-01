import { useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { THEMES } from '~context/ThemeContext';

export const useTheme = (initValue: THEMES) => {
    const [theme, setTheme] = useState(initValue);
    const getTheme = async () => {
        try {
            const savedTheme = await AsyncStorage.getItem('theme');
            if (savedTheme) {
                const resultedTheme = await JSON.parse(savedTheme);
                setTheme(resultedTheme);
            } else {
                return THEMES.LIGHT;
            }
        } catch (error) {
            console.log(error);
        }
    };

    const storeTheme = async (value: string) => {
        try {
            await AsyncStorage.setItem('theme', JSON.stringify(value));
        } catch (error) {
            console.log(error);
        }
    };

    return { getTheme, setTheme, theme, storeTheme };
};
