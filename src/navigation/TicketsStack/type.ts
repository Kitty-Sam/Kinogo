import { NativeStackScreenProps } from 'react-native-screens/native-stack';

export enum TicketsStackNavigationName {
    UPCOMING = 'upcoming',
    PAST = 'past',
    MISSED = 'missed',
}

export type TicketsStackParamList = {
    [TicketsStackNavigationName.UPCOMING]: undefined;
    [TicketsStackNavigationName.PAST]: undefined;
    [TicketsStackNavigationName.MISSED]: undefined;
};

export type UpcomingScreenProps = NativeStackScreenProps<TicketsStackParamList, TicketsStackNavigationName.UPCOMING>;
