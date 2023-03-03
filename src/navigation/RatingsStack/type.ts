import { ITopFilm } from '~store/models/ITopFilm';
import { NativeStackScreenProps } from 'react-native-screens/native-stack';

export enum RatingStackNavigationName {
    TOP = 'TOP',
    FILM_RATING = "Films' rating",
}

export type RatingStackParamList = {
    [RatingStackNavigationName.TOP]: undefined;
    [RatingStackNavigationName.FILM_RATING]: { film: ITopFilm };
};

export type TopScreenProps = NativeStackScreenProps<RatingStackParamList, RatingStackNavigationName.TOP>;
export type RatingScreenProps = NativeStackScreenProps<RatingStackParamList, RatingStackNavigationName.FILM_RATING>;
