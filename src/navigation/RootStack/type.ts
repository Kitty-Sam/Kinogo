import { NativeStackScreenProps } from 'react-native-screens/native-stack';
import { IFilm } from '~store/models/IFilm';
import { HomeStackNavigationName } from '~navigation/HomeStack/type';
import { ISession } from '~screens/HomeSreens/CinemaScreen/cinemaConst';

export type RootStackParamList = {
    [RootStackNavigationName.HOME]: {
        screen: HomeStackNavigationName.TICKETS_STACK;
        params: { film: IFilm; ticket: { ticketInfo: ISession; amount: number } };
    };
    [RootStackNavigationName.FILM_DETAILS]: { film: IFilm };
    [RootStackNavigationName.CINEMA]: { film: IFilm };
};

export enum RootStackNavigationName {
    HOME = 'HomeTabStack',
    FILM_DETAILS = "Film's details",
    CINEMA = 'Choose Cinema & Tickets',
}

export type FilmDetailsStackScreenProps = NativeStackScreenProps<
    RootStackParamList,
    RootStackNavigationName.FILM_DETAILS
>;
export type CinemaScreenProps = NativeStackScreenProps<RootStackParamList, RootStackNavigationName.CINEMA>;
