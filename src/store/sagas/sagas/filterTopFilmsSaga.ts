import { put, select, call } from 'redux-saga/effects';
import { getOnlyTopFilms } from '~store/selectors/getTopFilms';
import { ITopFilm } from '~store/models/ITopFilm';
import { fetchTopFilmsError, filterTopFilms } from '~store/reducers/topFilmSlice';
import { FilterTopFilmsType } from '~store/sagas/sagasActions';
import { Alert } from 'react-native';
import { fetchTopFilmsWorker } from '~store/sagas/sagas/fetchTopFilmsSaga';

export function* filterTopFilmsWorker({ payload }: FilterTopFilmsType) {
    const { filters, search } = payload;
    const { highRating, highYear, lowYear, lowRating } = filters;

    yield put(filterTopFilms([]));

    // yield call(fetchTopFilmsWorker);

    const topFilms: ITopFilm[] = yield select(getOnlyTopFilms);

    try {
        if (search) {
            const filteredBySearchTopFilms = topFilms.filter((topFilm) => topFilm.title.includes(search));
            if (!filteredBySearchTopFilms.length) {
                Alert.alert('Matches are not founded :(! The whole list is available');
                yield put(filterTopFilms([]));
                return;
            }
            yield put(filterTopFilms(filteredBySearchTopFilms));
            return;
        }

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
    } catch (e: any) {
        console.log('error Top Filter', e.message);
        yield put(fetchTopFilmsError(e.message));
    }
}
