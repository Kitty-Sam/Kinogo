import { put, select } from 'redux-saga/effects';
import { getOnlyTopFilms } from '~store/selectors/getTopFilms';
import { ITopFilm } from '~store/models/ITopFilm';
import { filterTopFilms } from '~store/reducers/topFilmSlice';
import { FilterTopFilmsType } from '~store/sagas/sagasActions';

export function* filterTopFilmsWorker({ payload }: FilterTopFilmsType) {
    const { highRating, highYear, lowYear, lowRating } = payload;
    const topFilms: ITopFilm[] = yield select(getOnlyTopFilms);

    const filteredTopFilms = topFilms.filter((topFilm) => topFilm.year < highYear && topFilm.year > lowYear);

    yield put(filterTopFilms(filteredTopFilms));
    try {
    } catch (e: any) {
        console.log('error filter');
    }
}
