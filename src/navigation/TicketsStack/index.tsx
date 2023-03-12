import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { TicketsStackNavigationName, TicketsStackParamList } from '~navigation/TicketsStack/type';
import { PastScreen } from '~screens/TicketsScreens/PastScreen';
import { MissedScreen } from '~screens/TicketsScreens/MissedScreen';
import { UpcomingScreen } from '~screens/TicketsScreens/UpcomingScreen';
import { THEME_COLORS } from '~constants/theme';
import { useColor } from '~hooks/useColor';

const TopTab = createMaterialTopTabNavigator();

export const TicketsStack = () => {
    const { bgColorModal, textColor } = useColor();

    return (
        <TopTab.Navigator
            screenOptions={{
                tabBarStyle: { paddingTop: 50, backgroundColor: bgColorModal },
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
