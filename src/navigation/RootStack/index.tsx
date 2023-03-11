import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { RootStackNavigationName, RootStackParamList } from '~navigation/RootStack/type';
import Icon from 'react-native-vector-icons/Ionicons';
import { ProfileScreen } from '~screens/ProfileScreen';
import { TicketsStack } from '~navigation/TicketsStack';
import { RatingStack } from '~navigation/RatingsStack';
import { useColor } from '~hooks/useColor';
import { HomeStack } from '~navigation/HomeStack';

const Tab = createBottomTabNavigator<RootStackParamList>();

export const RootStack = () => {
    const { textColor, bgColorModal } = useColor();

    return (
        <Tab.Navigator
            screenOptions={({ route }) => ({
                tabBarIcon: ({ focused, color, size }) => {
                    let iconName = 'star';

                    if (route.name === RootStackNavigationName.HOME) {
                        iconName = focused ? 'home' : 'home-outline';
                    } else if (route.name === RootStackNavigationName.TOP) {
                        iconName = focused ? 'ribbon' : 'ribbon-outline';
                    } else if (route.name === RootStackNavigationName.TICKETS) {
                        iconName = focused ? 'rocket' : 'rocket-outline';
                    } else if (route.name === RootStackNavigationName.PROFILE) {
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
            <Tab.Screen name={RootStackNavigationName.HOME} component={HomeStack} />
            <Tab.Screen name={RootStackNavigationName.TOP} component={RatingStack} />
            <Tab.Screen name={RootStackNavigationName.TICKETS} component={TicketsStack} />
            <Tab.Screen name={RootStackNavigationName.PROFILE} component={ProfileScreen} />
        </Tab.Navigator>
    );
};
