import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { TicketsStackNavigationName } from '~navigation/TicketsStack/type';
import { PastScreen } from '~screens/TicketsScreens/PastScreen';
import { MissedScreen } from '~screens/TicketsScreens/MissedScreen';
import { UpcomingScreen } from '~screens/TicketsScreens/UpcomingScreen';
import { THEME_COLORS } from '~constants/theme';
import { useContext } from 'react';
import { ThemeContext } from '~context/ThemeContext';

const TopTab = createMaterialTopTabNavigator();

export const TicketsStack = () => {
    const { theme } = useContext(ThemeContext);
    const bgColor = theme === 'light' ? THEME_COLORS.light.background : THEME_COLORS.dark.background;
    const textColor = theme === 'light' ? THEME_COLORS.light.text : THEME_COLORS.dark.text;

    return (
        <TopTab.Navigator
            screenOptions={{
                tabBarStyle: { paddingTop: 50, backgroundColor: bgColor },
                tabBarActiveTintColor: THEME_COLORS.button,
                tabBarInactiveTintColor: textColor,
                tabBarIndicatorStyle: {
                    backgroundColor: THEME_COLORS.button,
                },
                tabBarLabelStyle: {
                    textTransform: 'none',
                    fontSize: 17,
                },
            }}
        >
            <TopTab.Screen name={TicketsStackNavigationName.UPCOMING} component={UpcomingScreen} />
            <TopTab.Screen name={TicketsStackNavigationName.PAST} component={PastScreen} />
            <TopTab.Screen name={TicketsStackNavigationName.MISSED} component={MissedScreen} />
        </TopTab.Navigator>
    );
};
