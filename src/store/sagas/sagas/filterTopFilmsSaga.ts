import { put, select } from 'redux-saga/effects';
import { getOnlyTopFilms } from '~store/selectors/getTopFilms';
import { ITopFilm } from '~store/models/ITopFilm';
import { fetchTopFilmsError, filterTopFilms } from '~store/reducers/topFilmSlice';
import { FilterTopFilmsType } from '~store/sagas/sagasActions';

export function* filterTopFilmsWorker({ payload }: FilterTopFilmsType) {
    const { highRating, highYear, lowYear, lowRating } = payload;
    const topFilms: ITopFilm[] = yield select(getOnlyTopFilms);

    const filteredYearTopFilms = topFilms.filter((topFilm) => topFilm.year < highYear && topFilm.year > lowYear);
    const filteredYearAndRatingTopFilms = filteredYearTopFilms.filter(
        (topFilm) => Number(topFilm.rating) < highRating && Number(topFilm.rating) > lowRating,
    );

    yield put(filterTopFilms(filteredYearAndRatingTopFilms));

    try {
    } catch (e: any) {
        yield put(fetchTopFilmsError(e.message));
    }
}
