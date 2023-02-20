import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { HomeScreen } from '~screens/HomeScreen';
import { RootStackNavigationName, RootStackParamList } from '~navigation/RootStack/type';
import Icon from 'react-native-vector-icons/Ionicons';
import { TopScreen } from '~screens/TopScreen';
import { TicketsScreen } from '~screens/TicketsScreen';
import { ProfileScreen } from '~screens/ProfileScreen';

const Tab = createBottomTabNavigator<RootStackParamList>();

export const RootStack = () => {
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
                tabBarActiveTintColor: 'tomato',
                tabBarInactiveTintColor: 'gray',
                headerShown: false,
            })}
        >
            <Tab.Screen name={RootStackNavigationName.HOME} component={HomeScreen} />
            <Tab.Screen name={RootStackNavigationName.TOP} component={TopScreen} />
            <Tab.Screen name={RootStackNavigationName.TICKETS} component={TicketsScreen} />
            <Tab.Screen name={RootStackNavigationName.PROFILE} component={ProfileScreen} />
        </Tab.Navigator>
    );
};
