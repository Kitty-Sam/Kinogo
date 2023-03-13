import React from 'react';
import { HomeStackNavigationName, HomeStackParamList } from '~navigation/HomeStack/type';
import { HomeScreen } from '~screens/HomeSreens/HomeScreen';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { RatingStack } from '~navigation/RatingsStack';
import { TicketsStack } from '~navigation/TicketsStack';
import { ProfileScreen } from '~screens/ProfileScreen';
import Icon from 'react-native-vector-icons/Ionicons';
import { useColor } from '~hooks/useColor';

const Tab = createBottomTabNavigator<HomeStackParamList>();
export const HomeStack = () => {
    const { textColor, bgColorModal } = useColor();
    return (
        <Tab.Navigator
            screenOptions={({ route }) => ({
                tabBarIcon: ({ focused, color, size }) => {
                    let iconName = 'star';

                    if (route.name === HomeStackNavigationName.HOME) {
                        iconName = focused ? 'home' : 'home-outline';
                    } else if (route.name === HomeStackNavigationName.TOP) {
                        iconName = focused ? 'ribbon' : 'ribbon-outline';
                    } else if (route.name === HomeStackNavigationName.TICKETS_STACK) {
                        iconName = focused ? 'rocket' : 'rocket-outline';
                    } else if (route.name === HomeStackNavigationName.PROFILE) {
                        iconName = focused ? 'person-circle' : 'person-circle-outline';
                    }
                    return <Icon name={iconName} size={size} color={color} />;
                },
                tabBarActiveTintColor: textColor,
                tabBarInactiveTintColor: 'gray',
                tabBarStyle: {
                    backgroundColor: bgColorModal,
                },
                headerShown: false,
            })}
        >
            <Tab.Screen name={HomeStackNavigationName.HOME} component={HomeScreen} options={{ headerShown: false }} />
            <Tab.Screen name={HomeStackNavigationName.TOP} component={RatingStack} />
            <Tab.Screen name={HomeStackNavigationName.TICKETS_STACK} component={TicketsStack} />
            <Tab.Screen name={HomeStackNavigationName.PROFILE} component={ProfileScreen} />
        </Tab.Navigator>
    );
};
