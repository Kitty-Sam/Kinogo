import {
    FETCH_FILM_DETAILS,
    FETCH_FILMS,
    FETCH_TOP_FILMS,
    FETCH_USERS,
    FILTER_TOP_FILMS,
    LOGIN_USER,
    LOGOUT_USER,
    REGISTER_USER,
} from '~store/sagas/sagasActionTypes';

//Fetch data Actions
export const fetchFilms = () => {
    return { type: FETCH_FILMS };
};

export const fetchTopFilms = () => {
    return { type: FETCH_TOP_FILMS };
};

export interface FilterTopFilmPayloadType {
    filters: {
        lowYear: number;
        highYear: number;
        lowRating: number;
        highRating: number;
    };
    search?: string;
}
export const filterTopFilms = (payload: FilterTopFilmPayloadType) => {
    return { type: FILTER_TOP_FILMS, payload };
};

export type FilterTopFilmsType = ReturnType<typeof filterTopFilms>;

export interface FetchFilmDetailsPayloadType {
    id: string;
}
export const fetchFilmDetails = (payload: FetchFilmDetailsPayloadType) => {
    return { type: FETCH_FILM_DETAILS, payload };
};

export type FetchFilmDetailsType = ReturnType<typeof fetchFilmDetails>;

//Register and Login Actions

export interface RegisterPayloadType {
    password: string;
    email: string;
    name: string;
    surname: string;
    // navigation: StackNavigationProp<AuthStackParamList>;
}

export const registerUser = (payload: RegisterPayloadType) => ({
    type: REGISTER_USER,
    payload,
});

export type RegisterUserType = ReturnType<typeof registerUser>;

export interface LoginPayloadType {
    password: string;
    email: string;
}
export const loginUser = (payload: LoginPayloadType) => ({
    type: LOGIN_USER,
    payload,
});

export type LoginUserType = ReturnType<typeof loginUser>;

export const logOutUser = () => {
    return { type: LOGOUT_USER };
};

export const fetchUsers = () => {
    return { type: FETCH_USERS };
};
