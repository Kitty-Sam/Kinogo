import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { HomeScreen } from '~screens/HomeScreen';
import { FilmsScreen } from '~screens/FilmsScreen';
import { RootStackNavigationName, RootStackParamList } from '~navigation/RootStack/type';
import Icon from 'react-native-vector-icons/Ionicons';

const Tab = createBottomTabNavigator<RootStackParamList>();

export const RootStack = () => {
    return (
        <NavigationContainer>
            <Tab.Navigator
                screenOptions={({ route }) => ({
                    tabBarIcon: ({ focused, color, size }) => {
                        let iconName = 'star';

                        if (route.name === RootStackNavigationName.HOME) {
                            iconName = focused ? 'ios-information-circle' : 'ios-information-circle-outline';
                        } else if (route.name === RootStackNavigationName.FILMS) {
                            iconName = focused ? 'ios-list' : 'ios-list-outline';
                        }
                        return <Icon name={iconName} size={size} color={color} />;
                    },
                    tabBarActiveTintColor: 'tomato',
                    tabBarInactiveTintColor: 'gray',
                })}
            >
                <Tab.Screen name={RootStackNavigationName.HOME} component={HomeScreen} />
                <Tab.Screen name={RootStackNavigationName.FILMS} component={FilmsScreen} />
            </Tab.Navigator>
        </NavigationContainer>
    );
};
