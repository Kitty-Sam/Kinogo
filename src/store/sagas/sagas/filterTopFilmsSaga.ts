import { put, select } from 'redux-saga/effects';
import { getOnlyTopFilms } from '~store/selectors/getTopFilms';
import { ITopFilm } from '~store/models/ITopFilm';
import { fetchTopFilmsError, filterTopFilms } from '~store/reducers/topFilmSlice';
import { FilterTopFilmsType } from '~store/sagas/sagasActions';
import { Alert } from 'react-native';

export function* filterTopFilmsWorker({ payload }: FilterTopFilmsType) {
    const { highRating, highYear, lowYear, lowRating } = payload;
    yield put(filterTopFilms([]));

    const topFilms: ITopFilm[] = yield select(getOnlyTopFilms);

    const filteredYearTopFilms = topFilms.filter((topFilm) => topFilm.year < highYear && topFilm.year > lowYear);
    const filteredYearAndRatingTopFilms = filteredYearTopFilms.filter(
        (topFilm) => Number(topFilm.rating) < highRating && Number(topFilm.rating) > lowRating,
    );

    if (!filteredYearAndRatingTopFilms.length) {
        Alert.alert('Matches are not founded :(! The whole list is available');
        yield put(filterTopFilms([]));
        return;
    }

    yield put(filterTopFilms(filteredYearAndRatingTopFilms));

    try {
    } catch (e: any) {
        yield put(fetchTopFilmsError(e.message));
    }
}
