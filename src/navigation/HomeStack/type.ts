import { BottomTabScreenProps } from '@react-navigation/bottom-tabs';

export enum HomeStackNavigationName {
    HOME = 'Home',
    TOP = 'Top',
    TICKETS_STACK = 'Tickets',
    PROFILE = 'Profile',
}

export type HomeStackParamList = {
    [HomeStackNavigationName.HOME]: undefined;
    [HomeStackNavigationName.TOP]: undefined;
    [HomeStackNavigationName.TICKETS_STACK]: undefined;
    [HomeStackNavigationName.PROFILE]: undefined;
};

export type HomeScreenProps = BottomTabScreenProps<HomeStackParamList, HomeStackNavigationName.HOME>;
export type ProfileScreenProps = BottomTabScreenProps<HomeStackParamList, HomeStackNavigationName.PROFILE>;
