import { NativeStackScreenProps } from 'react-native-screens/native-stack';
import { HomeStackNavigationName } from '~navigation/HomeStack/type';
import { IFilm } from '~store/models/IFilm';
import { ISession } from '~screens/HomeSreens/CinemaScreen/cinemaConst';

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
