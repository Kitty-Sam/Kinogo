import { NativeStackScreenProps } from 'react-native-screens/native-stack';
import { IFilm } from '~store/models/IFilm';
import { HomeStackNavigationName } from '~navigation/HomeStack/type';

export type RootStackParamList = {
    [RootStackNavigationName.HOME]: {
        screen: HomeStackNavigationName.TICKETS_STACK;
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
