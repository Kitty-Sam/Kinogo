import {
    ADD_NEW_ORDER,
    FETCH_FILM_DETAILS,
    FETCH_FILMS,
    FETCH_ORDERS,
    FETCH_TOP_FILMS,
    FETCH_USERS,
    FILTER_TOP_FILMS,
    GOOGLE_LOGIN_USER,
    GOOGLE_LOGOUT_USER,
    LOGIN_USER,
    LOGOUT_USER,
    REGISTER_USER,
    REMOVE_ORDER,
    UPDATE_USER,
} from '~store/sagas/sagasActionTypes';
import { IFilm } from '~store/models/IFilm';
import { ISession } from '~screens/HomeSreens/CinemaScreen/cinemaConst';

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

export const googleLoginUser = () => ({
    type: GOOGLE_LOGIN_USER,
});

export type GoogleLoginUserType = ReturnType<typeof googleLoginUser>;

export const googleLogOutUser = () => ({
    type: GOOGLE_LOGOUT_USER,
});

export type GoogleLogOutUserType = ReturnType<typeof googleLogOutUser>;

export const logOutUser = () => {
    return { type: LOGOUT_USER };
};

export const fetchUsers = () => {
    return { type: FETCH_USERS };
};

export interface UpdateUserPayloadType {
    newName: string;
    newSurname: string;
    currentUserId: string;
}
export const updateUser = (payload: UpdateUserPayloadType) => ({
    type: UPDATE_USER,
    payload,
});

export type UpdateUserType = ReturnType<typeof updateUser>;

export interface AddNewOrderPayloadType {
    id: string;
    markedDate: string | number;
    film: IFilm;
    quantity: number;
    session: ISession;
}

//Order
export const addNewOrder = (payload: AddNewOrderPayloadType) => ({
    type: ADD_NEW_ORDER,
    payload,
});

export type AddNewOrderType = ReturnType<typeof addNewOrder>;

export const fetchOrders = () => {
    return { type: FETCH_ORDERS };
};

export type FetchOrdersType = ReturnType<typeof fetchOrders>;

export interface RemoveOrderPayloadType {
    id: string;
}

export const removeOrder = (payload: RemoveOrderPayloadType) => ({
    type: REMOVE_ORDER,
    payload,
});

export type RemoveOrderType = ReturnType<typeof removeOrder>;
