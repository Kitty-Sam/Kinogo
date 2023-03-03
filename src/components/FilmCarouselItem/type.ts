import { IFilm } from '~store/models/IFilm';

export interface FilmCarouselItemProps {
    index: number;
    scrollX: number;
    item: IFilm;
}
