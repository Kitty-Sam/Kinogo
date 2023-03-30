import { ITopFilm } from '~store/models/ITopFilm';

export interface FilmAdditionalInfoPropsType {
    film: ITopFilm;
    openModal: any;
    textColor: string;
}
