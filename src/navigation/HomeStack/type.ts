import { NativeStackScreenProps } from 'react-native-screens/native-stack';
import { IFilm } from '~store/models/IFilm';

export enum HomeStackNavigationName {
    HOME = 'Home',
    FILM_DETAILS = "Films' details",
    CINEMA = 'Choose Cinema & Seats',
}

export type HomeStackParamList = {
    [HomeStackNavigationName.HOME]: undefined;
    [HomeStackNavigationName.FILM_DETAILS]: { film: IFilm };
    [HomeStackNavigationName.CINEMA]: { film: IFilm };
};

export type HomeScreenProps = NativeStackScreenProps<HomeStackParamList, HomeStackNavigationName.HOME>;
export type FilmDetailsScreenProps = NativeStackScreenProps<HomeStackParamList, HomeStackNavigationName.FILM_DETAILS>;
export type CinemaScreenProps = NativeStackScreenProps<HomeStackParamList, HomeStackNavigationName.CINEMA>;
